var couleur = [ 'white', 'red','blue', 'yellow', 'green', 'black'];
var countries = ['france', 'belgique', 'allemand', 'hollandais'];
var colorsFlag= ['blue/white/red', 'black/yellow/red', 'black/red/yellow', 'red/white/blue'];
// var france = "blue/white/red";
// var belgique = "black/yellow/red";
// let map = new Map(); // creation tableau map a 2valeurs
// map.set('france', 'blue/white/red');
// map.set('belgique', 'black/yellow/red');
var i=0,j=0,k = 0; // variable compteur changement couleur
var countTabCountrie = 0;
var loopCountries = 0;

// ***** FONCTION CHANGEMENT COULEURS ***************

$( ".flagLeft" ).click(function() {
    i == couleur.length ? i=0 : i++;
    var colore = couleur[i];
    $(this).css("backgroundColor", colore);
  });

  $( ".flagMiddle" ).click(function() {
    j == couleur.length ? j=0 : j++;
    var colore = couleur[j];
    $(this).css("backgroundColor", colore);
  });

  $( ".flagRight" ).click(function() {
    k == couleur.length ? k=0 : k++;
    var colore = couleur[k];
    $(this).css("backgroundColor", colore);
    
  });

$("#buttonValidate").click(function(){
    var country = couleur[i] + '/' + couleur[j] + '/' +couleur[k];
    if (colorsFlag[countTabCountrie] == country ) {
        console.log("bingo c'est trouvé");
        countTabCountrie++;
        loopCountries++;
        changeFlag();
        // showFlex( "contenerMiddle" );
    }else{
        console.log("c'est raté"); 
        // showFlex( "contenerMiddle" );
        // document.getElementById("contenerMiddle").style.flexDirection = "column"; top:'50%';left:'50%'; margin-left: 50%}
        //  document.getElementById("contenerMiddle").style.flexDirection = "column"; justify-content:center; align-items: center;
         document.getElementById("contenerMiddle").style.flexDirection = "column"; marginTop = "90%";
         document.getElementById("contenerMiddle").style.textAlign='center';
         document.getElementById("contenerMiddle").style.justifyContent='center';
         document.getElementById('conteneur').style.display='inline-grid';
      
    }
});
// **********  funtion pour faire appel a un nouveau drapeau
function changeFlag() {
    var count = countries[loopCountries];
    document.getElementById("pays").textContent = count;
    $(".flagRight" ).css({"backgroundColor":"white"});
    $(".flagMiddle" ).css({"backgroundColor":"white"});
    $(".flagLeft" ).css({"backgroundColor":"white"});
  
    var div = document.getElementById("div1");
div.style.marginTop = ".25cm";


    // if (countries[loopCountries]== "belgique") {
    //     $('#contenerMiddle').css('display', 'bloc');
    // }
}

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



        
    
    
