function edition(){
    document.getElementById("commentaire").innerHTML="";
}

function verif(){
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("Prenom").value;
    var mail = document.getElementById("Mail").value;
    var food = document.getElementById("nourriture").value;

    var compteur = 0;

    if (nom == ""){
        document.getElementById("nom").style.borderColor = "red";
        compteur++;
    }
    if (prenom == ""){
        document.getElementById("Prenom").style.borderColor = "red";
        compteur++;
    }
    if (mail == ""){
        document.getElementById("Mail").style.borderColor = "red";
        compteur++;
    }
    if (food == ""){
        document.getElementById("nourriture").style.borderColor = "red";
        compteur++;
    }
    if (compteur == 0){
        alert("Envoi réussi !");
        document.forms[0].submit();
    }
    else{
        document.getElementById("etat").innerHTML = "Erreur lors de l'envoi, vérifiez votre saisie.";
    }
}