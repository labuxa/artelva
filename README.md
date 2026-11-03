# Artelva Construtora — atualização de 3 de novembro de 2026

Site estático pronto para o GitHub Pages, sem instalação, build de aplicação ou servidor próprio.

Endereço atual: **https://labuxa.github.io/artelva/**

## Atualizar o site que já está no ar

1. Extraia este ZIP no computador. Localize a pasta que contém `index.html`, `styles.css`, `script.js`, `config.js` e `assets`.
2. Abra o repositório **https://github.com/labuxa/artelva**.
3. Na aba **Code**, escolha **Add file → Upload files**.
4. Envie o conteúdo da pasta extraída para a raiz do repositório, mantendo a pasta `assets` e suas subpastas. Envie os arquivos extraídos, e não o ZIP nem uma pasta externa envolvendo o projeto.
5. Confirme o commit na branch `main`.
6. Abra **Actions** e aguarde a publicação ficar verde.
7. Abra o site. Se ainda aparecer o visual anterior, atualize com `Ctrl + F5` ou teste em uma janela anônima.

O GitHub Pages e o workflow já estão configurados no repositório. **Não é necessário refazer a configuração de hospedagem.** O arquivo `.github/workflows/static.yml` incluído é o mesmo que já foi publicado com sucesso.

## O que mudou

- Apresentação ampliada de Arthur Araújo e Elvis de Morais Rosa, com responsabilidades e experiências relevantes para o cliente.
- Formação de Elvis em Edificações identificada como em andamento. A experiência em eletrotécnica não é apresentada como diploma ou registro profissional.
- Perfil de Arthur baseado no currículo fornecido, com link para o LinkedIn. Dados pessoais de contato e o currículo completo não foram publicados.
- E-mail comercial **artelvaconstrutoraeng@gmail.com** no contato, rodapé, política de privacidade, página 404 e metadados.
- Menu fixo durante a rolagem, indicação da seção atual e acesso direto à área de contato.
- Atalho flutuante de WhatsApp recolhido enquanto a área de contato está visível, para manter o formulário livre.
- Ajustes de leitura, espaçamento, navegação móvel e quebra de linhas dos contatos.
- Pergunta frequente sobre atendimento a imobiliárias e imóveis para locação.
- Caminhos da página 404 ajustados para o projeto `/artelva/`, inclusive quando o endereço não encontrado tiver subpastas.

Mantidos nesta versão:

- Abertura com os serviços explícitos e contato direto pelo WhatsApp.
- Atendimento em Belo Horizonte, Betim, Contagem, Ibirité e Sarzedo; cidades próximas sob consulta.
- Informação clara de que a Artelva atende também pequenos serviços, sem anunciar um valor mínimo.
- Destaque para pintura e revestimentos, elétrica e iluminação, reforma de banheiros e de ambientes.
- Proposta por escrito, alinhamento de prazos, acompanhamento técnico e comunicação durante o serviço.
- Instagram **@artelvaconstrutora** no rodapé.
- Textos de apoio e campos maiores para facilitar a leitura.
- Formulário como alternativa ao contato direto; os serviços escolhidos na página já ficam selecionados nele.
- Metadados de compartilhamento, endereço canônico e sitemap com a URL real do site.

## Diferenciais e operação

Os diferenciais anunciados devem integrar a rotina dos primeiros atendimentos:

1. **Proposta por escrito:** registrar os serviços, os itens incluídos e as condições de contratação.
2. **Prazos alinhados:** combinar a previsão de execução e comunicar ajustes necessários.
3. **Acompanhamento técnico:** manter a participação de Arthur de acordo com o serviço contratado.
4. **Comunicação:** Elvis centraliza o atendimento e informa o andamento e as decisões necessárias.

Não foram adicionados prazos fixos, promessas de ausência de imprevistos, compra de materiais incluída em todos os serviços, limpeza final incluída em todos os contratos ou garantias comerciais específicas. Esses pontos dependem do escopo de cada proposta.

## WhatsApp e formulário

Número comercial: **(31) 98696-4656**.

O formulário monta uma mensagem e abre o WhatsApp. O interessado precisa confirmar o envio da mensagem para que Elvis a receba. O site não possui banco de dados próprio de pedidos.

## Onde editar

- `index.html`: textos, serviços, cidade/região, apresentação, links e metadados estáticos.
- `config.js`: WhatsApp, e-mail comercial, Instagram, LinkedIn de Arthur, região exibida, URL do site e IDs de medição.
- `styles.css`: cores, fontes, medidas e aparência em cada tamanho de tela.
- `script.js`: menu, seleção de serviços, mensagem de WhatsApp, medição e preferência do visitante.
- `privacidade.html`: informações sobre os dados e recursos do site.
- `sitemap.xml` e `robots.txt`: referências de indexação.

Se trocar o endereço do site, atualize também os metadados estáticos em `index.html`, a página de privacidade, `sitemap.xml` e `robots.txt`, além de `config.js`. Se mudar o nome do repositório ou passar para domínio próprio, atualize os caminhos `/artelva/` na página `404.html`. A imagem de compartilhamento é um arquivo local da identidade da Artelva.

## Medição dos anúncios

Os campos `tracking.googleTagManagerId` e `tracking.metaPixelId` continuam vazios, pois os IDs reais das contas não foram informados. Nenhuma campanha é criada pelo site.

- Ao preencher um ID válido, o aviso de medição passa a ser exibido.
- As ferramentas são carregadas apenas depois que o visitante aceita a medição.
- O Google Tag Manager recebe o evento personalizado **`whatsapp_click`**, com `contact_placement` e `service`. Configure os gatilhos e as tags da campanha no próprio GTM.
- Links de e-mail usam o evento **`email_click`**. Ambos os tipos incluem `contact_channel` para distinguir o canal.
- O Meta Pixel usa os eventos **`PageView`** e **`Contact`**.
- Nome, bairro e descrição do formulário não são incluídos nos eventos implementados pelo site.
- Os eventos indicam intenção de contato, não confirmação de mensagem enviada ou contratação.
- Evite instalar a mesma ferramenta duas vezes, diretamente e também pelo GTM.

Parâmetros `utm_source`, `utm_medium` e `utm_campaign` presentes no link de entrada são acrescentados à mensagem de WhatsApp, visíveis antes do envio.

## Fotos e identidade

As imagens de sala e banheiro permanecem identificadas como **ilustrativas**. Ainda não foram recebidas fotos reais da equipe ou de serviços anteriores. Quando forem usadas, identifique corretamente a origem dos trabalhos e use apenas registros autorizados.

Não há depoimentos, quantidade de obras, tempo de empresa ou avaliações inventados. O site apresenta execução e acompanhamento de serviços, sem anunciar um escritório de arquitetura.

Fontes locais Manrope e Newsreader, acompanhadas das licenças SIL Open Font License, em `assets/fonts`.

## E-mail nos outros canais

Este pacote atualiza somente o site. Use o mesmo e-mail comercial nos dados de contato do Instagram, WhatsApp Business, Perfil da Empresa no Google e na futura versão final da apresentação em PDF. O site não altera esses serviços externos.
