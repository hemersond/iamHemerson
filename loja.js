var total = 0;
var lista = "";

function abrirModal(id) {
    document.getElementById(id).style.display = "flex";
}

function fecharModal(id) {
    document.getElementById(id).style.display = "none";
}

function direto1() {
    var carrao = confirm("Comprar Silver Springs por R$7000?");
    if (carrao == true) {
        alert("Comprado!");
        location.reload();
    }
}
function add1() {
    total = total + 7000;
    lista = lista + " Silver Springs - R$7000 ";
    document.getElementById("itens-carrinho").innerHTML = lista;
    alert("você colocou 'Silver Springs' no carrinho");
}

function direto2() {
    var carrao = confirm("Comprar Art Attack por R$5000?");
    if (carrao == true) {
        alert("Comprado!");
        location.reload();
    }
}
function add2() {
    total = total + 5000;
    lista = lista + " Art Attack - R$5000 ";
    document.getElementById("itens-carrinho").innerHTML = lista;
    alert("você colocou 'Art Attack' no carrinho");
}

function direto3() {
    var carrao = confirm("Comprar Bubble Pink por R$6200?");
    if (carrao == true) {
        alert("Comprado!");
        location.reload();
    }
}
function add3() {
    total = total + 6200;
    lista = lista + " Bubble Pink - R$6200 ";
    document.getElementById("itens-carrinho").innerHTML = lista;
    alert("você colocou 'Bubble Pink' no carrinho");
}

function direto4() {
    var carrao = confirm("Comprar Cidade Esmeralda por R$4800?");
    if (carrao == true) {
        alert("Comprado!");
        location.reload();
    }
}
function add4() {
    total = total + 4800;
    lista = lista + " Cidade Esmeralda - R$4800 ";
    document.getElementById("itens-carrinho").innerHTML = lista;
    alert("você colocou 'Cidade Esmeralda' no carrinho");
}


function direto5() {
    var carrao = confirm("Comprar Sailor Moon por R$9000?");
    if (carrao == true) {
        alert("Comprado!");
        location.reload();
    }
}
function add5() {
    total = total + 9000;
    lista = lista + " Sailor Moon - R$9000 ";
    document.getElementById("itens-carrinho").innerHTML = lista;
    alert("você colocou 'Sailor Moon' no carrinho");
}

function finalizarCarrinho() {
    if (total == 0) {
        alert("Nao tem nada aqui!");
    } else {
        var frete = 500;
        var tudo = total + frete;
        var pergunta = confirm("Total com frete deu R$" + tudo + ". Aceita?");
        
        if (pergunta == true) {
            var pag = prompt("1 para Cartao ou 2 para Pix");
            if (pag == "1") {
                alert("Pago no cartao!");
                location.reload();
            }
            if (pag == "2") {
                alert("Pago no Pix!");
                location.reload();
            }
        }
    }
}