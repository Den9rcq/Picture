/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_chekTextInputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/chekTextInputs */ "./src/js/modules/chekTextInputs.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/mask */ "./src/js/modules/mask.js");
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");
/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/sliders */ "./src/js/modules/sliders.js");
/* harmony import */ var _modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/showMoreStyles */ "./src/js/modules/showMoreStyles.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ "./src/js/modules/calc.js");
/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/filter */ "./src/js/modules/filter.js");
/* harmony import */ var _modules_pictureSize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/pictureSize */ "./src/js/modules/pictureSize.js");
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/accordion */ "./src/js/modules/accordion.js");
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/burger */ "./src/js/modules/burger.js");
/* harmony import */ var _modules_scrolling__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/scrolling */ "./src/js/modules/scrolling.js");












window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  let modalState = {};
  Object(_modules_modals__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_modules_sliders__WEBPACK_IMPORTED_MODULE_4__["default"])('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
  Object(_modules_sliders__WEBPACK_IMPORTED_MODULE_4__["default"])('.main-slider-item', 'vertical');
  Object(_modules_forms__WEBPACK_IMPORTED_MODULE_1__["default"])(modalState);
  Object(_modules_mask__WEBPACK_IMPORTED_MODULE_2__["default"])('[name="phone"]');
  Object(_modules_chekTextInputs__WEBPACK_IMPORTED_MODULE_0__["default"])('[name="name"]');
  Object(_modules_chekTextInputs__WEBPACK_IMPORTED_MODULE_0__["default"])('[name="message"]');
  Object(_modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_5__["default"])('.button-styles', '#styles .row');
  Object(_modules_calc__WEBPACK_IMPORTED_MODULE_6__["default"])('#size', '#material', '#options', '.promocode', '.calc-price', modalState);
  Object(_modules_filter__WEBPACK_IMPORTED_MODULE_7__["default"])();
  Object(_modules_pictureSize__WEBPACK_IMPORTED_MODULE_8__["default"])('.sizes-block');
  Object(_modules_accordion__WEBPACK_IMPORTED_MODULE_9__["default"])('.accordion-heading');
  Object(_modules_burger__WEBPACK_IMPORTED_MODULE_10__["default"])('.burger-menu', '.burger');
  Object(_modules_scrolling__WEBPACK_IMPORTED_MODULE_11__["default"])('.pageup');
});

/***/ }),

/***/ "./src/js/modules/accordion.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordion.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const accordion = triggersSelector => {
  const btns = document.querySelectorAll(triggersSelector); // ~ JS

  btns.forEach(btn => {
    btn.addEventListener('click', function () {
      if (!this.classList.contains('active-style')) {
        btns.forEach(btn => {
          btn.classList.remove('active-style');
          btn.nextElementSibling.classList.remove('active-content');
          btn.nextElementSibling.style.maxHeight = "0px";
        });
      }

      this.classList.toggle('active-style');
      this.nextElementSibling.classList.toggle('active-content');

      if (this.classList.contains('active-style')) {
        this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
      } else {
        this.nextElementSibling.style.maxHeight = '0px';
      }
    });
  }); //     // ~ CSS Style
  //         blocks = document.querySelectorAll(itemsSelector);
  //     blocks.forEach(block => {
  //         block.classList.add('animated', 'fadeInDown');
  //     });
  //     btns.forEach(btn => {
  //         btn.addEventListener('click', function () {
  //             if (!this.classList.contains('active')) {
  //                 btns.forEach(btn => {
  //                     btn.classList.remove('active', 'active-style');
  //                 });
  //                 this.classList.add('active', 'active-style');
  //             } else {
  //                 this.classList.remove('active', 'active-style');
  //             }
  //         });
  //     });
};

/* harmony default export */ __webpack_exports__["default"] = (accordion);

