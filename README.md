# Primapox — proposta inspirada na Olgacolor

Proposta de layout do site da **Primapox Pinturas Industriais** (pintura eletrostática a pó, Rio de Janeiro), inspirada em [olgacolor.com.br](https://olgacolor.com.br/): apresentação institucional completa e corporativa. A referência orienta estrutura e ritmo; nenhum conteúdo ou elemento visual dela foi copiado.

## Direção visual

Barra utilitária com contatos, abertura com vídeo e acessos rápidos, números animados, serviços, linha do tempo do processo, material, tipos de tinta, galeria e contato; Red Hat Display + Red Hat Text.

Comum às quatro propostas:

- Logo oficial em destaque no cabeçalho (reprodução fiel; só a margem transparente do arquivo foi recortada).
- Paleta disciplinada: superfícies claras e marinho profundo, azul `#002398` da logo em detalhes e vermelho apenas nas ações.
- Fontes um pouco maiores (base de 17 px).
- Vídeo de abertura gerado com HyperFrames a partir das fotos reais do acervo (`public/media/hero-olgacolor.webm`); o projeto editável está em `hero-video/`.
- Cards e seções surgem ao rolar, fotos com leve ajuste de escala e barra de progresso; tudo respeita "reduzir movimento".
- Todo o texto visível é cópia literal das abas do site `primapox.com` (Home, A Primapox, Serviços, Manutenção, Galeria de Fotos e Fale Conosco), centralizado em `data/primapox.ts`; o menu segue as mesmas abas.
- Contato por e-mail (`primapox@primapox.com`) e WhatsApp (21) 97013-0465; o formulário (campos do Fale Conosco original) prepara o e-mail no aplicativo do visitante.
- Perfis de redes sociais previstos em `data/site.ts` (`socialProfiles`): só aparecem quando forem preenchidos.
- SEO: metadados por página, dados estruturados LocalBusiness/Service, sitemap, robots e `llms.txt`.

## Rodar localmente

```bash
npm ci
npm run dev
```

O servidor abre em http://localhost:3005 e fica acessível na rede local (`-H 0.0.0.0`).

## Verificar e publicar

```bash
npm run check
```

Defina `NEXT_PUBLIC_SITE_URL` com o domínio final antes do deploy (veja `.env.example`).

## Regenerar o vídeo de abertura

```bash
cd hero-video
npx hyperframes render --format webm --crf 34 -o ../public/media/hero-olgacolor.webm
```
