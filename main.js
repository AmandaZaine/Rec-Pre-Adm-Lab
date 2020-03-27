// Função que direciona para cada função específica
function addEvent() {
    document.getElementById("butForm").addEventListener("click",getDatas);
    document.getElementById("gameOne").addEventListener("click",goThemeOne);
    document.getElementById("gameTwo").addEventListener("click",goThemeTwo);    
}

// Função específica para mensagem de boas vindas
function getDatas() {
    
   let name = document.getElementById("nameForm").value;         
   document.getElementById("welcome").innerHTML = "Bem vinda(o) " + name + "!";
   document.getElementById("gameTheme").innerHTML = name + ", escolha o tema do jogo que você deseja jogar:";
   document.getElementById("selectGame").style.visibility = "visible";  
}
// Função re-direcionamento tema 1
function goThemeOne() {
    window.location.href='themeone.html';       
}

// Função re-direcionamento tema 2
function goThemeTwo() {
    window.location.href='themetwo.html';    
}



function eventAnswers() {
    document.getElementById("sendAnswers").addEventListener("click",showAnswers);
}


function showAnswers(){
    document.getElementById("allQuestions").style.display = "none";

    //document.getElementById("showFinalAnswer").style.display = "block";
    /*
    .showFinalAnswer{
    display: none;
    }
    */



    if (document.getElementById("right1a").checked == true) {
        document.getElementById("rightAnswers").innerHTML += "<p>Você acertou a pergunta 1</p>";
    }else{
        document.getElementById("wrongAnswers").innerHTML += "<p>Você errou a pergunta 1</p>";
    }

    if (document.getElementById("right2a").checked == true) {
        document.getElementById("rightAnswers").innerHTML += "<p>Você acertou a pergunta 2</p>";  
    }else{
        document.getElementById("wrongAnswers").innerHTML += "<p>Você errou a pergunta 2</p>";
    }

    if (document.getElementById("right3a").checked == true) {
        document.getElementById("rightAnswers").innerHTML += "<p>Você acertou a pergunta 3</p>";
    }else{
        document.getElementById("wrongAnswers").innerHTML += "<p>Você errou a pergunta 3</p>";
    }
}







/*  
    
    
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

*/
