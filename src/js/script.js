window.onload = function() {
    const menuMobile = document.querySelector(".menu-mobile");
    const menu = document.querySelector(".header-bottom nav ul");

    // Função para abrir/fechar o menu
    function toggleMenu() {
        // Só alteramos o display se a tela for pequena (menos de 599px)
        if (window.innerWidth <= 599) {
            if (menu.style.display === "none" || menu.style.display === "") {
                menu.style.display = "flex"; // Exibe o menu
            } else {
                menu.style.display = "none"; // Esconde o menu
            }
        }
    }

    // Função para fechar o menu ao clicar fora dele
    function closeMenu(event) {
        // Só fecha o menu se a tela for pequena
        if (window.innerWidth <= 599) {
            if (!menu.contains(event.target) && !menuMobile.contains(event.target)) {
                menu.style.display = "none"; // Fecha o menu
            }
        }
    }

    if (menuMobile) {
        // Abrir/fechar menu ao clicar no botão
        menuMobile.addEventListener("click", function(event) {
            toggleMenu();
            event.stopPropagation(); // Impede que o clique feche imediatamente
        });

        // Fechar o menu ao clicar fora
        document.addEventListener("click", function(event) {
            closeMenu(event);
        });
    }
};
