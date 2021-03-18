const mask = (selector) => {

    // Установка курсора
    let setCursorPosition = (pos, elem) => {
        elem.focus();

        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos); //^ Устанавливаем курсор после +7
        } else if (elem.createTextRange) { //^ Ручной полифил
            let range = elem.createTextRange();

            range.collapse(true); //^ Объединяет граничные точки деапозона
            range.moveEnd('character', pos); //^ Конечная точка выделения
            range.moveStart('character', pos); //^ Начальная точка выделения 
            range.select(); //^ Устанавливаем курсор
        }
    };

    function createMask(event) {
        let matrix = '+7 (___) ___ __ __', //^ Создаём маску
            i = 0,
            def = matrix.replace(/\D/g, ''), //^ Статичная строка работает на основе matrix
            val = this.value.replace(/\D/g, ''); //^ Динамичная строка на основе ввода пользователя

        if (def.length >= val.length) { //^ Непозволяем удалять +7
            val = def;
        }

        this.value = matrix.replace(/./g, function (a) { //!
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
        });

        // Скрытие маски, если пользователь ничего не ввёл и установка курсора
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

export default mask;