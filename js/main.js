// Função para limpar o conteúdo do objeto
// function limparObjeto() {
//     var objeto = document.getElementById("cabecalho");
//     if (objeto) {
//         while (objeto.firstChild) {
//             objeto.removeChild(objeto.firstChild);
//         }
//     }
// }
// window.addEventListener("beforeunload", function (tag){
//         let remocao = document.getElementsByTagName(tag)[0]
//         // remocao.remove()
//         alert(123)
// })
//     //
//     // remove("object")
//     // remove("object")
//
// function handleClick(event) {
//     var target = event.target;
//     // Coloque aqui a lógica da sua função a ser executada
//     console.log("Clicou em: " + target.tagName);
// }
//
// window.addEventListener("DOMContentLoaded", function() {
//     var divElement = document.getElementsByTagName("header")[0];
//     divElement.addEventListener("click", handleClick);
// });


    $(window).on('load', function(){
        $("#cabecalho").load("../cabecalho.html");
    });


    // $(document).on('click', 'a', function(e) {
    //     var textoDoParagrafo = $(this).find('p').text();
    //     alert(textoDoParagrafo);
    // });



