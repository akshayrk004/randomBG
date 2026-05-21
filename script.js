const btn = document.querySelector("#btn");

let val = "0123456789ABCDEF";

let randomColor = () => {
  let hash = "#";
  for (i = 0; i < 6; i++) {
    hash = hash + val[Math.floor(Math.random() * val.length)];
  }
  document.body.style.backgroundColor = hash;
  btn.innerHTML = hash;
};
btn.addEventListener("click", randomColor);