/***/ }),

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const burger = (menuSelector, burgerSelector) => {
  const menuElem = document.querySelector(menuSelector),
        burgerElem = document.querySelector(burgerSelector);
  menuElem.style.display = 'none';
  burgerElem.addEventListener('click', () => {
    if (menuElem.style.display == 'none' && window.screen.availWidth < 993) {
      menuElem.style.display = "block";
    } else {
      menuElem.style.display = 'none';
    }
  });
  window.addEventListener('resize', () => {
    //^ resize - изменение экрана
    if (window.screen.availWidth > 992) {
      menuElem.style.display = 'none';
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (burger);

/***/ }),

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const calc = (size, material, options, promocode, result, state) => {
  const sizeBlock = document.querySelector(size),
        materialBlock = document.querySelector(material),
        optionsBlock = document.querySelector(options),
        promocodeBlock = document.querySelector(promocode),
        resultBlock = document.querySelector(result);
  let sum = 0;

  function calcFunc() {
    sum = Math.round(+sizeBlock.value * +materialBlock.value + +optionsBlock.value);

    if (sizeBlock.value === '' || materialBlock.value === '') {
      resultBlock.textContent = 'Выберите размер и материал картины';
    } else if (promocodeBlock.value === 'IWANTPOPART') {
      resultBlock.textContent = Math.round(sum * 0.7) + 'руб';
      sum = Math.round(sum * 0.7);
    } else {
      resultBlock.textContent = sum + 'руб';
    } // Сбор данных с формы


    state.size = sizeBlock.value;
    state.material = materialBlock.value;
    state.options = optionsBlock.value;
    state.promocode = promocodeBlock.value;
    state.result = sum;
    console.log(state);
  }

  sizeBlock.addEventListener('change', calcFunc);
  materialBlock.addEventListener('change', calcFunc);
  optionsBlock.addEventListener('change', calcFunc);
  promocodeBlock.addEventListener('input', calcFunc);
};

/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./src/js/modules/chekTextInputs.js":
/*!******************************************!*\
  !*** ./src/js/modules/chekTextInputs.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const chekTextInputs = selector => {
  const txtInputs = document.querySelectorAll(selector);
  txtInputs.forEach(input => {
    input.addEventListener('keypress', function (e) {
      if (e.key.match(/[^а-яё 0-9]/ig)) {
        e.preventDefault();
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (chekTextInputs);

/***/ }),

