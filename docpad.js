module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Dia do Código - Teresina",
      description: "Encontro de programadores e desenvolvedores Web em Teresina",
      date: "15 de Agosto",
      // If your event is free, just comment this line
      venue: "Teresina Hacker Clube",
      address: "Teresina Hacker Clube 268 R. Arlíndo Nogueira, 140 - Vila Operária PI",
      city: "Teresina",
      state: "Piauí"
    },


    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://diadocodigo.org",
      googleanalytics: "UA-33656081-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      'schedule',
      'sponsors',
      'partners'
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Sobre",
      location: "Local",
      speakers: "Apresentadores",
      schedule: "Agenda",
      sponsors: "Patriocinadores",
      partners: "Parceiros",
      contact: "Contato"
    },

    // The entire schedule
    schedule: [
      {
        name: "Renato Filho",
        photo: "http://www.gravatar.com/avatar/de675dd4578db7cb6e9c4d2e2dcd9966?s=160",
        bio: "Programador Web, Nerd e Headbanger",
        company: "Meio Norte",
        link: {
          href: "http://renatofilho.me",
          text: "@renatosousafh"
        },
        presentation: {
          title: "Deploy de Aplicações com Capistrano.",
          description: "Desenvolver uma aplicação é um processo árduo, mas garantir que sua aplicação vai subir para um ambiente de produção pode se tornar um pesadelo maior ainda. Nesta apresentação descreverei um pouco a respeito do Capistrano, uma biblioteca Ruby que facilita o processo de Deploy de Apps Web, não só feitas com Ruby on Rails mas com outros frameworks",
          time: "15h00"
        }
      }
     
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "128 bits",
        logo: "themes/yellow-swan/img/128bits.jpg",
        url: "http://128bits.cc"
      },
      {
        name: "Casa do Código",
        logo: "themes/yellow-swan/img/casadocodigo.png",
        url: "http://www.casadocodigo.com.br/"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "GuruPI",
        logo: "https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-9/429284_398725623531874_884155275_n.jpg?oh=4ab92d0df6bf1e1fe4242ba34cbfb5dc&oe=56141702&__gda__=1444507408_5bc4d3e9d945ffb1b516baa105ad85e3",
        url: "http://gurupi.org"
      },
      {
        name: "PUG-PI",
        logo: "https://scontent-mia1-1.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/10348629_1429359553995886_1713498001781288649_n.jpg?oh=76903ce1186ae437f17daa3a47c319c9&oe=5658F3A4",
        url: "http://pug.com"
      }, 
      {
        name: "Teresina Hacker Club",
        logo: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/c0.4.200.200/p200x200/10417657_626107147467619_2464778407653573618_n.png?oh=585ee19eceba98738c8366ae51bc39d7&oe=564A35E0&__gda__=1444417586_8f25b194f89ca8f9bb195c3d2fcdf825",
        url: "http://teresinahc.org"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};