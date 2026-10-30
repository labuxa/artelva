/* Edite os dados públicos do site aqui. Não coloque senhas ou chaves privadas. */
window.ARTELVA_CONFIG = Object.freeze({
  whatsappNumber: "5531986964656",
  whatsappDisplay: "(31) 98696-4656",
  whatsappContactName: "Elvis",
  defaultMessage: "Olá! Vim pelo site da Artelva e gostaria de solicitar um orçamento para um serviço.",

  // Endereço completo do Instagram. Vazio = link oculto, sem endereço inventado.
  instagramUrl: "https://www.instagram.com/artelvaconstrutora/",

  // Preencha apenas quando a região de atendimento estiver definida.
  serviceAreaText: "Atendimento em Belo Horizonte, Betim, Contagem, Ibirité e Sarzedo. Cidades próximas sob consulta.",

  // URL pública definitiva, incluindo o subdiretório se houver. Ex.: https://seu-dominio.com.br/
  siteUrl: "https://labuxa.github.io/artelva/",

  // Opcionais. Sem IDs, nenhum script de medição é carregado.
  // Com IDs válidos, só são carregados após o visitante aceitar a medição.
  // Nunca adicione as mesmas tags também no HTML, pois isso duplica eventos.
  tracking: Object.freeze({
    googleTagManagerId: "",
    metaPixelId: ""
  })
});

