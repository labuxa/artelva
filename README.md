# Artelva Construtora — site final

Site estático para o **GitHub Pages**, com arquivos prontos para publicação. Não exige instalação, build de aplicação ou servidor próprio.

Endereço: **https://labuxa.github.io/artelva/**
Repositório: **https://github.com/labuxa/artelva** — branch **main**.

## Como atualizar o site

1. Extraia o ZIP. Na pasta extraída você encontrará `index.html`, `styles.css`, `script.js`, `config.js`, a pasta `assets` e a pasta `servicos`.
2. No repositório, abra **Code → Add file → Upload files**.
3. Envie **o conteúdo extraído para a raiz do repositório**, mantendo as pastas `assets` e `servicos` com suas subpastas. Não envie o ZIP nem uma pasta externa envolvendo o projeto.
4. Confirme o commit na branch **main**.
5. Abra **Actions** e espere a publicação ficar verde.
6. Abra o endereço do site. Se necessário, use `Ctrl + F5` ou uma janela anônima.

O GitHub Pages já está configurado. O workflow `.github/workflows/static.yml` incluído é o mesmo que já funciona no repositório; preserve-o. A pasta oculta `.github` e o arquivo `.nojekyll` fazem parte do pacote.

## Páginas incluídas

- `index.html`: apresentação, serviços, processo, equipe, compromissos, dúvidas e contato.
- `servicos/pintura-revestimentos.html`: pintura, pisos e revestimentos.
- `servicos/eletrica-iluminacao.html`: elétrica e iluminação.
- `servicos/reforma-banheiro.html`: reformas de banheiros.
- `servicos/reforma-ambientes.html`: reformas de ambientes.
- `imobiliarias.html`: manutenção e preparação de imóveis para locação, com contratação por demanda.
- `privacidade.html` e `termos.html`: funcionamento do site e dos recursos de contato.
- `404.html`: recuperação de endereços não encontrados.

Cada serviço tem conteúdo próprio e botões de WhatsApp com mensagem específica. O menu, o rodapé e os caminhos internos funcionam dentro do projeto `/artelva/`, inclusive nas páginas em subpastas.

## Contatos e informações

- WhatsApp Business / Elvis: **(31) 98696-4656**.
- E-mail: **artelvaconstrutoraeng@gmail.com**.
- Instagram: **@artelvaconstrutora**.
- Região: Belo Horizonte, Betim, Contagem, Ibirité e Sarzedo. Cidades próximas sob consulta.
- Atendimento em horário comercial; visitas mediante agendamento.

A apresentação da equipe foi mantida com as informações fornecidas. Arthur é apresentado como engenheiro civil, com experiência em planejamento, coordenação de obras e manutenção. Elvis é apresentado com experiência em obras, elétrica e liderança; Técnico em Edificações em andamento.

Não foram publicados currículo completo, contatos pessoais de Arthur, endereço residencial, CNPJ ou número de registro profissional. Não foram inventados depoimentos, avaliações, quantidade de obras ou tempo de empresa.

## WhatsApp e formulário

O formulário valida os campos e **abre uma mensagem no WhatsApp**. O visitante precisa revisar e confirmar o envio no próprio WhatsApp para que Elvis a receba. Não existe banco de dados de pedidos ou envio automático de e-mail neste site.

O campo opcional “Você solicita como?” ajuda a distinguir moradores/proprietários de imobiliárias/administradores. O site não pede documentos, pagamento ou upload de arquivos.

A navegação do menu chega ao conteúdo das seções com espaço abaixo do cabeçalho. Links diretos, histórico do navegador e a preferência por movimento reduzido são respeitados. O atalho flutuante de WhatsApp fica recolhido enquanto a área de contato está visível.

## Fotos e identidade

As imagens são **ilustrativas** e não representam obras ou equipe da Artelva. Os avisos estão próximos às imagens e no rodapé. Fotos reais autorizadas podem substituir essas referências no futuro.

A identidade em grafite, dourado e tons claros foi preservada. Fontes Manrope e Newsreader são servidas localmente e têm suas licenças em `assets/fonts`.

## Onde editar

- `config.js`: número, e-mail comercial, Instagram, LinkedIn de Arthur, área atendida, URL principal e IDs de medição.
- Arquivos `.html`: textos, imagens, links e metadados estáticos de cada página.
- `styles.css`: cores, tipografia, espaçamentos e tamanhos de tela.
- `script.js`: menu, rolagem, mensagens, formulário e medição com consentimento.
- `sitemap.xml` e `robots.txt`: endereço e páginas para indexação.

Se mudar contatos ou endereço de publicação, atualize também os textos e os metadados estáticos dos arquivos HTML. Se mudar o nome do repositório ou usar domínio próprio, ajuste os caminhos `/artelva/` em `404.html`, além de `config.js`, `sitemap.xml`, `robots.txt` e das URLs canônicas.

## Preparação para anúncios

Os IDs de Google Tag Manager e Meta Pixel em `config.js` permanecem vazios: os dados reais das contas ainda não foram informados. O site não cria nem ativa campanhas.

Quando um ID válido for preenchido, o aviso de medição aparece. As ferramentas só carregam após o visitante aceitar. A preferência pode ser alterada no rodapé e expira em até 180 dias.

- GTM: eventos **`whatsapp_click`** e **`email_click`**, com canal, posição do contato e serviço quando aplicável. Os gatilhos e as tags devem ser configurados no próprio GTM.
- Meta Pixel: eventos **`PageView`** e **`Contact`**.
- Os eventos representam intenção de contato, sem confirmar envio da mensagem, venda ou contratação.
- Nome, localização, perfil do solicitante e descrição do formulário não entram nos eventos implementados pelo site.
- Os campos `utm_source`, `utm_medium` e `utm_campaign` acompanham a navegação entre páginas de apresentação e aparecem na mensagem de WhatsApp, visíveis para o visitante antes do envio.
- Não instale a mesma ferramenta diretamente e também pelo GTM.

## Verificação da entrega

Foram verificados os arquivos e caminhos internos, metadados de cada página, conteúdo do sitemap, contatos, formulário, mensagens por serviço e consentimento de medição. A navegação e os layouts foram revisados no navegador em computador e em larguras de 320, 390 e 768 pixels.

Esta entrega contém o pacote para atualizar o repositório. A publicação no endereço público acontece depois do envio dos arquivos e da conclusão do workflow do GitHub Pages.
