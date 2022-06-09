window.customElements.define(`v7-navigation-drawer`, class swipe_menu extends HTMLElement {


    constructor() {
        super();


    }

    connectedCallback() {





        let e = this;
        let body = document.body
        e.style.zIndex = `calc(1000001*100)`
        e.style.position = `absolute`
        setTimeout(function() {

            let gravity = window.getComputedStyle(e).getPropertyValue(`--v7-align`).toLowerCase().trim();

            if (gravity == `left`) {

            }






        });




    }


    ///////**////////

    open() {
        let e = this;
        let body = document.body



    }


})