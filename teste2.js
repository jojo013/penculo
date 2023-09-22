document.getElementById("calcular").addEventListener("click", function () {
    var produtoSelecionado1 = document.getElementById("produto1");
    var produtoSelecionado2 = document.getElementById("produto2");
    var produtoSelecionado3 = document.getElementById("produto3");
    var produtoSelecionado4 = document.getElementById("produto4");
    var produtoSelecionado5 = document.getElementById("produto5");

    var quantidade = document.getElementById("quantidade").value;
    var valorProduto1 = produtoSelecionado1.value;
    var valorProduto2 = produtoSelecionado2.value;
    var valorProduto3 = produtoSelecionado3.value;
    var valorProduto4 = produtoSelecionado4.value;
    var valorProduto5 = produtoSelecionado5.value;
    
    var total1 = quantidade * valorProduto1;
    var total2 = quantidade * valorProduto2;
    var total3 = quantidade * valorProduto3;
    var total4 = quantidade * valorProduto4;
    var total5 = quantidade * valorProduto5;


    var total = total1+total2+total3+total4+total5
    
    document.getElementById("total").textContent = total;
});