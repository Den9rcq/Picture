const scrolling = (upSelector) => {
    const upElem = document.querySelector(upSelector);

    // Показываем и убираем элемент pageup
    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1650) {                                //^ Расстояние от вверха страницы
            upElem.classList.add('animated', 'fadeIn');
            upElem.classList.remove('fadeOut');
        } else {
            upElem.classList.add('fadeOut');
            upElem.classList.remove('fadeIn');
        }
    });


    // & Scrolling with raf (requestAnimationFrame)

    let links = document.querySelectorAll('[href^="#"]'),                               //^ ^- Ищем все ссылки которые начинаются с #
        speed = 0.2;                                                                    //^ Устанавливаем скорость (чем меньше цифра, тем больше скорость)

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();                                                     //^ Отменяем стандартное поведение браузера

            let widthTop = document.documentElement.scrollTop,                          //^ Значение сколько было отлистанно пользователем сверху
                hash = this.hash,                                                       //^ Получаем часть url с #
                toBlock = document.querySelector(hash).getBoundingClientRect().top,     //^ Верхняя граница эелемента к которому происходит скролл
                start = null;                                                           //^ Стартовая позиция

            requestAnimationFrame(step);


            function step(time) {
                // Проверяем первый ли раз запускается анимация
                if (start === null) {
                    start = time;
                }

                let progress = time - start,
                    // Количество пикселей на которое нам необходимо пролистать в течении этой анимации и в какую сторону
                    r = (toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock));

                document.documentElement.scrollTo(0, r);                                //^ Перемещаяемся к координатам (x, y)

                if (r != widthTop + toBlock) {
                    requestAnimationFrame(step);                                        //^ Выполняем анимацию (рекурсивно)
                } else {
                    location.hash = hash;                                               //^ Отключаем анимацию
                }
            }
        });
    });


    // & Pure js scrolling

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
export default scrolling;