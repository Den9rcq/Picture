const modals = () => {

    let btnPressed;

    function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            widows = document.querySelectorAll('[data-modal]'),
            scroll = calcScroll();

        // Показ модального окна
        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                // Фиксируем нажатие
                btnPressed = true;

                // Удаление триггера со страницы
                if (destroy) {
                    item.remove();
                }

                // Скрываем не активные pop-up
                widows.forEach(item => {
                    item.style.display = 'none';
                    item.classList.add('animated', 'fadeIn'); //^ Добавляем классы анимации ко всем модальным окнам с атрибутом [data-modal]
                });

                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
            });
        });

        // Закрытие модального окна на крестик
        close.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        });

        // Закрытие модального окна на подложку и крестик
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;


                // Закрытие всех pop-up сразу
                widows.forEach(item => {
                    item.style.display = 'none';
                });
            }
        });
    }

    // Вызов модального окна через время
    function showModalByTime(selector, time) {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    }


    function calcScroll() {
        // Создаём элемент
        let div = document.createElement('div');

        // Добавляем ему стили
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        // Добавляем элемент на страницу
        document.body.appendChild(div);

        // Вычесляем размер скролла
        let scrollWidth = div.offsetWidth - div.clientWidth;

        // Удаляем эелемент
        div.remove();

        // Возвращаем ширину скролла
        return scrollWidth;
    }

    // Функция отслеживания скролла до конца страницы
    function openByScroll(selector) {
        window.addEventListener('scroll', () => {
            let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight); //^ Оптимизация для старых браузеров (document.body.scrollHeight)

            if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= scrollHeight)) {
                document.querySelector(selector).click(); //^ Если условие выполняется кликаем программно на селектор
            }
        });
    }

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
    openByScroll('.fixed-gift');

};
export default modals;