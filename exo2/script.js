function focusMessage(val){//On utilise la valeur non entrée écrite dans l'objet d'où la fonction est appelée.
  if (val == '') {
    alert('Veuillez entrer votre nom.')
  }else if (isNaN(val) == false){
    alert('Veuillez entrer votre nom, pas un nombre s\'il vous plaît.');
  }else {
    alert('Merci de votre participation');
  }
}
