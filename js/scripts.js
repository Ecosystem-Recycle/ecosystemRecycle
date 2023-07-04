//Criano váriavel em JS
let menu = document.getElementById("menu_links")
let menu_barras = document.getElementById("menu_barras")
let menu1 = document.getElementById("menu_login")
let menu2 = document.getElementById("menu_login2")
let menuNot1 = document.getElementById("menu_notifique1")
let menuNot2 = document.getElementById("menu_notifique2")

//Função para mostrar/esconder menu hamburguer
function mostrarMenu(){
    if (window.getComputedStyle(menu).display == 'none'){
        //Mostre o menu
        menu.style.display = "flex";
        menu_barras.setAttribute("aria-expanded", "true");
        menu_barras.setAttribute("aria-label", "Fechar o Menu");

    }else{
        //Esconde o menu
        menu.style.display = "none";

        menu_barras.setAttribute("aria-expanded", "false");
        menu_barras.setAttribute("aria-label", "Abrir o Menu");
        
    }
};

//Função para mostrar/esconder de login/Usuário[TELA PEQUENA]
function abrirFechar(){
  if (window.getComputedStyle(menu1).display == 'none'){
      //Mostre o menu
      menu1.style.display = "flex";
  }else{
      //Esconde o menu
      menu1.style.display = "none";  
  }
};

//Função para mostrar/esconder menu de login/Usuário[TELA GRANDE]
function abrirFechar2(){
  if (window.getComputedStyle(menu2).display == 'none'){
      //Mostre o menu
      menu2.style.display = "flex";
  }else{
      //Esconde o menu
      menu2.style.display = "none";    
  }
};

//Função para mostrar/esconder menu de notificação[TELA GRANDE]
function abrirFecharNote2(){
  if (window.getComputedStyle(menuNot2).display == 'none'){
      //Mostre o menu
      menuNot2.style.display = "flex";
  }else{
      //Esconde o menu
      menuNot2.style.display = "none";
  }
};

//Função para mostrar/esconder menu de notificação[TELA PEQUENA]
function abrirFecharNote1(){
  if (window.getComputedStyle(menuNot1).display == 'none'){
      //Mostre o menu
      menuNot1.style.display = "flex";
  }else{
      //Esconde o menu
      menuNot1.style.display = "none";      
  }
};

//Função para mostrar/esconder menu hamburguer quando redimensionar a tela
addEventListener("resize", () => {
    if (window.innerWidth > 1073){
        menu.style.display = "flex";
    } else{
        menu.style.display = "none";
    }
});

//Função para realizar o Login do Usuário
function logar(){
    var login = document.getElementById("login_email").value;
    var senha = document.getElementById("login_senha").value;

    if(login == 'luis@ecosystem.com' && senha == '1234'){
      location.href = '../Tela_Quero_Doar_Pt1/index.html';
    }else if(login == 'reciclatudo@ecosystem.com' && senha == '1234'){
      location.href = '../Tela_Buscar_Publicacoes/index.html'
    }else{
      alert('Usuário ou senha não cadastrado na base de dados');
    }
};

//Função para redirecionar para a index
function redirecionar(){
  window.location.href='Pages/Tela_Home/index.html';
}

//Função de passar Slides do carrousel -> HOME
var swiper = new Swiper(".swiper", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
    },
    keyboard: true,
  });
  
//Mensagens dos botões
function msgSalvarDoacao(){
  alert('Doação cadastrada com sucesso! Em breve um parceiro irá entrar em contato');
};

function msgExcluirDoacao(){
  alert('Doação deletada do sistema com sucesso!');
};

function msgConfirmarColeta(){
  alert('A sua doação foi agendada! Separe o material e aguarde o coletor vir retira-lo.');
};

function msgDeletarColeta(){
  alert('A doação foi cancelada! O doador irá ser notificado');
};


function msgRetirarMaterial(){
  alert('Confira todo o material e Confirme a retirada');
}

function msgSalvarPerfil(){
  alert('Dados Cadastrado com Sucesso');
}





//Função Esconder Menus -> DUVIDAS
//   const toggles = document.querySelectorAll('.faq-toggle');

// toggles.forEach(toggle => {
//   toggle.addEventListener('click', () => {
//     toggle.parentNode.classList.toggle('active');
//   });
// });

// // SOCIAL PANEL JS
// const floating_btn = document.querySelector('.floating-btn');
// const close_btn = document.querySelector('.close-btn');
// const social_panel_container = document.querySelector('.social-panel-container');

// floating_btn.addEventListener('click', () => {
//   social_panel_container.classList.toggle('visible')
// });

// close_btn.addEventListener('click', () => {
//   social_panel_container.classList.remove('visible')
// });
