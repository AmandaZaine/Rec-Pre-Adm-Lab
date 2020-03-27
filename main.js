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
    document.getElementById("gameOneAgain").addEventListener("click",goThemeOne);
    document.getElementById("gameTwoAgain").addEventListener("click",goThemeTwo); 
    document.getElementById("closeGame").addEventListener("click",closeAllGame); 
}

function closeAllGame(){
    return window.close();   
}


function showAnswers(){
    document.getElementById("allQuestions").style.display = "none";

    document.getElementById("showFinalAnswer").style.display = "block";

    document.getElementById("playAgain").style.visibility = "visible";  
    
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
