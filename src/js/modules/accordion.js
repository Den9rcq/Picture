const accordion = (triggersSelector) => {
    const btns = document.querySelectorAll(triggersSelector);
    // ~ JS
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

            if (this.classList.contains('active-style')) {
                this.nextElementSibling.classList.add('active-content');
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
            } else {
                this.nextElementSibling.classList.remove('active-content');
                this.nextElementSibling.style.maxHeight = '0px';
            }
        });
    });





    // ~ CSS Style
    //     blocks = document.querySelectorAll(itemsSelector);

    // blocks.forEach(block => {
    //     block.classList.add('animated', 'fadeInDown');
    // });

    // btns.forEach(btn => {
    //     btn.addEventListener('click', function () {
    //         if (!this.classList.contains('active')) {
    //             btns.forEach(btn => {
    //                 btn.classList.remove('active', 'active-style');
    //             });
    //             this.classList.add('active', 'active-style');
    //         }
    //     });
    // });

};
export default accordion;