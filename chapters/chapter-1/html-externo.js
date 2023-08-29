// Função para carregar o header
function loadHeader() {
    var headerContainer = document.getElementById('header-container');
    var headerReq = new XMLHttpRequest();
    headerReq.open('GET', 'header.html', true);
    headerReq.onreadystatechange = function () {
        if (headerReq.readyState === 4 && headerReq.status === 200) {
            headerContainer.innerHTML = headerReq.responseText;
        }
    };
    headerReq.send();
}

// Função para carregar o footer
function loadFooter() {
    var footerContainer = document.getElementById('footer-container');
    var footerReq = new XMLHttpRequest();
    footerReq.open('GET', 'footer.html', true);
    footerReq.onreadystatechange = function () {
        if (footerReq.readyState === 4 && footerReq.status === 200) {
            footerContainer.innerHTML = footerReq.responseText;
        }
    };
    footerReq.send();
}

// Chama as funções para carregar o header e footer
loadHeader();
loadFooter();