/***/ "./src/js/modules/filter.js":
/*!**********************************!*\
  !*** ./src/js/modules/filter.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const filter = () => {
  const menu = document.querySelector('.portfolio-menu'),
        items = menu.querySelectorAll('li'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        markAll = wrapper.querySelectorAll('.all'),
        no = document.querySelector('.portfolio-no'); // Добавление у скрытие элементов со страницы

  const typeFilter = markType => {
    markAll.forEach(mark => {
      mark.style.display = 'none';
      mark.classList.remove('animated', 'fadeIn');
    });
    no.style.display = 'none';
    no.classList.remove('animated', 'fadeIn'); // Показ элементов с одним классом

    if (markType) {
      markType.forEach(mark => {
        mark.style.display = 'block';
        mark.classList.add('animated', 'fadeIn');
      });
    } // Показ сообщения, если элементов на странице нет


    if (markType.length == 0) {
      no.style.display = 'block';
      no.classList.add('animated', 'fadeIn');
    }

    console.log(markType.length);
  };

  menu.addEventListener('click', e => {
    if (e.target && e.target.tagName == 'LI') {
      // Удаление класса активности
      items.forEach(item => item.classList.remove('active')); // Добавление таргету класс активности

      e.target.classList.add('active'); // Назначаем в переменную первый класс элемента (e.target.classList вызывает DOMTokenList)

      let classSelect = e.target.classList[0]; // Указываем класс поиска элементов

      let allElems = wrapper.querySelectorAll(`.${classSelect}`); // Запускаем функцию с указаным классом

      typeFilter(allElems);
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (filter);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");


const forms = state => {
  const forms = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        upload = document.querySelectorAll('[name="upload"]'),
        message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...',
    spinner: 'assets/img/spinner.gif',
    ok: 'assets/img/ok.png',
    fail: 'assets/img/fail.png'
  },
        path = {
    designer: 'assets/server.php',
    question: 'assets/question.php'
  }; // Функция очищения инпутов

  const clearInputs = () => {
    inputs.forEach(item => {
      item.value = '';
      upload.forEach(item => {
        item.previousElementSibling.textContent = 'Файл не выбран';
      });
    });
  }; // Изменение имени файла и показ его на странице


  upload.forEach(item => {
    item.addEventListener('input', () => {
      console.log(item.files[0]);
      let dots;
      const nameFile = item.files[0].name.split('.'); //^ 'name-file.jpg' => ['name-file', 'jpg']

      nameFile[0].length > 5 ? dots = '...' : dots = '.';
      const name = nameFile[0].substring(0, 5) + dots + nameFile[1];
      item.previousElementSibling.textContent = name;
    });
  }); // Функция запрета ввода букв и пробелов в инпут для телефона
  // checkNumInputs('input[name="user_phone"]');
  // Создание оповещения пользователя при отправке формы и отмена перезагрузки страницы

  forms.forEach(item => {
    item.addEventListener('submit', e => {
      e.preventDefault();
      const statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.parentNode.appendChild(statusMessage);
      item.classList.add('animated', 'fadeOutUp');
      setTimeout(() => {
        item.style.display = 'none';
      }, 400); // Добавляем спиннер к блоку statusMessage

      let statusImg = document.createElement('img');
      statusImg.setAttribute('src', message.spinner);
      statusImg.classList.add('animated', 'fadeInUp');
      statusMessage.appendChild(statusImg); // Добавляем текст к блоку statusMessage

      let textMessage = document.createElement('div');
      textMessage.textContent = message.loading;
      statusMessage.appendChild(textMessage);
      const formData = new FormData(item); // Помещение данных к форме со сбором данных

      if (item.getAttribute('data-calc') === 'end') {
        for (let key in state) {
          formData.append(key, state[key]);
        }
      }

      let api;
      item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question;
      console.log(api);
      Object(_services_requests__WEBPACK_IMPORTED_MODULE_0__["postData"])(api, formData).then(res => {
        console.log(res);
        statusImg.setAttribute('src', message.ok);
        textMessage.textContent = message.success;
      }).catch(() => {
        statusImg.setAttribute('src', message.fail);
        textMessage.textContent = message.failure;
      }).finally(() => {
        // item.reset(); //^ Очистка формы
        clearInputs(); //^ Очистка формы

        setTimeout(() => {
          statusMessage.remove();
          item.style.display = 'block';
          item.classList.remove('fadeOutUp');
          item.classList.add('fadeInUp');
        }, 6000);
      });
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/modules/mask.js":
/*!********************************!*\
  !*** ./src/js/modules/mask.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const mask = selector => {
  // Установка курсора
  let setCursorPosition = (pos, elem) => {
    elem.focus();

    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos); //^ Устанавливаем курсор после +7
    } else if (elem.createTextRange) {
      //^ Ручной полифил
      let range = elem.createTextRange();
      range.collapse(true); //^ Объединяет граничные точки деапозона

      range.moveEnd('character', pos); //^ Конечная точка выделения

      range.moveStart('character', pos); //^ Начальная точка выделения 

      range.select(); //^ Устанавливаем курсор
    }
  };

  function createMask(event) {
    let matrix = '+7 (___) ___ __ __',
        //^ Создаём маску
    i = 0,
        def = matrix.replace(/\D/g, ''),
        //^ Статичная строка работает на основе matrix
    val = this.value.replace(/\D/g, ''); //^ Динамичная строка на основе ввода пользователя

    if (def.length >= val.length) {
      //^ Непозволяем удалять +7
      val = def;
    }

    this.value = matrix.replace(/./g, function (a) {
      //!
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    }); // Скрытие маски, если пользователь ничего не ввёл и установка курсора

    if (event.type === 'blur') {
      if (this.value.length == 2) {
        this.value = '';
      }
    } else {
      setCursorPosition(this.value.length, this);
    }
  }

  let inputs = document.querySelectorAll(selector);
  inputs.forEach(input => {
    input.addEventListener('input', createMask);
    input.addEventListener('focus', createMask);
    input.addEventListener('blur', createMask);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (mask);

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const modals = () => {
  let btnPressed;

  function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
    const trigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closeSelector),
          widows = document.querySelectorAll('[data-modal]'),
          scroll = calcScroll(); // Показ модального окна

    trigger.forEach(item => {
      item.addEventListener('click', e => {
        if (e.target) {
          e.preventDefault();
        } // Фиксируем нажатие


        btnPressed = true; // Удаление триггера со страницы

        if (destroy) {
          item.remove();
        } // Скрываем не активные pop-up


        widows.forEach(item => {
          item.style.display = 'none';
          item.classList.add('animated', 'fadeIn'); //^ Добавляем классы анимации ко всем модальным окнам с атрибутом [data-modal]
        });
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;
      });
    }); // Закрытие модального окна на крестик

    close.addEventListener('click', () => {
      modal.style.display = 'none';
      document.body.style.overflow = '';
      document.body.style.marginRight = `0px`;
    }); // Закрытие модального окна на подложку и крестик

    modal.addEventListener('click', e => {
      if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`; // Закрытие всех pop-up сразу

        widows.forEach(item => {
          item.style.display = 'none';
        });
      }
    });
  } // Вызов модального окна через время


  function showModalByTime(selector, time) {
    setTimeout(() => {
      document.querySelector(selector).style.display = 'block';
      document.body.style.overflow = 'hidden';
    }, time);
  }

  function calcScroll() {
    // Создаём элемент
    let div = document.createElement('div'); // Добавляем ему стили

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden'; // Добавляем элемент на страницу

    document.body.appendChild(div); // Вычесляем размер скролла

    let scrollWidth = div.offsetWidth - div.clientWidth; // Удаляем эелемент

    div.remove(); // Возвращаем ширину скролла

    return scrollWidth;
  } // Функция отслеживания скролла до конца страницы


  function openByScroll(selector) {
    window.addEventListener('scroll', () => {
      let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight); //^ Оптимизация для старых браузеров (document.body.scrollHeight)

      if (!btnPressed && window.pageYOffset + document.documentElement.clientHeight >= scrollHeight) {
        document.querySelector(selector).click(); //^ Если условие выполняется кликаем программно на селектор
      }
    });
  }

  bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
  bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
  bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
  openByScroll('.fixed-gift');
};

/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./src/js/modules/pictureSize.js":
/*!***************************************!*\
  !*** ./src/js/modules/pictureSize.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const pictureSize = imgSelector => {
  const blocks = document.querySelectorAll(imgSelector); // Показ картинки

  function showImg(block) {
    const img = block.querySelector('img');
    block.classList.add('animated', 'fadeIn'); // ^  picture.png => picture-1.png

    img.src = img.src.slice(0, -4) + '-1.png';
    block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
      //^ p:not(.class) - Кроме этого класса
      p.style.display = 'none';
    });
  } // Скрытие картинки


  function hideImg(block) {
    const img = block.querySelector('img');
    block.classList.remove('animated', 'fadeIn'); // ^  picture-1.png => picture.png

    img.src = img.src.slice(0, -6) + '.png';
    block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
      //^ p:not(.class) - Кроме этого класса
      p.style.display = 'block';
    });
  }

  blocks.forEach(block => {
    block.addEventListener('mouseover', () => showImg(block));
    block.addEventListener('mouseout', () => hideImg(block));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (pictureSize);

/***/ }),

