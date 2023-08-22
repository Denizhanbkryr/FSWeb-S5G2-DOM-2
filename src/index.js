import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });

// Kodlar buraya gelecek!
/*
document.querySelector("h1").addEventListener("click", function (e) {
  alert("Bana tıkladın!");
});*/

const body = document.querySelector("body");
window.addEventListener("load", (e) => {
  body.style.background = "red";
});

const images = document.querySelectorAll("img");
images.forEach((s) => {
  s.addEventListener("mouseover", (event) => {
    s.style.filter = "grayscale(100%)";
  });
  s.addEventListener("mouseleave", (event) => {
    s.style.filter = "unset";
  });
});

let input = document.getElementById("input1");
input.addEventListener("focus", (e) => {
  e.target.style.border = "10px solid red";
});

input.addEventListener("blur", (e) => {
  e.target.style.border = "2px solid black";
});

window.addEventListener("blur", () => {
  document.querySelector("body").style.backgroundColor = "red";
});

window.addEventListener("focus", () => {
  document.querySelector("body").style.backgroundColor = "white";
});

window.addEventListener("resize", (e) => {
  input.value = `${window.innerWitdh} x ${window.innerHeight}`;
  if (window.innerWidth < 600) {
    document.querySelector("body").style.backgroundColor = "red";
  } else {
    document.querySelector("body").style.backgroundColor = null;
  }
});

const img2 = document.getElementById("img-2");
img2.addEventListener("dragstart", (ev) => {
  ev.dataTransfer.setData("Text", ev.target.src);
});

const img1 = document.getElementById("img-1");
img1.addEventListener("drop", (ev) => {
  let data = ev.dataTransfer.getData("Text");
  ev.target.src = data;
  ev.preventDefault();
});

img1.addEventListener("dragover", (ev) => {
  ev.preventDefault();
});
