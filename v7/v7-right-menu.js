window.customElements.define(`v7-right-menu`, class swipe_menu_rihgt extends HTMLElement {


    constructor() {
        super();


    }

    connectedCallback() {
        let e = this;
        let body = e.parentElement
        body.style.position = "absolute"
        e.style.zIndex = `calc(1000001*100)`
        e.style.position = `absolute`

        setTimeout(function() {
            window.addEventListener("touchmove", slider_move, { passive: false });
            window.addEventListener("touchstart", slider_start, { passive: false });
            window.addEventListener("touchend", slider_end, { passive: false });
            window.addEventListener("click", () => {
                event.preventDefault()
            }, { passive: false });
            /****/
            /* Inicio de gravity left */

            e.style.right = `-${(e.clientWidth * 100 / body.clientWidth)}%`


            let background = document.createElement(`div`);
            background.style =
                `
         position:absolute;
         width:100%;height:100%;
         left:0px;top:0px; display:none;
         background:none;z.index:calc(1000000*100);
         `
            body.appendChild(background)

            /**/


            /**/

            let start = { x: 0, y: 0 }
            let speed = 0;
            let lastX = 0;
            let direction = `+`
            let isOpen = false;

            let detener_animacion = false;
            let move_menu = false;

            function slider_start() {
                lastX = event.touches[0].clientX;

                start.x = event.touches[0].clientX - e.offsetLeft;
                detener_animacion = true;

                if (event.touches[0].clientX > body.clientWidth - 10) {
                    move_menu = true
                } else {

                }


            }



            function slider_move() {
                event.preventDefault();
                if (move_menu) {
                    background.style.display = `block`
                    speed = ((Math.sqrt(Math.pow(Math.abs(event.touches[0].clientX - lastX), 2))))



                    let left = (event.touches[0].clientX - start.x)

                    let alpha = ((-((left - body.clientWidth)) / 255 * 255) / 255) / 2;

                    background.style.background = `rgba(0,0,0,${Math.min(alpha,0.5)})`

                    e.style.left = (Math.max(body.clientWidth - e.clientWidth, Math.min(left, body.clientWidth))) + `px`

                    if (event.touches[0].clientX > lastX) {
                        direction = true;
                    } else {
                        direction = false;
                    }

                    lastX = event.touches[0].clientX;

                    isOpen = true;
                } else {
                    return;
                }

            }

            let i = 0;
            let speed_ajus = 10

            function slider_end() {
                detener_animacion = false
                if (isOpen) {
                    isOpen = false;
                    if (Math.floor(speed) == 0) {

                        if ((e.offsetLeft) < body.clientWidth - (e.clientWidth / 2)) {

                            i = e.offsetLeft;

                            function callback() {
                                i -= speed_ajus
                                e.style.left = (Math.max(body.clientWidth - e.clientWidth, Math.min(i, body.clientWidth))) + `px`
                                let alpha = ((-((i - body.clientWidth)) / 255 * 255) / 255) / 2;
                                background.style.background = `rgba(0,0,0,${Math.min(alpha,0.5)})`
                                if (body.clientWidth - e.clientWidth == Math.max(body.clientWidth - e.clientWidth, Math.min(i, body.clientWidth))) {
                                    e.style.left = (body.clientWidth - e.clientWidth) + `px`

                                } else {
                                    if (detener_animacion) {

                                    } else {
                                        window.requestAnimationFrame(callback)
                                    }
                                }
                            }
                            window.requestAnimationFrame(callback)

                        } else {

                            i = e.offsetLeft;

                            function callback() {
                                i += speed_ajus
                                e.style.left = (Math.max(body.clientWidth - e.clientWidth, Math.min(i, body.clientWidth))) + `px`
                                let alpha = ((-((i - body.clientWidth)) / 255 * 255) / 255) / 2;
                                background.style.background = `rgba(0,0,0,${Math.min(alpha,0.5)})`
                                if (body.clientWidth == Math.max(body.clientWidth - e.clientWidth, Math.min(i, body.clientWidth))) {
                                    e.style.left = (body.clientWidth) + `px`
                                    background.style.display = "none"
                                    move_menu = false
                                } else {
                                    if (detener_animacion) {

                                    } else {
                                        window.requestAnimationFrame(callback)
                                    }
                                }
                            }
                            window.requestAnimationFrame(callback)

                        }

                    } else {

                        if (speed < speed_ajus) {
                            speed = speed_ajus
                        }

                        if (!direction) {

                            i = e.offsetLeft;

                            function callback() {
                                i -= speed
                                e.style.left = (Math.max(body.clientWidth - e.clientWidth, Math.min(i, body.clientWidth))) + `px`
                                let alpha = ((-((i - body.clientWidth)) / 255 * 255) / 255) / 2;
                                background.style.background = `rgba(0,0,0,${Math.min(alpha,0.5)})`
                                if (body.clientWidth - e.clientWidth == Math.max(body.clientWidth - e.clientWidth, Math.min(i, body.clientWidth))) {
                                    e.style.left = (body.clientWidth - e.clientWidth) + `px`

                                } else {
                                    if (detener_animacion) {

                                    } else {
                                        window.requestAnimationFrame(callback)
                                    }
                                }
                            }
                            window.requestAnimationFrame(callback)

                        } else {

                            i = e.offsetLeft;

                            function callback() {
                                i += speed
                                e.style.left = (Math.max(body.clientWidth - e.clientWidth, Math.min(i, body.clientWidth))) + `px`
                                let alpha = ((-((i - body.clientWidth)) / 255 * 255) / 255) / 2;
                                background.style.background = `rgba(0,0,0,${Math.min(alpha,0.5)})`
                                if (body.clientWidth == Math.max(body.clientWidth - e.clientWidth, Math.min(i, body.clientWidth))) {
                                    e.style.left = (body.clientWidth) + `px`
                                    background.style.display = "none"
                                    move_menu = false
                                } else {
                                    if (detener_animacion) {

                                    } else {
                                        window.requestAnimationFrame(callback)
                                    }
                                }
                            }
                            window.requestAnimationFrame(callback)


                        }

                    }

                }



            }

            background.onclick = function() {
                isOpen = true;
                if (isOpen) {
                    isOpen = false;
                    detener_animacion = false

                    i = e.offsetLeft;

                    function callback() {
                        i += speed_ajus
                        e.style.left = (Math.max(body.clientWidth - e.clientWidth, Math.min(i, body.clientWidth))) + `px`
                        let alpha = ((-((i - body.clientWidth)) / 255 * 255) / 255) / 2;
                        background.style.background = `rgba(0,0,0,${Math.min(alpha,0.5)})`
                        if (body.clientWidth == Math.max(body.clientWidth - e.clientWidth, Math.min(i, body.clientWidth))) {
                            e.style.left = (body.clientWidth) + `px`
                            background.style.display = "none"
                            move_menu = false
                        } else {
                            if (detener_animacion) {

                            } else {
                                window.requestAnimationFrame(callback)
                            }
                        }
                    }
                    window.requestAnimationFrame(callback)

                }
            }

            /* Fin de gravity left */

            /******/


        });




    }


    ///////**////////

    open() {
        let e = this;
        let body = document.body



    }


})