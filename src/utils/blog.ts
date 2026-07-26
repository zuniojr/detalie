// Helper para processamento dos posts do blog importados

const allImages = import.meta.glob<{ default: { src: string } | string }>(
  '/src/content/posts/**/*.{png,jpg,jpeg,webp,svg,gif}',
  { eager: true }
);

export function getPostCoverImage(postSlug: string, coverImageName?: string): string {
  if (!coverImageName) {
    return '/assets/images/hero-bg.jpg';
  }

  if (
    coverImageName.startsWith('http://') ||
    coverImageName.startsWith('https://') ||
    coverImageName.startsWith('/')
  ) {
    return coverImageName;
  }

  // Limpar prefixos caso existam
  const cleanImgName = coverImageName.replace(/^(\.\.\/)+assets\/images\//, '');
  if (cleanImgName !== coverImageName) {
    // É uma imagem da pasta de assets globais
    return `/src/assets/images/${cleanImgName}`;
  }

  // Tentar encontrar na pasta de imagens do próprio post
  const keyWithImages = `/src/content/posts/${postSlug}/images/${coverImageName}`;
  const keyDirect = `/src/content/posts/${postSlug}/${coverImageName}`;

  const match = allImages[keyWithImages] || allImages[keyDirect];
  if (match) {
    return typeof match.default === 'string' ? match.default : match.default?.src || '';
  }

  return '/assets/images/hero-bg.jpg';
}

export interface PostMeta {
  slug: string;
  rawId: string;
  title: string;
  pubDate: Date;
  author: string;
  tags: string[];
  description: string;
  coverImage: string;
  readTime: string;
}

export function getPostMeta(post: any): PostMeta {
  const rawId = post.id;
  const cleanSlug = post.id.replace(/\/index$/, '').replace(/\.md$/, '');
  const title = post.data.title || 'Artigo Detaliê Móveis';
  const pubDate = post.data.pubDate || post.data.date || new Date('2025-05-01');
  const author = post.data.author || 'Detaliê Móveis';
  
  let tags: string[] = [];
  if (Array.isArray(post.data.tags) && post.data.tags.length > 0) {
    tags = post.data.tags;
  } else if (Array.isArray(post.data.categories) && post.data.categories.length > 0) {
    tags = post.data.categories;
  } else {
    tags = ['Móveis Planejados'];
  }

  // Limpar slugs das tags (ex: 'detalie-moveis-navegantes' -> 'Detaliê Móveis')
  tags = tags.map(t => t.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()));

  let description = post.data.description;
  if (!description && post.body) {
    const cleanBody = post.body
      .replace(/^[#*->\s]+.*$/gm, '')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/!\[.*?\]\(.*?\)/g, '')
      .trim();
    description = cleanBody.slice(0, 160) + (cleanBody.length > 160 ? '...' : '');
  }
  if (!description) {
    description = 'Confira este artigo no blog da Detaliê Móveis Sob Medida em Navegantes e região.';
  }

  const wordCount = post.body ? post.body.trim().split(/\s+/).length : 300;
  const readTimeMinutes = Math.max(1, Math.ceil(wordCount / 200));
  const readTime = `${readTimeMinutes} min de leitura`;

  const coverImage = getPostCoverImage(cleanSlug, post.data.coverImage);

  return {
    slug: cleanSlug,
    rawId,
    title,
    pubDate,
    author,
    tags,
    description,
    coverImage,
    readTime,
  };
}
