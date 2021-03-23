const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
        items = menu.querySelectorAll('li'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        markAll = wrapper.querySelectorAll('.all'),
        no = document.querySelector('.portfolio-no');


    // Добавление у скрытие элементов со страницы
    const typeFilter = (markType) => {

        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        });
        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        // Показ элементов с одним классом
        if (markType) {
            markType.forEach((mark) => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
        }
        // Показ сообщения, если элементов на странице нет
        if (markType.length == 0) {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
        console.log(markType.length);
    };


    menu.addEventListener('click', (e) => {
        if (e.target && e.target.tagName == 'LI') {
            // Удаление класса активности
            items.forEach(item => item.classList.remove('active'));
            // Добавление таргету класс активности
            e.target.classList.add('active');

            // Назначаем в переменную первый класс элемента (e.target.classList вызывает DOMTokenList)
            let classSelect = e.target.classList[0];
            // Указываем класс поиска элементов
            let allElems = wrapper.querySelectorAll(`.${classSelect}`);
            // Запускаем функцию с указаным классом
            typeFilter(allElems);
        }
    });
};

export default filter;