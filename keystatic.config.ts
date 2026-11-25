import { config, collection, fields } from '@keystatic/core';

const isProd = process.env.NODE_ENV === 'production';

export default config({
  storage: isProd
    ? {
        kind: 'github',
        repo: {
          owner: 'zuniojr',
          name: 'detalie',
        },
      }
    : {
        kind: 'local',
      },

  ui: {
    brand: {
      name: 'Detaliê Admin',
    },
    navigation: {
      'Blog': ['posts'],
      'Conteúdo': ['servicos'],
    },
  },

  collections: {
    // ─── Artigos do Blog ───────────────────────────────────────────────────────
    posts: collection({
      label: 'Artigos do Blog',
      slugField: 'title',
      path: 'src/content/posts/*/index',
      format: { contentField: 'content' },
      entryLayout: 'content',
      schema: {
        title: fields.slug({
          name: {
            label: 'Título do Artigo',
            description: 'Título que aparece no blog e nas buscas.',
          },
        }),
        description: fields.text({
          label: 'Descrição / Resumo',
          description: 'Texto curto exibido nos cards do blog e compartilhamentos (160 caracteres recomendado).',
          multiline: true,
        }),
        pubDate: fields.date({
          label: 'Data de Publicação',
          defaultValue: { kind: 'today' },
        }),
        author: fields.text({
          label: 'Autor',
          defaultValue: 'Levi Junior',
        }),
        coverImage: fields.image({
          label: 'Imagem de Capa',
          description: 'Imagem principal do artigo (formato 16:9 recomendado).',
          directory: 'src/content/posts',
          publicPath: '../../content/posts',
        }),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          {
            label: 'Tags / Categorias',
            description: 'Palavras-chave relacionadas ao artigo.',
            itemLabel: (props) => props.value || 'Tag',
          }
        ),
        content: fields.mdx({
          label: 'Conteúdo do Artigo',
          description: 'Corpo do artigo com formatação rica (títulos, listas, imagens e negrito).',
        }),
      },
    }),

    // ─── Páginas de Serviço ────────────────────────────────────────────────────
    servicos: collection({
      label: 'Páginas de Serviços',
      slugField: 'title',
      path: 'src/content/servicos/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      schema: {
        title: fields.slug({
          name: {
            label: 'Nome do Serviço',
          },
        }),
        description: fields.text({
          label: 'Descrição SEO',
          multiline: true,
        }),
        heroImage: fields.text({
          label: 'Imagem Hero (nome do arquivo)',
          description: 'Ex: dormitorio.webp — deve estar em /src/assets/images/',
        }),
        category: fields.text({
          label: 'Categoria',
        }),
        features: fields.array(
          fields.text({ label: 'Vantagem / Característica' }),
          {
            label: 'Vantagens do Serviço',
            itemLabel: (props) => props.value || 'Item',
          }
        ),
        content: fields.mdx({
          label: 'Conteúdo da Página',
        }),
      },
    }),
  },
});
