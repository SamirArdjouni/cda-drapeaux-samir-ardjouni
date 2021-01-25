var couleur = [ 'white', 'red','blue', 'yellow', 'green', 'black', 'pink'];
var countries = ['france', 'belgique', 'allemand', 'hollandais'];
var colorsFlag= ['blue/white/red', 'black/yellow/red', 'black/red/yellow', 'red/white/blue'];
var i=0,j=0,k = 0; // variable compteur changement couleur
var nbClic= 0, lvl= 0, loopCountries= 0;
var countTabCountrie = 0;
var nbTotalLvl = countries.length;

// ******* PASSER POPUP EN MASQUE  ***************************

var btnPopup = document.getElementById('btnPopup');
btnPopup.addEventListener('click', playGame);

function playGame() {
    var a = document.getElementById('contourPopup');
    var b = document.getElementById('fieldset1');
    var c = document.querySelector('header');
    
    a.style.display = 'none';
    b.style.display ='block';
    c.style.display ='block';
   
    demarrerChrono();  // demarrage du chrono
}

// ***** FONCTION CHANGEMENT COULEURS ***************


$( ".flagLeft" ).click(function() {
    i == couleur.length-1 ? i=0 : i++;
    var colore = couleur[i];
    $(this).css("backgroundColor", colore);
    nbClic++;
    $('#headRight').text("").append("Nombre de clic: " + nbClic);
    setTimeout(verifFlagOK, 3000);
  });

  $( ".flagMiddle" ).click(function() {
    j == couleur.length-1 ? j=0 : j++;
    var colore2 = couleur[j];
    $(this).css("backgroundColor", colore2);
    nbClic++;
    $('#headRight').text("").append("Nombre de clic: " + nbClic);
    setTimeout(verifFlagOK, 3000);
  });

  $( ".flagRight" ).click(function() {
    k == couleur.length-1 ? k=0 : k++;
    var colore3 = couleur[k];
    $(this).css("backgroundColor", colore3);
    nbClic++;
    $('#headRight').text("").append("Nombre de clic: " + nbClic); // ajout nb clicks    
    setTimeout(verifFlagOK, 3000);
  });

// *************   verif si le drapeau est ok   *********************************************
  function verifFlagOK() {
    var country = couleur[i] + '/' + couleur[j] + '/' +couleur[k];
    console.log(country);
    if (colorsFlag[countTabCountrie] == country ) {
        console.log("bingo c'est trouvé");
      $(".flagRight" ).css({"backgroundColor":"white"});
      $(".flagMiddle" ).css({"backgroundColor":"white"});
      $(".flagLeft" ).css({"backgroundColor":"white"});
       i=0; j=0; k=0;
        countTabCountrie++;
        loopCountries++;
        lvl++;
        $('#headLeft').text("").append('Drapeaux trouvés: ' +lvl+'/'+nbTotalLvl);
        playSound();
        changeFlag();
        console.log('ca c vrai');
    }else{
        console.log("c'est raté"); 
    }
  }

// ********* fonction pour changer disposition flag ************************

function mooveFlag() {
    document.getElementById("contenerMiddle").style.flexDirection = "column"; marginTop = "90%";
    document.getElementById("contenerMiddle").style.textAlign='center';
    document.getElementById("contenerMiddle").style.justifyContent='center';
}

// **********  funtion pour faire appel a un nouveau drapeau
function changeFlag() {
    var count = countries[loopCountries];
    document.getElementById("pays").textContent = count;
    var div = document.getElementById("div1");
   if (count== "allemand" || count == "hollandais") {
    mooveFlag();
   } 
}

// ****************** mise en blanc des couleur flag ****************************

function whiteFlag() {
    $(".flagRight" ).css({"backgroundColor":"white"});
    $(".flagMiddle" ).css({"backgroundColor":"white"});
    $(".flagLeft" ).css({"backgroundColor":"white"});
}

// ******* FUNCTION COMPTEUR ET TIMER********************************
$(document).ready(function(){
    $("#headLeft").append(lvl+'/'+nbTotalLvl);
    $("#headMiddle").append(' 00:00(MM:SS) ');
    $("#headRight").append(nbClic)
});

function demarrerChrono(){
    var seconde = 0;
    var minute = 0;
   var heure = 0;
    function chrono(){
        if (seconde<59) {
            seconde ++;
        }else{
            seconde =0;
            minute++;
        }
        $("#headMiddle").text(heure+':'+minute+':'+ seconde);
    }setInterval(chrono, 1000);
} 

// **************** fonction pour le bip **************************

function playSound() {
    // var audio = new Audio();
    // audio.play();
    // var sound = document.getElementById('sound1');
    // sound.Play();
    document.getElementById('sound1').play();
  }

////////////////////////////////////////////////
///////////////////////////////////////////////

// ***** FONCTION CHANGEMENT COULEURS ***************

// $( ".flagLeft" ).click(function() {
//     i == couleur.length ? i=0 : i++;
//     var colore = couleur[i];
//     $(this).css("backgroundColor", colore);
//     nbClic++ 
//     $('#headRight').text("").append("Nombre de clic: " + nbClic);
//     demarrerChrono();
//     verifFlagOK()
//   });

//   $( ".flagMiddle" ).click(function() {
//     j == couleur.length ? j=0 : j++;
//     var colore = couleur[j];
//     $(this).css("backgroundColor", colore);
//     nbClic++;
//     $('#headRight').text("").append("Nombre de clic: " + nbClic);
//     verifFlagOK()
//   });

//   $( ".flagRight" ).click(function() {
//     k == couleur.length ? k=0 : k++;
//     var colore = couleur[k];
//     $(this).css("backgroundColor", colore);
//     nbClic++;
//     $('#headRight').text("").append("Nombre de clic: " + nbClic); // ajout nb clicks    
//     verifFlagOK()
//   });

