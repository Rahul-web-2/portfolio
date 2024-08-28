var typed = new Typed('#element1', {
  strings: ['<i>Front-End Developer</i>'],
  typeSpeed: 40,
  loop: true,
  backDelay: 1000,
});

var typed = new Typed('#element2', {
  strings: ['ReactJs', ' AngularJS', 'Next.js', 'Bootstrap'],
  typeSpeed: 50,
  loop: true,
  backDelay: 900,
});

var typed = new Typed('#element3', {
  strings: ['Rahul Lakhchaura'],
  typeSpeed: 30,
});

var icon = document.getElementById("icon");
var whiteElements = document.getElementsByClassName("white");

icon.onclick = function () {
  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("light-theme")) {
    icon.src = "./img/moon.png";
    for (var i = 0; i < whiteElements.length; i++) {
      whiteElements[i].style.backgroundColor = "black";
    }
  } else {
    icon.src = "./img/sun.png";
    for (var i = 0; i < whiteElements.length; i++) {
      whiteElements[i].style.backgroundColor = "white";
    }
  }
};