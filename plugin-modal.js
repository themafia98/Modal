

    let module = (function () {

        /* ------- begin view -------- */
    function ModalView() {

      let  _dataShow,
          _dataHide,
           modalSave = document.querySelector('.modal-save');

    this.init = function(data) {
        let supermodal = document.querySelector(`[data-supermodal= '${data}']`);
    this.show(data,supermodal);
    this.hide(data);
    }

    this.show = function (data,supermodal) {
        debugger;

        if (_dataShow !== undefined) {
            supermodal = document.querySelector(`[data-supermodal= '${_dataShow}']`);
        }


        let input = document.getElementsByTagName('input');
        if (input.length !== 0) {
            for (let i = 0;i < input.length; i++){
                input[i].value = '';
            }
        }

        if ( (supermodal.hasAttribute('data-supermodelTitle') === true)
        && (supermodal.hasAttribute('data-supermodalContent') === true)) {
            let title = supermodal.querySelector('h2');
            let ctx = supermodal.querySelector('main');
            let tittleCtx = supermodal.getAttribute('data-supermodelTitle');
            let Ctx = supermodal.getAttribute('data-supermodalContent');
            title.innerHTML = tittleCtx;
            ctx.innerHTML = `<p>${Ctx}<p>`;
        }


        if (_dataShow !== undefined) {
            modalSave.disabled = true;
            modalSave.style.opacity = '0.5';
            supermodal.children[0].classList.remove('modal_closed');
            supermodal.children[1].classList.remove('modal_closed');
            }

            else if (_dataShow === undefined) {
                _dataShow = data;
            }

    }

    this.hide = function (data) {
        let supermodal = document.querySelector(`[data-supermodal= '${_dataHide}']`);

        if (_dataHide !== undefined) {
                supermodal.children[0].classList.add('modal_closed');
                supermodal.children[1].classList.add('modal_closed');
            }
            else if(_dataHide === undefined) {
                _dataHide = data;
            }
    }


    };
/* -------- end view --------- */

/* ------- begin model ------- */

function ModalModel () {

    this.openModal = function(data) {
        appModalView.show(data);

    }
    this.closeModal = function(data) {
        appModalView.hide(data);
    }
}

/* -------- end model -------- */


/* ----- begin controller ---- */

function ModalController () {

    let modalCancel = document.querySelector('.modal-cancel');
    let modalClose = document.querySelector('.modal-close');
    let btn = document.querySelector('.modal-open');
    let modalSave = document.querySelector('.modal-save');


    this.init = function(data) { // получаем кнопки и вешаем обработчики
        let supermodal = document.querySelector(`[data-supermodal= '${data}']`);
        this.openModal(data,supermodal);
        this.hideModal(data,supermodal);
    }

    this.openModal = function (data,supermodal) {

        if (data  === 1) {
            btn.addEventListener('click', appModalModel.openModal);

            let input = supermodal.getElementsByTagName('input');
            for (let i = 0; i < input.length; i++) {
                input[i].addEventListener('blur', checkValues);
            }

        function checkValues() {
            input.every = [].every;
            if (input.every( (v, i) => {return input[i].value; } ) === true) {
                modalSave.disabled = false;
                modalSave.style.opacity = '1';
            }
        }
        } else {
                btn.addEventListener('click', appModalModel.openModal);
            }
    };

    this.hideModal = function (data,supermodal) {

        if (data === 1) {
            modalCancel.addEventListener('click', appModalModel.closeModal);
            modalClose.addEventListener('click', appModalModel.closeModal);
            modalSave.addEventListener('click', appModalModel.closeModal);
        } else {
            supermodal.children[1].addEventListener('click', appModalModel.closeModal);
        }
    }

};

    /* ------ end controller ----- */

    // глобальная инициализация
    const appModalView = new ModalView(),
        appModalModel = new ModalModel(),
        appModalController = new ModalController();

    //вызвать init-методы...
        return  {
            init: function(data) {
                if ( data === 1 ) {
                    data = 1;
                    appModalController.init(data);
                    appModalView.init(data);

                } else if ( data === 2 )  {
                    data = 2;
                    appModalController.init(data);
                    appModalView.init(data);
                } else if  ( data === 3 ) {
                    data = 3;
                    appModalController.init(data);
                    appModalView.init(data);
                }

            }
    };
    })();

    module.init(3);
