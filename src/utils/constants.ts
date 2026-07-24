/**
 * Constantes globais da empresa Detaliê Móveis Sob Medida.
 * Centralizadas para reutilização em componentes, SEO e schema JSON-LD.
 */

export const COMPANY = {
  name: 'Detaliê Móveis Sob Medida',
  shortName: 'Detaliê',
  description:
    'A Detaliê móveis sob medida é uma empresa especializada em criação de projetos 3D, fabricação, montagem e instalação de ambientes personalizados deixando o seu lar ainda mais acolhedor.',
  slogan: 'Transforme seus ambientes com móveis planejados de alto padrão – encontre a perfeição em cada detalhe.',
  foundedYear: 2020,
  priceRange: '$$$',
} as const;

export const CONTACT = {
  phone: '(47) 99218-4100',
  phoneRaw: '+5547992184100',
  phoneTel: 'tel:+5547992184100',
  whatsappUrl: 'https://wa.me/5547992184100',
  whatsappMessage: (context?: string) => {
    const base = 'Olá! Gostaria de um orçamento';
    const msg = context ? `${base} para ${context}.` : `${base} grátis.`;
    return `https://wa.me/5547992184100?text=${encodeURIComponent(msg)}`;
  },
  email: 'contato@detaliemoveissobmedida.com.br',
} as const;

export const ADDRESS = {
  street: 'Rua Onório Bortolato, 2517',
  neighborhood: 'Gravatá',
  city: 'Navegantes',
  state: 'SC',
  stateFullName: 'Santa Catarina',
  zip: '88373-180',
  country: 'BR',
  full: 'Rua Onório Bortolato, 2517 – Navegantes – SC',
  googleMapsUrl:
    'https://www.google.com/maps/place/R.+On%C3%B3rio+Bortolato,+2517+-+Gravat%C3%A1,+Navegantes+-+SC,+88373-180',
  coordinates: {
    latitude: -26.8500872,
    longitude: -48.6604983,
  },
} as const;

export const SOCIAL = {
  instagram: 'https://www.instagram.com/detalie.moveissobmedida/',
  facebook: 'https://www.facebook.com/detaliemoveissobmedida',
  whatsapp: 'https://wa.me/5547992184100',
} as const;

export const SITE = {
  url: 'https://detaliemoveissobmedida.com.br',
  ogImage: '/images/logo.png',
  locale: 'pt_BR',
  lang: 'pt-BR',
} as const;

export const NAV_LINKS = [
  { label: 'Início', href: '/' },
  { label: 'Quem Somos', href: '/quem-somos' },
  { label: 'Produtos e Serviços', href: '/produtos-e-servicos' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contato', href: '/contato' },
] as const;

export const LEGAL_LINKS = [
  { label: 'Termos de Uso', href: '/termos-de-uso' },
  { label: 'Política de Privacidade', href: '/politica-de-privacidade' },
  { label: 'Trabalhe Conosco', href: '/trabalhe-conosco' },
] as const;

export const CATEGORIES = [
  { name: 'Cozinha Planejada', slug: 'cozinha-sob-medida', img: 'cozinha.jpg' },
  { name: 'Painéis Ripados', slug: 'paineis-ripados', img: 'painel-ripado.webp' },
  { name: 'Dormitórios', slug: 'dormitorio', img: 'dormitorio.jpg' },
  { name: 'Espaço Gourmet', slug: 'espaco-gourmet', img: 'espaco-gourmet.jpg' },
  { name: 'Banheiro', slug: 'banheiro', img: 'banheiro.jpg' },
  { name: 'Lavanderia', slug: 'lavanderia', img: 'lavanderia.jpg' },
  { name: 'Closet Planejado', slug: 'closets', img: 'closet.jpg' },
  { name: 'Home Office', slug: 'home-office', img: 'home-office.jpg' },
  { name: 'Corporativo', slug: 'corporativo', img: 'corporativo.jpg' },
  { name: 'Ambientes Personalizados', slug: 'ambientes-personalizados', img: 'ambientes-personalizados.jpg' },
  { name: 'Cabeceira de Cama', slug: 'cabeceira-de-cama', img: 'cabeceira-cama.jpg' },
  { name: 'Painel de TV Sob Medida', slug: 'painel-de-tv', img: 'painel-tv.jpg' },
] as const;