// // *************   verif si le drapeau est ok   *********************************************
//   function verifFlagOK() {
//     var country = couleur[i] + '/' + couleur[j] + '/' +couleur[k];
//     if (colorsFlag[countTabCountrie] == country ) {
//         console.log("bingo c'est trouvé");
//         setInterval(changeFlag, 1000); // retarder le new flag de 1s
//         countTabCountrie++;
//         loopCountries++;
//         lvl++;
//         $('#headLeft').text("").append('Drapeaux trouvés: ' +lvl+'/'+nbTotalLvl);
//     }else{
//         console.log("c'est raté"); 
//     }
//   }

// ********* fonction pour changer disposition flag ************************

// function mooveFlag() {
//     document.getElementById("contenerMiddle").style.flexDirection = "column"; marginTop = "90%";
//     document.getElementById("contenerMiddle").style.textAlign='center';
//     document.getElementById("contenerMiddle").style.justifyContent='center';
// }

// // **********  funtion pour faire appel a un nouveau drapeau
// function changeFlag() {
//     var count = countries[loopCountries];
//     document.getElementById("pays").textContent = count;
//     $(".flagRight" ).css({"backgroundColor":"white"});
//     $(".flagMiddle" ).css({"backgroundColor":"white"});
//     $(".flagLeft" ).css({"backgroundColor":"white"});
//     var div = document.getElementById("div1");
//    if (count== "allemand" || count == "hollandais") {
//     mooveFlag();
//     alert("je suis entré");
//    }
    
// }

// // ******* FUNCTION COMPTEUR ET TIMER********************************
// $(document).ready(function(){
//     $("#headLeft").append(lvl+'/'+nbTotalLvl);
//     $("#headMiddle").append(' 00:00(MM:SS) ');
//     $("#headRight").append(nbClic)
// });

// function demarrerChrono(){
//     var seconde = 0;
//     var minute = 0;
//    var heure = 0;
//     function chrono(){
//         if (seconde<59) {
//             seconde ++;
//         }else{
//             seconde =0;
//             minute++;
//         }
//         $("#headMiddle").text(heure+':'+minute+':'+ seconde);
//     }setInterval(chrono, 1000);
// } 

////////////////////////////////////////////////
///////////////////////////////////////////////
   
// $("#buttonValidate").click(function(){
//     var country = couleur[i] + '/' + couleur[j] + '/' +couleur[k];
//     if (colorsFlag[countTabCountrie] == country ) {
//         console.log("bingo c'est trouvé");
//         countTabCountrie++;
//         loopCountries++;
//         changeFlag();
//         lvl++;
//         $('#headLeft').text("").append('Drapeaux trouvés: ' +lvl+'/'+nbTotalLvl);
//     }else{
//         console.log("c'est raté"); 
//          document.getElementById("contenerMiddle").style.flexDirection = "column"; marginTop = "90%";
//          document.getElementById("contenerMiddle").style.textAlign='center';
//          document.getElementById("contenerMiddle").style.justifyContent='center';
        
//     }
// });



// $(document).ready(function() {
//    var compteur = 0;
//    setInterval(function(){
//        compteur++;
//        $("#").text(compteur);
//    },1000);
// });


// ****************************************************************

    // if (countries[loopCountries]== "belgique") {
    //     $('#contenerMiddle').css('display', 'bloc');
    // }


// function centerDiv() {
//     var p = document.getElementById("contenerMiddle");
//     alert("coucou");
//     // p.css(style.flexDirection = "column"; justify-content:center; align-items: center;)
//     $("p").position({
       
//         color : 'red', // couleur rouge
//         width : '300px', // largeur de 300px
//         height : '200px' // hauteur de 200px
//     });

// }



// function showFlex(element) {

//     var flexContainer = document.getElementById(element);
//     alert("bonjour");
//     flexContainer.setAttribute("style", "display: -webkit-box; display: -ms-flexbox; display: -webkit-flex; display: none;");
//     document.getElementById("main").style.flexDirection = "column-reverse"; 
// }

// function showFlex() {

//     var flexContainer = document.getElementById(contenerMiddle);

//     flexContainer.setAttribute("style", " display: none; ");
// } 


//  function name() {           flex-direction:column
//      var structure =
//      <fieldset id="fieldset1"><legend class="pays" > countries[countTabCountrie] </legend>
//      <div class="contener">
//          <div class="contenerMiddle">
//              <div class="flagLeft">A</div>
//              <div class="flagMiddle">B</div>
//              <div class="flagRight">C</div>
//          </div>
//      </div>
//  </fieldset>


//  }


// $("#buttonValidate").click(function(){
//     var country = couleur[i] + '/' + couleur[j] + '/' +couleur[k];
//   //  var p = document.getElementById("buttonValidate");
//     if (colorsFlag[countTabCountrie] == country ) {
//         console.log("bingo c'est trouvé");

//         // $("#fieldset2").show();
//         // $("#fieldset1").hide();
//         countTabCountrie++;
//         // document.getElementsByClassName("pays").textContent = 'countries[countTabCountrie]';
//         changeFlag();

//     }else{
//         console.log("c'est raté"); 
//     }
    
// })



// function changeColorFlag() {
//     i == couleur.length ? i=0 : i++;
//     var colore = couleur[i];
//     $(this).css("backgroundColor", colore);
// }

// var france = "blue/white/red";
// var belgique = "black/yellow/red";
// let map = new Map(); // creation tableau map a 2valeurs
// map.set('france', 'blue/white/red');
// map.set('belgique', 'black/yellow/red');
    
    
