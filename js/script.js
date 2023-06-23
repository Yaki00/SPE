/* GRID X6 */

const observe = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('cache')) {
        entry.target.classList.add('show');
      }
    } else {
      if (entry.target.classList.contains('show')) {
        entry.target.classList.remove('show');
      }
    }
  });
});

const observe2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('cache2')) {
        entry.target.classList.add('show');
      }
    } else {
      if (entry.target.classList.contains('show')) {
        entry.target.classList.remove('show');
      }
    }
  });
});

const elementCache = document.querySelectorAll('.cache');
const elementCache2 = document.querySelectorAll('.cache2');
elementCache2.forEach((el) => observe2.observe(el));
elementCache.forEach((el) => observe.observe(el));
/* NAV */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("nav").style.top = "0";
  } else {
    document.querySelector("nav").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

const currentPageUrl = window.location.href;

const accueilButton = document.getElementById('accueil');
const prestationsButton = document.getElementById("prestations");
const realisationsButton = document.getElementById("realisations");
const contactButton = document.getElementById("contact");


if (currentPageUrl.includes('index.html')) {
  accueilButton.classList.add('nav-active');
  prestationsButton.classList.add('nav-desactive');
  contactButton.classList.add('nav-desactive');
} else if (currentPageUrl.includes('prestations.html')) {
  
  accueilButton.classList.add('nav-desactive');
  prestationsButton.classList.add('nav-active');
  contactButton.classList.add('nav-desactive');
} else if (currentPageUrl.includes('contact.html')) {
  accueilButton.classList.add('nav-desactive');
  prestationsButton.classList.add('nav-desactive');
  contactButton.classList.add('nav-active');
}




/* CAROUSEL */
const carousel = document.querySelector('.carousel');
const items = carousel.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentSlide = 0;
let slideInterval;

function showSlide(n) {
  items[currentSlide].classList.remove('active');
  currentSlide = (n + items.length) % items.length;
  items[currentSlide].classList.add('active');
  var imgElement = items[currentSlide].querySelector('img');
  if (imgElement) {
    console.log(imgElement.src);
    carousel.style.backgroundImage = `url(${imgElement.src})`;
  }
  
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

function startSlideInterval() {
  slideInterval = setInterval(nextSlide, 3000);
}

function stopSlideInterval() {
  clearInterval(slideInterval);
}

startSlideInterval();
carousel.addEventListener('mouseenter', stopSlideInterval);
carousel.addEventListener('mouseleave', startSlideInterval);



/* COOKIE */

var cookiePopup = document.getElementById("cookiePopup");
    var acceptButton = document.getElementById("acceptCookies");
    var rejectButton = document.getElementById("rejectCookies");
    var customizeButton = document.getElementById("customizeCookies");
    
    // Vérifier si les cookies ont déjà été acceptés
    var cookiesAccepted = localStorage.getItem("cookiesAccepted");
    
    // Afficher ou masquer le pop-up en fonction du statut des cookies
    if (!cookiesAccepted) {
      cookiePopup.style.display = "block";
    }
    
    // Fonction pour accepter les cookies
    function acceptCookies() {
      localStorage.setItem("cookiesAccepted", true);
      cookiePopup.style.display = "none";
    }
    
    // Fonction pour refuser les cookies
    function rejectCookies() {
      localStorage.removeItem("cookiesAccepted");
      cookiePopup.style.display = "none";
    }
    
    // Fonction pour personnaliser les cookies (à personnaliser selon vos besoins)
    function customizeCookies() {
      // Ajoutez votre code personnalisé pour personnaliser les cookies ici
      console.log("Personnaliser les cookies");
    }
    
    // Associer les événements aux boutons
    acceptButton.addEventListener("click", acceptCookies);
    rejectButton.addEventListener("click", rejectCookies);
    customizeButton.addEventListener("click", customizeCookies);
 