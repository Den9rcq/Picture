import { postData } from '../services/requests';

const forms = (state) => {
    const forms = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        upload = document.querySelectorAll('[name="upload"]'),
        message = {
            loading: 'Загрузка...',
            success: 'Спасибо! Скоро мы с вами свяжемся',
            failure: 'Что-то пошло не так...',
            spinner: 'assets/img/spinner.gif',
            ok: 'assets/img/ok.png',
            fail: 'assets/img/fail.png',
        },
        path = {
            designer: 'assets/server.php',
            question: 'assets/question.php'
        };


    // Функция очищения инпутов
    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
            upload.forEach(item => {
                item.previousElementSibling.textContent = 'Файл не выбран';
            });
        });
    };

    // Изменение имени файла и показ его на странице
    upload.forEach(item => {
        item.addEventListener('input', () => {
            console.log(item.files[0]);

            let dots;
            const nameFile = item.files[0].name.split('.');

            //^ 'name-file.jpg' => ['name-file', 'jpg']
            nameFile[0].length > 5 ? dots = '...' : dots = '.';

            const name = nameFile[0].substring(0, 5) + dots + nameFile[1];

            item.previousElementSibling.textContent = name;
        });
    });

    // Функция запрета ввода букв и пробелов в инпут для телефона
    // checkNumInputs('input[name="user_phone"]');

    // Создание оповещения пользователя при отправке формы и отмена перезагрузки страницы
    forms.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.parentNode.appendChild(statusMessage);

            item.classList.add('animated', 'fadeOutUp');
            setTimeout(() => {
                item.style.display = 'none';
            }, 400);

            // Добавляем спиннер к блоку statusMessage
            let statusImg = document.createElement('img');
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animated', 'fadeInUp');
            statusMessage.appendChild(statusImg);
            // Добавляем текст к блоку statusMessage
            let textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            statusMessage.appendChild(textMessage);

            const formData = new FormData(item);

            // Помещение данных к форме со сбором данных
            if (item.getAttribute('data-calc') === 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            let api;
            item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question;
            console.log(api);

            postData(api, formData)
                .then(res => {
                    console.log(res);
                    statusImg.setAttribute('src', message.ok);
                    textMessage.textContent = message.success;
                })
                .catch(() => {
                    statusImg.setAttribute('src', message.fail);
                    textMessage.textContent = message.failure;
                })
                .finally(() => {
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

export default forms;