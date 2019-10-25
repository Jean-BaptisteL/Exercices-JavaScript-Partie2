//mouseover permet d'activer la fonction lorsqu'on survole l'objet avec la souris. C'est l'inverse pour mouseout.
document.getElementById('image1').addEventListener('mouseover', changeImage);
document.getElementById('image1').addEventListener('mouseout', rechangeImage);
function changeImage(){
  //On déclare une variable et on lui donne comme valeur l'adresse de l'image.
  let srcImage = document.getElementById('image1').src;
  //On déclare une variable qui remplace la valeur en src de la variable srcImage.
  let newSrc = srcImage.replace('images/image1.jpg','images/image1_2.jpg');
  //On remplace le src de l'image.
  document.getElementById('image1').src = newSrc;
}
function rechangeImage(){
  //Idem mais dans l'autre sens.
  let srcImage = document.getElementById('image1').src;
  let newSrc = srcImage.replace('images/image1_2.jpg','images/image1.jpg');
  document.getElementById('image1').src = newSrc;
}
