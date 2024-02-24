document.onmousemove = (e) => {
  document.onclick = () => {
    let circle = document.createElement('div');
    circle.classList.add('click');
    circle.style.left = e.pageX + 'px';
    circle.style.top = e.pageY + 'px';
    document.body.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 1000);
  };
};
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');

function goToSlide(slideIndex) {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(-${100 * slideIndex}%)`;
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }

  });
}
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    goToSlide(index);
    currentSlide = index;
    updateIndicators();
  });
});

function updateIndicators() {
  indicators.forEach((indicator, index) => {
    indicator.classList.remove('active');
    if (index === currentSlide) {
      indicator.classList.add('active');
    }
  });
}



(() => {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    }, false)
  })
})()


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

//uses classList, setAttribute, and querySelectorAll
//if you want this to work in IE8/9 youll need to polyfill these
// (function () {
//   var d = document,
//     accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
//     setAria,
//     setAccordionAria,
//     switchAccordion,
//     touchSupported = ('ontouchstart' in window),
//     pointerSupported = ('pointerdown' in window);

//   skipClickDelay = function (e) {
//     e.preventDefault();
//     e.target.click();
//   }

//   setAriaAttr = function (el, ariaType, newProperty) {
//     el.setAttribute(ariaType, newProperty);
//   };
//   setAccordionAria = function (el1, el2, expanded) {
//     switch (expanded) {
//       case "true":
//         setAriaAttr(el1, 'aria-expanded', 'true');
//         setAriaAttr(el2, 'aria-hidden', 'false');
//         break;
//       case "false":
//         setAriaAttr(el1, 'aria-expanded', 'false');
//         setAriaAttr(el2, 'aria-hidden', 'true');
//         break;
//       default:
//         break;
//     }
//   };
//   //function
//   switchAccordion = function (e) {
//     console.log("triggered");
//     e.preventDefault();
//     var thisAnswer = e.target.parentNode.nextElementSibling;
//     var thisQuestion = e.target;
//     if (thisAnswer.classList.contains('is-collapsed')) {
//       setAccordionAria(thisQuestion, thisAnswer, 'true');
//     } else {
//       setAccordionAria(thisQuestion, thisAnswer, 'false');
//     }
//     thisQuestion.classList.toggle('is-collapsed');
//     thisQuestion.classList.toggle('is-expanded');
//     thisAnswer.classList.toggle('is-collapsed');
//     thisAnswer.classList.toggle('is-expanded');

//     thisAnswer.classList.toggle('animateIn');
//   };
//   for (var i = 0, len = accordionToggles.length; i < len; i++) {
//     if (touchSupported) {
//       accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
//     }
//     if (pointerSupported) {
//       accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
//     }
//     accordionToggles[i].addEventListener('click', switchAccordion, false);
//   }
// })(); >>>
// >>> > 006 db1d2b8ae7b26e5814e0b6f7ac08e8ab80066


(function () {

  let counter = document.querySelectorAll('.counter');
  let limit = 0; // Переменная, чтобы останавливать функцию, когда всё запустится.
  window.addEventListener('scroll', function () {
    if (limit == counter.length) {
      return;
    }

    for (let i = 0; i < counter.length; i++) {
      let pos = counter[i].getBoundingClientRect().top; //Позиция блока, считая сверху окна
      let win = window.innerHeight - 40; // На 40 пикселей меньше, чем высота окна
      if (pos < win && counter[i].dataset.stop === "0") {
        counter[i].dataset.stop = 1; // Останавливаем перезапуск счета в этом блоке
        let x = 0;
        limit++; // Счетчик будет запущен, увеличиваем переменную на 1
        let int = setInterval(function () {
          // Раз в 60 миллисекунд будет прибавляться 50-я часть нужного числа
          x = x + Math.ceil(counter[i].dataset.to / 20);
          counter[i].innerText = x;
          if (x > counter[i].dataset.to) {
            //Как только досчитали - стираем интервал.
            counter[i].innerText = counter[i].dataset.to;
            clearInterval(int);
          }
        }, 60);
      }
    }
  });

})();

document.addEventListener("DOMContentLoaded", function() {
  const videoButton = document.querySelector('.pulse');
  const videoContainer = document.getElementById('videoContainer');

  videoButton.addEventListener('click', function() {
    videoContainer.classList.remove('hidden');
    videoButton.classList.add('hidden');
    
  });
});


 