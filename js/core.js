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

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()


document.addEventListener("DOMContentLoaded", function () {
  const videoButton = document.querySelector('.pulse');
  const videoContainer = document.getElementById('videoContainer');

  videoButton.addEventListener('click', function () {
    videoContainer.classList.remove('hidden');
    videoButton.classList.add('hidden');

  });
});


function openTab(evt, tabName) {
  let i, tabContent;
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}

const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    // удалим у кнопки класс btn-up_hide
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    // добавим к кнопке класс btn-up_hide
    this.el.classList.add('btn-up_hide');
  },
  addEventListener() {
    // при прокрутке содержимого страницы
    window.addEventListener('scroll', () => {
      // определяем величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
      scrollY > 400 ? this.show() : this.hide();
    });
    // при нажатии на кнопку .btn-up
    document.querySelector('.btn-up').onclick = () => {
      // переместим в начало страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector("#menu").cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
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
      // panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


(function (window) {
  'use strict';

  function classReg(className) {
    return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
  }
  var hasClass, addClass, removeClass;

  if ('classList' in document.documentElement) {
    hasClass = function (elem, c) {
      return elem.classList.contains(c);
    };
    addClass = function (elem, c) {
      elem.classList.add(c);
    };
    removeClass = function (elem, c) {
      elem.classList.remove(c);
    };
  } else {
    hasClass = function (elem, c) {
      return classReg(c).test(elem.className);
    };
    addClass = function (elem, c) {
      if (!hasClass(elem, c)) {
        elem.className = elem.className + ' ' + c;
      }
    };
    removeClass = function (elem, c) {
      elem.className = elem.className.replace(classReg(c), ' ');
    };
  }

  function toggleClass(elem, c) {
    var fn = hasClass(elem, c) ? removeClass : addClass;
    fn(elem, c);
  }
  var classie = {
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,
    has: hasClass,
    add: addClass,
    remove: removeClass,
    toggle: toggleClass
  };
  if (typeof define === 'function' && define.amd) {
    define(classie);
  } else {
    window.classie = classie;
  }
})(window);
var $ = function (selector) {
  return document.querySelector(selector);
}
var accordion = $('.accordion');
accordion.addEventListener("click", function (e) {
  e.stopPropagation();
  e.preventDefault();
  if (e.target && e.target.nodeName == "A") {
    var classes = e.target.className.split(" ");
    if (classes) {
      for (var x = 0; x < classes.length; x++) {
        if (classes[x] == "accordionTitle") {
          var title = e.target;
          var content = e.target.parentNode.nextElementSibling;
          classie.toggle(title, 'accordionTitleActive');
          if (classie.has(content, 'accordionItemCollapsed')) {
            if (classie.has(content, 'animateOut')) {
              classie.remove(content, 'animateOut');
            }
            classie.add(content, 'animateIn');
          } else {
            classie.remove(content, 'animateIn');
            classie.add(content, 'animateOut');
          }
          classie.toggle(content, 'accordionItemCollapsed');
        }
      }
    }
  }
});


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


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
          x = x + Math.ceil(counter[i].dataset.to / 50);
          counter[i].innerText = x;
          if (x > counter[i].dataset.to) {
            //Как только досчитали - стираем интервал.
            counter[i].innerText = counter[i].dataset.to;
            clearInterval(int);
          }
        }, 30);
      }
    }
  })
})();

function changeColor() {
  const card = document.querySelector('.flexible_card');
  card.classList.toggle('clicked');
}

function changeColor2() {
  const card = document.querySelector('.flexible_card_2');
  card.classList.toggle('clicked');
}

function changeColor3() {
  const card = document.querySelector('.flexible_card_3');
  card.classList.toggle('clicked');
}

let switch_button1 = document.getElementById('flexible_switch-button');
switch_button1.addEventListener('click', function () {
  this.classList.toggle('switch-active1')
})