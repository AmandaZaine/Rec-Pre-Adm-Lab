function getDatas() {

   let name = document.getElementById("nameForm").value;
   
   window.location.href='index2.html';
      
   document.getElementById("welcome2").innerHTML = "Bem vinda(o) " + name + "!";
   
}




function addEvent() {
    document.getElementById("butForm").addEventListener("click",getDatas);
}
