// ? Документация по D&D https://developer.mozilla.org/ru/docs/Web/API/HTML_Drag_and_Drop_API
// dragenter - объект над dropArea
// dragleave - объект за пределами dropArea
// dragover - объект зависает над dropArea
// drop - объект отправлен в dropArea

import { postData } from '../services/requests';

const drop = () => {
    const fileInputs = document.querySelectorAll('[name="upload"]');


    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefaults, false);
        });
    });

    function preventDefaults(e) {
        e.preventDefault();                                                 //^ Отменяем стандартное поведение браузера
        e.stopPropagation();                                                //^ Остановка всплытия      
    }

    function highlight(item) {
        item.closest('.file_upload').style.border = '1px solid yellow';     //^ closest - возвращает ближайший родительский элемент (или сам элемент)
        item.closest('.file_upload').style.backgroundColor = "rgba(100,100,100, .7)";
    }


    function unHighlight(item) {
        item.closest('.file_upload').style.border = 'none';                 //^ closest - возвращает ближайший родительский элемент (или сам элемент)
        item.closest('.file_upload').style.backgroundColor = '';            //^ Возвращаем старый бекграунд
    }


    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => highlight(input), false);
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unHighlight(input), false);
        });
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;                             //^ Берём файлы и засовываем в инпут на страницу

            // Отправка файла сразу на сервер
            if (input.getAttribute('data-upload') === 'end') {
                e.preventDefault();
                e.stopPropagation();
                let formData = new FormData();
                [...input.files].forEach(file => {
                    formData.append('image', file);
                    postData('assets/server.php', formData)
                        .then(res => {
                            console.log(res);
                        });
                });
            }

            let dots;
            const nameFile = input.files[0].name.split('.');
            //^ 'name-file.jpg' => ['name-file', 'jpg']
            nameFile[0].length > 5 ? dots = '...' : dots = '.';
            const name = nameFile[0].substring(0, 5) + dots + nameFile[1];
            input.previousElementSibling.textContent = name;
        });
    });
};
export default drop;