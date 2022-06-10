window.customElements.define(`v7-left-menu`, class swipe_menu_rihgt extends HTMLElement {

    speed = 10;
    constructor() {
        super();


    }

    connectedCallback() {
        let e = this;
        let body = document.body
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

            e.style.left = `-${(e.clientWidth * 100 / body.clientWidth)}%`

            let background = document.createElement(`div`);
            background.style =
                `
         position:absolute;
         width:100%;height:100%;
         left:0px;top:0px;display:none;
         background:#000;z.index:calc(1000000*100);
         `
            body.appendChild(background)

            e.background = background;
            /**/


            /**/

            let start = { x: 0, y: 0 }
            let speed = 0;
            let lastX = 0;
            let direction = `+`
            let isOpen = false;

            e.isOpen = isOpen;

            let detener_animacion = false;
            let move_menu = false;

            function slider_start() {
                event.preventDefault()
                lastX = event.touches[0].clientX;
                start.x = event.touches[0].clientX - e.offsetLeft;

                detener_animacion = true;
                e.detener_animacion = detener_animacion;

                if (event.touches[0].clientX < 50 || e.offsetLeft == 0) {
                    move_menu = true

                } else {

                }


            }




            function slider_move() {
                event.preventDefault()
                if (move_menu) {
                    background.style.display = `block`
                    speed = ((Math.sqrt(Math.pow(Math.abs(event.touches[0].clientX - lastX), 2))))


                    let left = event.touches[0].clientX - start.x;

                    let alpha = ((-((-e.clientWidth) - left) / 255 * 255) / 255) / 2;
                    background.style.background = `rgba(0,0,0,${alpha})`

                    e.style.left = (Math.max(-e.clientWidth, Math.min(left, 0))) + `px`

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
            let speed_ajus = e.speed;

            function slider_end() {
                detener_animacion = false
                if (isOpen) {
                    isOpen = false;
                    if (Math.floor(speed) == 0) {
                        if (-(e.offsetLeft) > e.clientWidth / 2) {
                            i = e.offsetLeft;

                            function callback() {
                                i -= speed_ajus
                                e.style.left = (Math.max(-e.clientWidth, Math.min(i, 0))) + `px`
                                let alpha = ((-((-e.clientWidth) - i) / 255 * 255) / 255) / 2;
                                background.style.background = `rgba(0,0,0,${alpha})`

                                if (-e.clientWidth == Math.max(-e.clientWidth, Math.min(i, 0))) {
                                    e.style.left = -e.clientWidth + `px`
                                    background.style.display = `none`
                                    move_menu = false;
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
                                e.style.left = (Math.max(-e.clientWidth, Math.min(i, 0))) + `px`
                                let alpha = ((-((-e.clientWidth) - i) / 255 * 255) / 255) / 2;
                                background.style.background = `rgba(0,0,0,${alpha})`

                                if (0 == Math.max(-e.clientWidth, Math.min(i, 0))) {
                                    e.style.left = 0 + `px`

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
                                e.style.left = (Math.max(-e.clientWidth, Math.min(i, 0))) + `px`
                                let alpha = ((-((-e.clientWidth) - i) / 255 * 255) / 255) / 2;
                                background.style.background = `rgba(0,0,0,${alpha})`

                                if (-e.clientWidth == Math.max(-e.clientWidth, Math.min(i, 0))) {
                                    e.style.left = -e.clientWidth + `px`
                                    background.style.display = `none`
                                    move_menu = false;

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
                                e.style.left = (Math.max(-e.clientWidth, Math.min(i, 0))) + `px`
                                let alpha = ((-((-e.clientWidth) - i) / 255 * 255) / 255) / 2;
                                background.style.background = `rgba(0,0,0,${alpha})`

                                if (0 == Math.max(-e.clientWidth, Math.min(i, 0))) {
                                    e.style.left = 0 + `px`
                                } else {
                                    if (detener_animacion) {

                                    } else {
                                        window.requestAnimationFrame(callback)
                                    }
                                }
                            }
                            window.requestAnimationFrame(callback)
                                //  e.style.left = (Math.max(-e.clientWidth, Math.min(e.clientWidth, 0))) + `px`
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

                    function callback2() {
                        i -= speed_ajus
                        e.style.left = (Math.max(-e.clientWidth, Math.min(i, 0))) + `px`
                        let alpha = ((-((-e.clientWidth) - i) / 255 * 255) / 255) / 2;
                        background.style.background = `rgba(0,0,0,${alpha})`

                        if (-e.clientWidth == Math.max(-e.clientWidth, Math.min(i, 0))) {
                            e.style.left = -e.clientWidth + `px`
                            background.style.display = `none`
                            move_menu = true;
                        } else {
                            if (detener_animacion) {

                            } else {

                                window.requestAnimationFrame(callback2)

                            }
                        }
                    }

                    window.requestAnimationFrame(callback2)

                }
            }

            /* Fin de gravity left */

            /******/


        });




    }


    ///////**////////

    open() {
        let e = this;
        let body = document.body;
        let background = e.background;
        let detener_animacion = e.detener_animacion = false;
        let isOpen = e.isOpen;
        background.style.display = "block"
        let i = e.offsetLeft;

        function callback() {
            i += e.speed
            e.style.left = (Math.max(-e.clientWidth, Math.min(i, 0))) + `px`
            let alpha = ((-((-e.clientWidth) - i) / 255 * 255) / 255) / 2;
            background.style.background = `rgba(0,0,0,${alpha})`

            if (0 == Math.max(-e.clientWidth, Math.min(i, 0))) {
                e.style.left = 0 + `px`

            } else {
                if (detener_animacion) {

                } else {
                    window.requestAnimationFrame(callback)
                }
            }
        }
        window.requestAnimationFrame(callback)


        background.ontouchend = function() {

            isOpen = true;
            if (isOpen) {
                isOpen = false;
                detener_animacion = false

                i = e.offsetLeft;

                function callback2() {
                    i -= e.speed;
                    e.style.left = (Math.max(-e.clientWidth, Math.min(i, 0))) + `px`
                    let alpha = ((-((-e.clientWidth) - i) / 255 * 255) / 255) / 2;
                    background.style.background = `rgba(0,0,0,${alpha})`

                    if (-e.clientWidth == Math.max(-e.clientWidth, Math.min(i, 0))) {
                        e.style.left = -e.clientWidth + `px`
                        background.style.display = `none`
                    } else {
                        if (detener_animacion) {

                        } else {

                            window.requestAnimationFrame(callback2)

                        }
                    }
                }

                window.requestAnimationFrame(callback2)

            }
        }

    }






})