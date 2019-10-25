document.getElementById('lastname').addEventListener('input', inMyinput);//La fonction inMyinput est appelée dès que quelque chose est écrite dans l'input.
function inMyinput(){
  let youWrote = document.getElementById('lastname').value;
  alert(youWrote);
}