/***/ "./src/js/modules/scrolling.js":
/*!*************************************!*\
  !*** ./src/js/modules/scrolling.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const scrolling = upSelector => {
  const upElem = document.querySelector(upSelector); // Показываем и убираем элемент pageup

  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 1650) {
      //^ Расстояние от вверха страницы
      upElem.classList.add('animated', 'fadeIn');
      upElem.classList.remove('fadeOut');
    } else {
      upElem.classList.add('fadeOut');
      upElem.classList.remove('fadeIn');
    }
  }); // & Scrolling with raf (requestAnimationFrame)

  let links = document.querySelectorAll('[href^="#"]'),
      //^ ^- Ищем все ссылки которые начинаются с #
  speed = 0.2; //^ Устанавливаем скорость (чем меньше цифра, тем больше скорость)

  links.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault(); //^ Отменяем стандартное поведение браузера

      let widthTop = document.documentElement.scrollTop,
          //^ Значение сколько было отлистанно пользователем сверху
      hash = this.hash,
          //^ Получаем часть url с #
      toBlock = document.querySelector(hash).getBoundingClientRect().top,
          //^ Верхняя граница эелемента к которому происходит скролл
      start = null; //^ Стартовая позиция

      requestAnimationFrame(step);

      function step(time) {
        // Проверяем первый ли раз запускается анимация
        if (start === null) {
          start = time;
        }

        let progress = time - start,
            // Количество пикселей на которое нам необходимо пролистать в течении этой анимации и в какую сторону
        r = toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock);
        document.documentElement.scrollTo(0, r); //^ Перемещаяемся к координатам (x, y)

        if (r != widthTop + toBlock) {
          requestAnimationFrame(step); //^ Выполняем анимацию (рекурсивно)
        } else {
          location.hash = hash; //^ Отключаем анимацию
        }
      }
    });
  }); // & Pure js scrolling
  // const element = document.documentElement,
  //       body = document.body;
  // const calcScroll = () => {
  //     upElem.addEventListener('click', function(event) {
  //         let scrollTop = Math.round(body.scrollTop || element.scrollTop); //^ Значение сколько было отлистанно пользователем сверху
  //         if (this.hash !== '') {                                          //^ hash - #up
  //             event.preventDefault();                                      //^ Отменяем стандартное поведение браузера
  //             let hashElement = document.querySelector(this.hash),         //^ Получаем элемент к которому мы будем скролить страницу
  //                 hashElementTop = 0;                                      //^ Сколько пролистать пикселей до родителя хеш элемента
  //             while (hashElement.offsetParent) {                           //^ offsetParent - ближайший родитель элемента (hashElement)
  //                 hashElementTop += hashElement.offsetTop;                 //^ offsetTop - Вычесляет сколько пикселей осталось до верхней границы родительского элемента(hashElement)
  //                 hashElement = hashElement.offsetParent;                  //^ Перебираем родителей
  //             }
  //             hashElementTop = Math.round(hashElementTop);                 //^ Округяем пиксили
  //             smoothScroll(scrollTop, hashElementTop, this.hash);
  //         }
  //     });
  // };
  // const smoothScroll = (from, to, hash) => {                               //^ Откуда, куда, элемент
  //     let timeInterval = 1,                                                            
  //         prevScrollTop,
  //         speed;
  //     // Устанавливаем направление
  //     if (to > from) {
  //         speed = 30;
  //     } else {
  //         speed = -30;
  //     }
  // let move = setInterval(function() {
  //     let scrollTop = Math.round(body.scrollTop || element.scrollTop);
  //     if (
  //         prevScrollTop === scrollTop ||                               
  //         (to > from && scrollTop >= to) ||
  //         (to < from && scrollTop <= to)
  //     ) {
  //         clearInterval(move);                                         //^ Останавливаем анимацию
  //         history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash); //^ Устанавливаем строку в браузере
  //     } else {
  //         body.scrollTop += speed;                                     //^ Двигаем страницу
  //         element.scrollTop += speed;                                  //^ Двигаем страницу
  //         prevScrollTop = scrollTop;                                   //^ Сколько осталось до конца скролла
  //     }
  // }, timeInterval);                                                    //^ Запускаем срабатывание анимации
  // };
  // calcScroll();
};

/* harmony default export */ __webpack_exports__["default"] = (scrolling);

