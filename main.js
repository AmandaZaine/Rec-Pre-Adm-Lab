
function getDatas() {
   let name = document.getElementById("nameForm").value;         
   document.getElementById("welcome").innerHTML = "Bem vinda(o) " + name + "!";
   document.getElementById("gameTheme").innerHTML = name + ", escolha o tema do jogo que você deseja jogar:";
   document.getElementById("selectGame").style.visibility = "visible";
   //window.location.href='index2.html';
   //alert("Está funcionando!");
}


function addEvent() {
    document.getElementById("butForm").addEventListener("click",getDatas);
}


function goGameOne() {
    document.getElementById("gameOne").addEventListener("click",goThemeOne);
}

function goThemeOne() {
    //window.location.href='themeone.html';
    //window.location.assign("https://www.w3schools.com");
    alert("Está funcionando!");
}
























/*

let desejaJogar = prompt("Deseja jogar? \n Digite número correspondente a sua escolha: \n 1. Sim \n 2. Não");

if (desejaJogar == 1) {

    let tema = parseInt(prompt("Você deseja realizar um questionário sobre qual tema? \n Digite o número correspondente a sua escolha: \n 1. Matemática \n 2.HTML"));
    
    if (tema === 1){

    let primeiraPergunta = parseInt(prompt("Primeira Pergunda: \n Quanto é 2+2? \n Digite número correspondente a sua escolha: \n 1. 4 \n 2. 6 \n 3. 0"));
    if (primeiraPergunta === 1){
        let respostaCorreta1 = document.getElementById("resposta-correta-1");
        respostaCorreta1.innerHTML += "<p>Você acertou a questão 1</p>";
        
    } else {
         let respostaErrada1 = document.getElementById("resposta-errada-1");
        respostaErrada1.innerHTML += "<p>Você errou a questão 1</p>";
    }

    let segundaPergunta = parseInt(prompt("Segunda Pergunda: \n Quanto é 5*5? \n Digite número correspondente a sua escolha: \n 1. 40 \n 2. 60 \n 3. 25"));
    if (segundaPergunta === 3){
        let respostaCorreta2 = document.getElementById("resposta-correta-1");
        respostaCorreta2.innerHTML +=  "<p>Você acertou a questão 2</p>";
        
    } else {
         let respostaErrada2 = document.getElementById("resposta-errada-1");
        respostaErrada2.innerHTML += "<p>Você errou a questão 2</p>";
    }
     
    let terceiraPergunta = parseInt(prompt("Terceira Pergunda: \n Quanto é 9*9 ? \n Digite número correspondente a sua escolha: \n 1. 72 \n 2. 81 \n 3. 35"));
    if (terceiraPergunta === 2){
        let respostaCorreta3 = document.getElementById("resposta-correta-1");
        respostaCorreta3.innerHTML += "<p>Você acertou a questão 3</p>";
        
    } else {
         let respostaErrada3 = document.getElementById("resposta-errada-1");
        respostaErrada3.innerHTML += "<p>Você errou a questão 3</p>";
    }
}
else {
    let questao1 = parseInt(prompt("Primeira Pergunda: \n O que é Header? \n Digite número correspondente a sua escolha: \n 1. Cabeçalho \n 2. Corpo \n 3. Comida "));
    if (questao1 === 1){
        let respostaCorreta1 = document.getElementById("resposta-correta-1");
        respostaCorreta1.innerHTML += "<p>Você acertou a questão 1</p>";
        
    } else {
         let respostaErrada1 = document.getElementById("resposta-errada-1");
        respostaErrada1.innerHTML += "<p>Você errou a questão 1</p>";
    }

    let questao2 = parseInt(prompt("Segunda Pergunda: \n O que é uma div? \n Digite número correspondente a sua escolha: \n 1. Uma tag de divisão \n 2. Discussão \n 3. Dividendo"));
    if (questao2 === 1){
        let respostaCorreta2 = document.getElementById("resposta-correta-1");
        respostaCorreta2.innerHTML +=  "<p>Você acertou a questão 2</p>";
        
    } else {
         let respostaErrada2 = document.getElementById("resposta-errada-1");
        respostaErrada2.innerHTML += "<p>Você errou a questão 2</p>";
    }
     
    let questao3 = parseInt(prompt("Terceira Pergunda: \n Pra que serve \\n ? \n Digite número correspondente a sua escolha: \n 1. Pular linha \n 2. Pular resposta \n 3. Parar"));
    if (questao3 === 1){
        let respostaCorreta3 = document.getElementById("resposta-correta-1");
        respostaCorreta3.innerHTML += "<p>Você acertou a questão 3</p>";
        
    } else {
         let respostaErrada3 = document.getElementById("resposta-errada-1");
        respostaErrada3.innerHTML += "<p>Você errou a questão 3</p>";
    }




}

} else {

    let naoJogar = document.getElementById("nao-jogar");
    name.innerHTML = "Obrigada por acessar o jogo " + nomeJogador + "!";
}

*/
