# Portfólio — elibertosc

Arquivos principais:
- `index.html`
- `style.css`
- `script.js`
- `assets/images/` (coloque imagens e sua foto aqui)

Onde colocar sua foto:
- Substitua `assets/images/dev-photo.svg` pela sua foto.
- Recomendo manter o mesmo nome (`dev-photo.svg` ou `dev-photo.png`) e ajustar `index.html` se preferir outro nome.
- Se a foto tiver fundo, remova o fundo (PNG com transparência) ou use uma máscara/recorte.

Alterar links e contatos:
- Abra `script.js` e atualize o objeto `config.social` com seus links do GitHub, Instagram, LinkedIn e WhatsApp.
- Também pode alterar os links direto em `index.html` nos elementos de `socials`.

Editar textos e projetos:
- Os textos (Sobre, Projetos, Serviços, Experiência) estão em `index.html` e são facilmente substituíveis.
- As imagens de projetos ficam em `assets/images/` (project-1.svg ... project-6.svg)

Formulário de contato:
- O formulário em `index.html` por enquanto apenas previne o envio e mostra um alert (simulação).
- Para integrar com um backend, modifique o listener de submit em `script.js` e faça um `fetch()` para sua API.

Observações de design:
- Paleta principal: fundo escuro, texto claro e destaque coral/vermelho (`--accent`).
- Há classes utilitárias e animações básicas já implementadas.

Deseja que eu:
- Substitua o placeholder pela sua foto (faça upload aqui)?
- Gerar imagens de projetos de exemplo (SVG) com estilo coerente?
- Implementar envio real do formulário (ex.: usando Formspree ou API própria)?
