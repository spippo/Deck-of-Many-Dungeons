function a() {
  carta.style = "transform: rotate(-90deg)";
}

const carta = document.getElementsByClassName("card");
for (let i = 0; i < carta.length; i++) {
  carta[i].addEventListener("click", a);
}