/***/ }),

/***/ "./src/js/modules/showMoreStyles.js":
/*!******************************************!*\
  !*** ./src/js/modules/showMoreStyles.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");


const showMoreStyles = (trigger, wrapper) => {
  const btn = document.querySelector(trigger); // ^ Из вёрстки
  // cards.forEach(item => {
  //     item.classList.add('animated', 'fadeInUp');
  // });
  // btn.addEventListener('click', () => {
  //     cards.forEach(item => {
  //         item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
  //         item.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
  //     });
  //     btn.remove();
  // });
  // ^ С json сервера

  btn.addEventListener('click', () => {
    Object(_services_requests__WEBPACK_IMPORTED_MODULE_0__["getResource"])('assets/db.json') //?  http://localhost:3000/styles
    .then(res => createCards(res.styles)) //? res
    .cathch(error => console.log(error));
  });

  function createCards(response) {
    response.forEach(item => {
      let card = document.createElement('div');
      card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
      card.innerHTML = `
                <div class=styles-block>
                    <img src=${item.src} alt=styles>
                    <h4>${item.title}</h4>
                    <a href="${item.link}">Подробнее</a>
                </div>
            `;
      document.querySelector(wrapper).appendChild(card);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (showMoreStyles);

/***/ }),

/***/ "./src/js/modules/sliders.js":
/*!***********************************!*\
  !*** ./src/js/modules/sliders.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const sliders = (slides, dir, prev, next) => {
  let slideIndex = 1;
  const items = document.querySelectorAll(slides);
  let paused; // Показываем слайд

  function showSlides(n) {
    if (n > items.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = items.length;
    }

    items.forEach(item => {
      item.classList.add('animated');
      item.style.display = 'none';
    });
    items[slideIndex - 1].style.display = 'block';
  }

  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  try {
    const prevBtn = document.querySelector(prev),
          nextBtn = document.querySelector(next);
    prevBtn.addEventListener('click', () => {
      plusSlides(-1);
      items[slideIndex - 1].classList.remove('slideInLeft');
      items[slideIndex - 1].classList.add('slideInRight');
    });
    nextBtn.addEventListener('click', () => {
      plusSlides(1);
      items[slideIndex - 1].classList.remove('slideInRight');
      items[slideIndex - 1].classList.add('slideInLeft');
    });
  } catch (e) {} // Автоматическая прокрутка слайдеров


  function activateAnimation() {
    if (dir === 'vertical') {
      paused = setInterval(function () {
        plusSlides(1);
        items[slideIndex - 1].classList.add('slideInDown');
      }, 3000);
    } else {
      paused = setInterval(function () {
        plusSlides(1);
        items[slideIndex - 1].classList.remove('slideInRight');
        items[slideIndex - 1].classList.add('slideInLeft');
      }, 3000);
    }
  }

  activateAnimation(); // Остановка прокрутки при наведении курсора

  items[0].parentNode.addEventListener('mouseenter', () => {
    clearInterval(paused);
  });
  items[0].parentNode.addEventListener('mouseleave', () => {
    activateAnimation();
  });
};

/* harmony default export */ __webpack_exports__["default"] = (sliders);

/***/ }),

/***/ "./src/js/services/requests.js":
/*!*************************************!*\
  !*** ./src/js/services/requests.js ***!
  \*************************************/
/*! exports provided: postData, getResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResource", function() { return getResource; });
// Функция отправки данных на сервера
const postData = async (url, data) => {
  const res = await fetch(url, {
    method: "POST",
    body: data
  });
  return await res.text();
}; // Функция получение данных с сервера


const getResource = async url => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  return await res.json();
};



/***/ })

/******/ });
//# sourceMappingURL=script.js.map