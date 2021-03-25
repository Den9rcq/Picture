const pictureSize = (imgSelector) => {
    const blocks = document.querySelectorAll(imgSelector);

    // Показ картинки
    function showImg(block) {
        const img = block.querySelector('img');

        block.classList.add('animated', 'fadeIn');

        // ^  picture.png => picture-1.png
        img.src = img.src.slice(0, -4) + '-1.png';
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => { //^ p:not(.class) - Кроме этого класса
            p.style.display = 'none';
        });
    }

    // Скрытие картинки
    function hideImg(block) {
        const img = block.querySelector('img');

        block.classList.remove('animated', 'fadeIn');

        // ^  picture-1.png => picture.png
        img.src = img.src.slice(0, -6) + '.png';
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => { //^ p:not(.class) - Кроме этого класса
            p.style.display = 'block';
        });
    }


    blocks.forEach(block => {
        block.addEventListener('mouseover', () => showImg(block));
        block.addEventListener('mouseout', () => hideImg(block));
    });
};
export default pictureSize;