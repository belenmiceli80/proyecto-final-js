// ejecutar funcion en el evento click
document.getElementById("btn_open").addEventListener("click", open_close_menu);


let side_menu = document.getElementById("menu_side");
let btn_open = document.getElementById("btn_open");
let body = document.getElementById("body");

// evento para mostrar y ocultar menu
    function open_close_menu() {
        body.classList.toggle("body_move");
        side_menu.classList.toggle("menu_side_move");
    }


// si el ancho es menor a 760px

if (window.innerWidth < 760) {

    body.classList.add("body_move");
    side_menu.classList.add("menu_side_move");
}

// menu responsive

window.addEventListener("resize", function() {
    if (window.innerWidth > 760) {
        body.classList.remove("body_move");
        side_menu.classList.remove("menu_side_move");
    }

    if (window.innerWidth < 760) {
        body.classList.add("body_move");
        side_menu.classList.add("menu_side_move");
    }
});