let totalGeral = 0;
document.getElementById("lista-produtos").innerHTML = "";
document.getElementById("valor-total").textContent = "R$ 0";

function adicionar() {
    // recuperar valores: nome do produto, quantidade e valor
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split("-")[0];
    let valorUnitario = produto.split("R$")[1];
    let quantidade = document.getElementById("quantidade").value;
    if (quantidade == null || quantidade == 0 || quantidade < 0 || quantidade == NaN) {
        alert("Digite um valor válido para as quantidades dos produtos!");
        document.getElementById("quantidade").value = '';
    } else {
        // calcular o preço, o subtotal
        let preco = quantidade * valorUnitario;
        // adicionar o carrinho
        let listaCarrinho = document.getElementById("lista-produtos");
        listaCarrinho.innerHTML = listaCarrinho.innerHTML + `<section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
            </section>`;
        // atualizar o valor total da compra
        totalGeral += preco;
        let textoValorTotal = document.getElementById("valor-total");
        textoValorTotal.textContent = "R$" + totalGeral;
        document.getElementById("quantidade").value = "";
        }
    }
    

function limpar() {
    totalGeral = 0;
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").textContent = "R$ 0";
}