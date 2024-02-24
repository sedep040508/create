
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
    }
    else {
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
        if (limit == counter.length) { return; }

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