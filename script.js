var couleur = [ 'white', 'red','blue', 'yellow', 'green', 'black'];
var france = "blue/white/red";
let map = new Map(); // creation tableau map a 2valeurs
map.set('france', 'blue/white/red');

// recuperer on fait map.('paris');
var i=0,j=0,k = 0;

// ***** FONCTION CHANGEMENT COULEURS ***************

$( "#flagLeft" ).click(function() {
    i == couleur.length ? i=0 : i++;
    var colore = couleur[i];
    $(this).css("backgroundColor", colore);
  });

  $( "#flagMiddle" ).click(function() {
    j == couleur.length ? j=0 : j++;
    var colore = couleur[j];
    $(this).css("backgroundColor", colore);
  });

  $( "#flagRight" ).click(function() {
    k == couleur.length ? k=0 : k++;
    var colore = couleur[k];
    $(this).css("backgroundColor", colore);
    
  });

//   *************** bouton valider *********************************

$("#buttonValidate").click(function(){
    var country = couleur[i] + '/' + couleur[j] + '/' +couleur[k];
    var p = document.getElementById("buttonValidate");
    if (map.get("france") == country ) {
        console.log("bingo c'est trouvé");
    }else{
        console.log("c'est raté"); 
    }
})
