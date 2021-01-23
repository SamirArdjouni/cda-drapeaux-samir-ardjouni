var couleur = [ 'white', 'red','blue', 'yellow', 'green', 'black'];
var france = "blue/white/red";
var i = 0;

// ***** FONCTION CHANGEMENT COULEURS ***************

$( "#flagLeft" ).click(function() {
    i == couleur.length ? i=0 : i++;
   
    var colore = couleur[i];
    $(this).css("backgroundColor", colore);
  });

  $( "#flagMiddle" ).click(function() {
    i == couleur.length ? i=0 : i++;
   
    var colore = couleur[i];
    $(this).css("backgroundColor", colore);
  });

  $( "#flagRight" ).click(function() {
    i == couleur.length ? i=0 : i++;
   
    var colore = couleur[i];
    $(this).css("backgroundColor", colore);
  });

//   ************************************************




// (function(){
//     var couleur =  document.querySelector("#flagLeft");
//     couleur.addEventListener('click', function(){

//         couleur.style.backgroundColor = 'blue'; 
//         couleur.textContent='tentative de modification';  
//         couleur.innerHTML='<strong>Texte en gras</strong>';

//     });
// });
   


// $(document).ready(function(){
//     $("#flagLeft").click(function(){
//         var p = "#flagLeft";
//         p.css()("background-color", "blue");
        
//     })
// })

// (function(){
//    var couleur =  document.getElementById("#flagLeft");
//    couleur.click(function(){
//        couleur.style.backgroundColor = 'blue';      

//    })
   
// });


// $(document).ready(function () {
//     $("#buttonValidate").click(function () {
//         $("#contener").hide();
//         alert("bonjour");
//     });

// });




// function init() {
//     $("#buttonValidate").click(function(){
//         alert("hello");

//     })
//  }

// window.onload = init;


// (function(){
//     var couleur =  document.getElementById("#flagLeft");
//     couleur.addEventListener('click', fo-nctionChangeCouleur);
//     function nctionChangeCouleur (){
//         couleur.style.backgroundColor = 'blue';      
 
//     }

// })