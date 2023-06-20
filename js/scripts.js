//Criano váriavel em JS
let menu = document.getElementById("menu_links")
let menu_barras = document.getElementById("menu_barras")

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

addEventListener("resize", () => {
    if (window.innerWidth > 1073){
        menu.style.display = "flex";
    } else{
        menu.style.display = "none";
    }
});
