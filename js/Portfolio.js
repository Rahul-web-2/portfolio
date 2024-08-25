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

function toggleText() {
  const moreText = document.getElementById("moreText");
  const btnText = document.getElementById("readMoreBtn");

  if (moreText.style.display === "none" || moreText.style.display === "") {
    moreText.style.display = "inline";
    btnText.innerHTML = "Read Less";
  } else {
    moreText.style.display = "none";
    btnText.innerHTML = "Read More";
  }
}

// Apply initial state based on screen size
function applyInitialState() {
  const moreText = document.getElementById("moreText");
  const btnText = document.getElementById("readMoreBtn");

  if (window.innerWidth >= 426) {
    moreText.style.display = "inline";
    btnText.style.display = "block";
  } else {
    moreText.style.display = "none";
    btnText.style.display = "block";
  }
}

// Apply the correct state when the page loads
applyInitialState();

// Attach an event listener to handle window resize
window.addEventListener('resize', applyInitialState);