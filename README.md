# Artelva Construtora — site completo

Landing page estática em português, com a identidade grafite, champagne e marfim da Artelva. O site não precisa de instalação, build, banco de dados, assinatura de plataforma ou servidor de aplicação.

## 1. O que já está pronto

- Layout adaptado a celular, tablet e computador.
- Serviços, etapas da contratação, apresentação de Arthur e Elvis e dúvidas frequentes.
- WhatsApp correto: **(31) 98696-4656**.
- Formulário que monta a mensagem e abre o WhatsApp para o visitante confirmar o envio.
- Botões de contato, navegação móvel e perguntas expansíveis.
- Fontes e imagens locais, sem depender de carregamento de fontes externas.
- Imagens responsivas em WebP e carregamento adiado da imagem abaixo da primeira tela.
- Página de privacidade, favicon e página 404.
- Integração opcional de Google Tag Manager e Meta Pixel, condicionada à escolha do visitante.

O site não recebe nem guarda pedidos em uma base própria. O interessado precisa enviar a mensagem no WhatsApp para que Elvis a receba. Um clique no botão não comprova que a mensagem foi enviada.

## 2. Publicação: GitHub + Cloudflare Pages

O **GitHub guarda o código** e o **Cloudflare Pages publica o site**, com atualizações a partir do repositório. Esse é o caminho recomendado neste pacote para a landing page comercial.

### Primeiro, enviar o código ao GitHub

1. Extraia o ZIP no computador.
2. Entre na pasta `artelva-site` extraída.
3. No GitHub, crie um repositório para o site. Um nome possível é `artelva-site`.
4. Use **Add file → Upload files**.
5. Envie os arquivos e a pasta `assets` **para a raiz do repositório**. O arquivo `index.html` precisa aparecer ao abrir o repositório, junto de `styles.css`, `script.js` e `config.js`.
6. Conclua o commit. Não envie apenas o arquivo ZIP, nem uma pasta externa envolvendo todo o projeto.

### Depois, publicar pelo Cloudflare Pages

1. Acesse o painel da Cloudflare e abra **Workers & Pages**.
2. Crie um projeto **Pages** conectado ao GitHub e selecione o repositório do site. Os nomes exatos dos botões podem variar no painel.
3. Autorize somente o acesso ao repositório desejado, quando essa opção estiver disponível.
4. Configure o projeto:

| Campo | Valor |
| --- | --- |
| Branch de produção | A branch com os arquivos, normalmente `main` |
| Framework preset | `None` / nenhum |
| Build command | `exit 0` |
| Build output directory | `.` |
| Root directory | Raiz do repositório; deixe o padrão |

5. Salve e aguarde a publicação. O painel fornecerá o endereço real do projeto; nenhum endereço de produção foi inventado neste pacote.
6. Abra esse endereço no celular, teste os botões e faça um envio de teste pelo WhatsApp.
7. Se tiver domínio próprio, associe-o na opção **Custom domains** do projeto e siga os registros DNS apresentados pela Cloudflare.

**Por que não usar GitHub Pages como hospedagem principal?** A documentação do GitHub Pages restringe seu uso para operar negócios e sites voltados principalmente a facilitar transações comerciais. Para esta página de captação comercial, o GitHub pode continuar sendo o repositório, com a hospedagem no Cloudflare Pages.

Documentação oficial:

- https://developers.cloudflare.com/pages/get-started/git-integration/
- https://developers.cloudflare.com/pages/framework-guides/deploy-anything/
- https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits

## 3. Onde editar os dados

Abra **`config.js`**. Os campos públicos ficam reunidos nesse arquivo:

| Campo | Uso |
| --- | --- |
| `whatsappNumber` | Número com país e DDD, só dígitos. Já está correto. |
| `whatsappDisplay` | Telefone visível no site. |
| `whatsappContactName` | Nome usado na mensagem montada. Já está como Elvis. |
| `defaultMessage` | Mensagem dos botões diretos de WhatsApp. |
| `instagramUrl` | Cole o endereço completo do Instagram. Enquanto vazio, o link fica oculto. |
| `serviceAreaText` | Texto da região atendida, depois de definido. Enquanto vazio, o site orienta o visitante a consultar pelo WhatsApp. |
| `siteUrl` | URL pública definitiva, incluindo eventual subpasta. |
| `tracking.googleTagManagerId` | ID do contêiner GTM, se for usar. |
| `tracking.metaPixelId` | ID numérico do Meta Pixel, se for usar. |

