# Artelva Construtora — domínio próprio

Site estático para o **GitHub Pages**, com arquivos prontos para publicação. Não exige instalação, build de aplicação ou servidor próprio.

Endereço: **https://artelvaconstrutora.com.br/**
Repositório: **https://github.com/labuxa/artelva** — branch **main**.

## Como aplicar esta atualização

Este ZIP de atualização contém somente os 14 arquivos que mudam para o domínio próprio. Ele deve ser aplicado ao repositório existente; os demais arquivos já publicados continuam necessários.

1. Em **Settings → Pages → Custom domain**, informe `artelvaconstrutora.com.br` e clique em **Save**, antes de apontar o DNS.
2. Extraia o ZIP de atualização.
3. No repositório, use **Code → Add file → Upload files** e envie os arquivos e a pasta `servicos` extraídos, mantendo a estrutura de pastas. Não envie o ZIP nem a pasta externa que o contém.
4. Confirme o commit na branch **main** e aguarde a publicação em **Actions**.
5. No Registro.br, abra o domínio → **Configurar endereçamento** → **Modo avançado**. Se houver uma transição, aguarde a liberação informada pelo painel.
6. Crie os registros abaixo. Para o domínio principal, deixe o campo de nome vazio no Registro.br; o sufixo do domínio é preenchido pelo painel.

| Tipo | Nome | Destino |
| --- | --- | --- |
| A | vazio | 185.199.108.153 |
| A | vazio | 185.199.109.153 |
| A | vazio | 185.199.110.153 |
| A | vazio | 185.199.111.153 |
| CNAME | www | labuxa.github.io |

Confira os registros existentes antes de salvar: os registros A/AAAA do domínio principal e o CNAME de www precisam ser compatíveis com o GitHub Pages. Preserve registros de e-mail, verificações TXT e outras configurações sem relação com o site. Não use o recurso de redirecionamento de endereço nem troque os servidores DNS para os IPs acima.

7. Após a validação do DNS no GitHub, habilite **Enforce HTTPS** quando disponível. A propagação do DNS e a liberação do HTTPS podem levar até 24 horas.
8. Abra o endereço HTTPS, teste a página inicial, os serviços e o WhatsApp. Depois atualize o endereço do site no Perfil da Empresa, Instagram e eventual anúncio para `https://artelvaconstrutora.com.br/`.

O workflow existente `.github/workflows/static.yml`, os arquivos `styles.css` e `script.js` e a pasta `assets` são preservados. Em publicação por GitHub Actions, a associação do domínio é feita nas configurações do Pages; adicionar apenas um arquivo CNAME não substitui essa configuração.

Referências oficiais:
- https://docs.github.com/pt/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- https://registro.br/tecnologia/caracteristicas-tecnicas/

## Páginas incluídas

- `index.html`: apresentação, serviços, processo, equipe, compromissos, dúvidas e contato.
- `servicos/pintura-revestimentos.html`: pintura, pisos e revestimentos.
- `servicos/eletrica-iluminacao.html`: elétrica e iluminação.
- `servicos/reforma-banheiro.html`: reformas de banheiros.
- `servicos/reforma-ambientes.html`: reformas de ambientes.
- `servicos/projetos-parceiros.html`: projetos de arquitetura e complementares por parceiros, integrados ao planejamento da execução.
- `imobiliarias.html`: manutenção e preparação de imóveis para locação, com contratação por demanda.
- `privacidade.html` e `termos.html`: funcionamento do site e dos recursos de contato.
- `404.html`: recuperação de endereços não encontrados.

Cada serviço tem conteúdo próprio e botões de WhatsApp com mensagem específica. O menu, o rodapé e os caminhos internos estão preparados para o domínio próprio, inclusive nas páginas em subpastas.

## Contatos e informações

- WhatsApp Business / Elvis: **(31) 98696-4656**.
- E-mail: **artelvaconstrutoraeng@gmail.com**.
- Instagram: **@artelvaconstrutora**.
- Região: Belo Horizonte, Betim, Contagem, Ibirité e Sarzedo. Cidades próximas sob consulta.
- Atendimento em horário comercial; visitas mediante agendamento.

A apresentação da equipe foi reescrita com foco institucional: Arthur Araújo em engenharia e gestão técnica; Elvis de Morais Rosa em coordenação operacional. Os textos valorizam a experiência informada e as responsabilidades na Artelva, sem alegar títulos, formação concluída, cargos anteriores ou experiência em reformas de alto padrão não confirmados.

Não foram publicados currículo completo, contatos pessoais de Arthur, endereço residencial, CNPJ ou número de registro profissional. Não foram inventados depoimentos, avaliações, quantidade de obras ou tempo de empresa.

## Projetos com parceiros

A Artelva continua posicionada como executora e integradora do atendimento. O desenvolvimento de projetos de arquitetura e complementares é apresentado como serviço realizado por parceiros especializados. A proposta deve definir disciplinas, entregas, valores, prazos, forma de contratação e responsabilidades por projeto e execução. Não há promessa de projeto incluído automaticamente em toda reforma.

A área “Projetos” está na página inicial, no menu, no rodapé, nas páginas de execução e em uma página própria. O formulário inclui a opção “Projeto e execução”, e as mensagens de WhatsApp dessa área identificam o interesse do visitante.

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

Se mudar contatos ou endereço de publicação, atualize também os textos e os metadados estáticos dos arquivos HTML. O domínio desta atualização foi aplicado em `config.js`, nos metadados e dados estruturados dos HTML, em `sitemap.xml` e `robots.txt`. A página `404.html` usa caminhos a partir da raiz do domínio.

## Preparação para anúncios

Os IDs de Google Tag Manager e Meta Pixel em `config.js` permanecem vazios: os dados reais das contas ainda não foram informados. O site não cria nem ativa campanhas.

Quando um ID válido for preenchido, o aviso de medição aparece. As ferramentas só carregam após o visitante aceitar. A preferência pode ser alterada no rodapé e expira em até 180 dias.

- GTM: eventos **`whatsapp_click`** e **`email_click`**, com canal, posição do contato e serviço quando aplicável. Os gatilhos e as tags devem ser configurados no próprio GTM.
- Meta Pixel: eventos **`PageView`** e **`Contact`**.
- Os eventos representam intenção de contato, sem confirmar envio da mensagem, venda ou contratação.
- Nome, localização, perfil do solicitante e descrição do formulário não entram nos eventos implementados pelo site.
- Os campos `utm_source`, `utm_medium` e `utm_campaign` acompanham a navegação entre páginas de apresentação e aparecem na mensagem de WhatsApp, visíveis para o visitante antes do envio.
- Não instale a mesma ferramenta diretamente e também pelo GTM.

## Verificação desta atualização

Conferência de URLs canônicas, dados estruturados, compartilhamento, sitemap, versão da configuração e caminhos internos contra a árvore de arquivos do repositório. As mudanças desta atualização se limitam aos endereços de publicação e às instruções de instalação. A validação do DNS, do certificado e do site público exige concluir as configurações nos painéis.