O telefone do HTML também é o correto, para que os links diretos funcionem mesmo sem JavaScript. Se trocar o número futuramente, substitua também suas ocorrências em `index.html`, `privacidade.html` e `404.html`.

Para editar textos, abra `index.html`. Para cores, medidas e fontes, abra `styles.css`. Ao atualizar arquivos no GitHub, a integração do Cloudflare Pages fará uma nova publicação.

## 4. Anúncios e medição

O site funciona sem tags de publicidade. Os IDs vêm vazios porque as contas e campanhas ainda não foram informadas.

### Google Tag Manager

1. Crie ou use o contêiner da Artelva.
2. Cole o ID real `GTM-...` em `config.js`.
3. Configure no GTM o evento personalizado **`whatsapp_click`** e as tags necessárias à campanha.
4. Os parâmetros enviados pelo site são `contact_placement` e `service`. O site não inclui nome, bairro ou descrição do formulário nos eventos.
5. Teste a tag depois de aceitar a medição no aviso do site. Não adicione uma segunda instalação da mesma tag no HTML.

### Meta Pixel

1. Cole o ID real do pixel em `config.js`.
2. Após o aceite da medição, o site envia `PageView` e usa o evento **`Contact`** nos cliques de contato.
3. Confira o funcionamento nas ferramentas de teste da conta de anúncios.

Esses eventos medem a intenção de contato. Eles **não confirmam envio de mensagem, orçamento ou contratação**. A configuração de conversões na plataforma e o acompanhamento dos contatos precisam ser concluídos na conta de anúncios.

Se a mesma plataforma for instalada pelo GTM e diretamente pelo campo `metaPixelId`, evite instalar o mesmo pixel duas vezes.

### Identificar campanhas no WhatsApp

Links de anúncio podem usar parâmetros como:

```text
https://SEU-ENDERECO/?utm_source=google&utm_medium=cpc&utm_campaign=reformas
```

Substitua `SEU-ENDERECO` pelo endereço publicado. O site acrescenta origem, mídia e campanha à mensagem de WhatsApp, visíveis antes do envio. Nenhuma campanha ou anúncio é criado automaticamente.

## 5. Imagens e informações da empresa

- As imagens de sala e banheiro foram geradas como **referências ilustrativas**. Estão identificadas no site e não são apresentadas como obras executadas.
- A apresentação da equipe usa as funções já definidas para Arthur e Elvis. Não há depoimentos, avaliações, clientes ou obras inventados.
- O site não anuncia escritório de arquitetura, elaboração de projetos ou abrangência geográfica que ainda não foi confirmada.
- O monograma usado na interface é uma versão vetorial do A arquitetônico da identidade. O nome ARTELVA aparece sem acento.
- Quando houver fotos reais, substitua as referências pelos arquivos autorizados e ajuste as legendas de acordo com a origem de cada imagem.

## 6. Estrutura do pacote

```text
artelva-site/
  index.html
  privacidade.html
  404.html
  styles.css
  script.js
  config.js
  robots.txt
  _headers
  .nojekyll
  README.md
  assets/
    favicon.svg
    fonts/
      manrope.woff2
      newsreader.woff2
      newsreader-italic.woff2
      manrope-OFL.txt
      newsreader-OFL.txt
    images/
      sala-800.webp
      sala-1600.webp
      banheiro-600.webp
      banheiro-1000.webp
```

## 7. Conferência antes de anunciar

Abra a URL final no celular, teste os links e confirme que o formulário monta os dados corretamente. Faça um envio de teste para o número da Artelva. Se usar medição, preencha os IDs reais e valide os eventos na plataforma correspondente. Edite o Instagram e a região quando estiverem definidos.

As fontes Manrope e Newsreader são distribuídas com suas licenças SIL Open Font License, incluídas na pasta de fontes.
