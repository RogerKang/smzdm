/**
 * Swiper 3.1.7
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 *
 * http://www.idangero.us/swiper/
 *
 * Copyright 2015, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under MIT
 *
 * Released on: October 10, 2015
 */
!
    function() {
        "use strict";
        function e(e) {
            e.fn.swiper = function(a) {
                var s;
                return e(this).each(function() {
                    var e = new t(this, a);
                    s || (s = e)
                }),
                    s
            }
        }
        var a, t = function(e, s) {
            function r() {
                return "horizontal" === v.params.direction
            }
            function i(e) {
                return Math.floor(e)
            }
            function n() {
                v.autoplayTimeoutId = setTimeout(function() {
                        v.params.loop ? (v.fixLoop(), v._slideNext()) : v.isEnd ? s.autoplayStopOnLast ? v.stopAutoplay() : v._slideTo(0) : v._slideNext()
                    },
                    v.params.autoplay)
            }
            function o(e, t) {
                var s = a(e.target);
                if (!s.is(t)) if ("string" == typeof t) s = s.parents(t);
                else if (t.nodeType) {
                    var r;
                    return s.parents().each(function(e, a) {
                        a === t && (r = t)
                    }),
                        r ? t: void 0
                }
                return 0 === s.length ? void 0 : s[0]
            }
            function l(e, a) {
                a = a || {};
                var t = window.MutationObserver || window.WebkitMutationObserver,
                    s = new t(function(e) {
                        e.forEach(function(e) {
                            v.onResize(!0),
                                v.emit("onObserverUpdate", v, e)
                        })
                    });
                s.observe(e, {
                    attributes: "undefined" == typeof a.attributes ? !0 : a.attributes,
                    childList: "undefined" == typeof a.childList ? !0 : a.childList,
                    characterData: "undefined" == typeof a.characterData ? !0 : a.characterData
                }),
                    v.observers.push(s)
            }
            function p(e) {
                e.originalEvent && (e = e.originalEvent);
                var a = e.keyCode || e.charCode;
                if (!v.params.allowSwipeToNext && (r() && 39 === a || !r() && 40 === a)) return ! 1;
                if (!v.params.allowSwipeToPrev && (r() && 37 === a || !r() && 38 === a)) return ! 1;
                if (! (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                    if (37 === a || 39 === a || 38 === a || 40 === a) {
                        var t = !1;
                        if (v.container.parents(".swiper-slide").length > 0 && 0 === v.container.parents(".swiper-slide-active").length) return;
                        var s = {
                                left: window.pageXOffset,
                                top: window.pageYOffset
                            },
                            i = window.innerWidth,
                            n = window.innerHeight,
                            o = v.container.offset();
                        v.rtl && (o.left = o.left - v.container[0].scrollLeft);
                        for (var l = [[o.left, o.top], [o.left + v.width, o.top], [o.left, o.top + v.height], [o.left + v.width, o.top + v.height]], p = 0; p < l.length; p++) {
                            var d = l[p];
                            d[0] >= s.left && d[0] <= s.left + i && d[1] >= s.top && d[1] <= s.top + n && (t = !0)
                        }
                        if (!t) return
                    }
                    r() ? ((37 === a || 39 === a) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (39 === a && !v.rtl || 37 === a && v.rtl) && v.slideNext(), (37 === a && !v.rtl || 39 === a && v.rtl) && v.slidePrev()) : ((38 === a || 40 === a) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === a && v.slideNext(), 38 === a && v.slidePrev())
                }
            }
            function d(e) {
                e.originalEvent && (e = e.originalEvent);
                var a = v.mousewheel.event,
                    t = 0;
                if (e.detail) t = -e.detail;
                else if ("mousewheel" === a) if (v.params.mousewheelForceToAxis) if (r()) {
                    if (! (Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY))) return;
                    t = e.wheelDeltaX
                } else {
                    if (! (Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX))) return;
                    t = e.wheelDeltaY
                } else t = e.wheelDelta;
                else if ("DOMMouseScroll" === a) t = -e.detail;
                else if ("wheel" === a) if (v.params.mousewheelForceToAxis) if (r()) {
                    if (! (Math.abs(e.deltaX) > Math.abs(e.deltaY))) return;
                    t = -e.deltaX
                } else {
                    if (! (Math.abs(e.deltaY) > Math.abs(e.deltaX))) return;
                    t = -e.deltaY
                } else t = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? -e.deltaX: -e.deltaY;
                if (v.params.mousewheelInvert && (t = -t), v.params.freeMode) {
                    var s = v.getWrapperTranslate() + t * v.params.mousewheelSensitivity;
                    if (s > v.minTranslate() && (s = v.minTranslate()), s < v.maxTranslate() && (s = v.maxTranslate()), v.setWrapperTransition(0), v.setWrapperTranslate(s), v.updateProgress(), v.updateActiveIndex(), v.params.freeModeSticky && (clearTimeout(v.mousewheel.timeout), v.mousewheel.timeout = setTimeout(function() {
                            v.slideReset()
                        },
                        300)), 0 === s || s === v.maxTranslate()) return
                } else {
                    if ((new window.Date).getTime() - v.mousewheel.lastScrollTime > 60) if (0 > t) if (v.isEnd && !v.params.loop || v.animating) {
                        if (v.params.mousewheelReleaseOnEdges) return ! 0
                    } else v.slideNext();
                    else if (v.isBeginning && !v.params.loop || v.animating) {
                        if (v.params.mousewheelReleaseOnEdges) return ! 0
                    } else v.slidePrev();
                    v.mousewheel.lastScrollTime = (new window.Date).getTime()
                }
                return v.params.autoplay && v.stopAutoplay(),
                    e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                    !1
            }
            function c(e, t) {
                e = a(e);
                var s, i, n;
                s = e.attr("data-swiper-parallax") || "0",
                    i = e.attr("data-swiper-parallax-x"),
                    n = e.attr("data-swiper-parallax-y"),
                        i || n ? (i = i || "0", n = n || "0") : r() ? (i = s, n = "0") : (n = s, i = "0"),
                    i = i.indexOf("%") >= 0 ? parseInt(i, 10) * t + "%": i * t + "px",
                    n = n.indexOf("%") >= 0 ? parseInt(n, 10) * t + "%": n * t + "px",
                    e.transform("translate3d(" + i + ", " + n + ",0px)")
            }
            function u(e) {
                return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e),
                    e
            }
            if (! (this instanceof t)) return new t(e, s);
            var m = {
                    direction: "horizontal",
                    touchEventsTarget: "container",
                    initialSlide: 0,
                    speed: 300,
                    autoplay: !1,
                    autoplayDisableOnInteraction: !0,
                    iOSEdgeSwipeDetection: !1,
                    iOSEdgeSwipeThreshold: 20,
                    freeMode: !1,
                    freeModeMomentum: !0,
                    freeModeMomentumRatio: 1,
                    freeModeMomentumBounce: !0,
                    freeModeMomentumBounceRatio: 1,
                    freeModeSticky: !1,
                    freeModeMinimumVelocity: .02,
                    setWrapperSize: !1,
                    virtualTranslate: !1,
                    effect: "slide",
                    coverflow: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: !0
                    },
                    cube: {
                        slideShadows: !0,
                        shadow: !0,
                        shadowOffset: 20,
                        shadowScale: .94
                    },
                    fade: {
                        crossFade: !1
                    },
                    parallax: !1,
                    scrollbar: null,
                    scrollbarHide: !0,
                    scrollbarDraggable: !1,
                    scrollbarSnapOnRelease: !1,
                    keyboardControl: !1,
                    mousewheelControl: !1,
                    mousewheelReleaseOnEdges: !1,
                    mousewheelInvert: !1,
                    mousewheelForceToAxis: !1,
                    mousewheelSensitivity: 1,
                    hashnav: !1,
                    spaceBetween: 0,
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerColumnFill: "column",
                    slidesPerGroup: 1,
                    centeredSlides: !1,
                    slidesOffsetBefore: 0,
                    slidesOffsetAfter: 0,
                    roundLengths: !1,
                    touchRatio: 1,
                    touchAngle: 45,
                    simulateTouch: !0,
                    shortSwipes: !0,
                    longSwipes: !0,
                    longSwipesRatio: .5,
                    longSwipesMs: 300,
                    followFinger: !0,
                    onlyExternal: !1,
                    threshold: 0,
                    touchMoveStopPropagation: !0,
                    pagination: null,
                    paginationElement: "span",
                    paginationClickable: !1,
                    paginationHide: !1,
                    paginationBulletRender: null,
                    resistance: !0,
                    resistanceRatio: .85,
                    nextButton: null,
                    prevButton: null,
                    watchSlidesProgress: !1,
                    watchSlidesVisibility: !1,
                    grabCursor: !1,
                    preventClicks: !0,
                    preventClicksPropagation: !0,
                    slideToClickedSlide: !1,
                    lazyLoading: !1,
                    lazyLoadingInPrevNext: !1,
                    lazyLoadingOnTransitionStart: !1,
                    preloadImages: !0,
                    updateOnImagesReady: !0,
                    loop: !1,
                    loopAdditionalSlides: 0,
                    loopedSlides: null,
                    control: void 0,
                    controlInverse: !1,
                    controlBy: "slide",
                    allowSwipeToPrev: !0,
                    allowSwipeToNext: !0,
                    swipeHandler: null,
                    noSwiping: !0,
                    noSwipingClass: "swiper-no-swiping",
                    slideClass: "swiper-slide",
                    slideActiveClass: "swiper-slide-active",
                    slideVisibleClass: "swiper-slide-visible",
                    slideDuplicateClass: "swiper-slide-duplicate",
                    slideNextClass: "swiper-slide-next",
                    slidePrevClass: "swiper-slide-prev",
                    wrapperClass: "swiper-wrapper",
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    buttonDisabledClass: "swiper-button-disabled",
                    paginationHiddenClass: "swiper-pagination-hidden",
                    observer: !1,
                    observeParents: !1,
                    a11y: !1,
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}",
                    runCallbacksOnInit: !0
                },
                f = s && s.virtualTranslate;
            s = s || {};
            for (var h in m) if ("undefined" == typeof s[h]) s[h] = m[h];
            else if ("object" == typeof s[h]) for (var g in m[h])"undefined" == typeof s[h][g] && (s[h][g] = m[h][g]);
            var v = this;
            if (v.params = s, v.classNames = [], "undefined" != typeof a && "undefined" != typeof Dom7 && (a = Dom7), ("undefined" != typeof a || (a = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery: Dom7)) && (v.$ = a, v.container = a(e), 0 !== v.container.length)) {
                if (v.container.length > 1) return void v.container.each(function() {
                    new t(this, s)
                });
                v.container[0].swiper = v,
                    v.container.data("swiper", v),
                    v.classNames.push("swiper-container-" + v.params.direction),
                    v.params.freeMode && v.classNames.push("swiper-container-free-mode"),
                    v.support.flexbox || (v.classNames.push("swiper-container-no-flexbox"), v.params.slidesPerColumn = 1),
                    (v.params.parallax || v.params.watchSlidesVisibility) && (v.params.watchSlidesProgress = !0),
                    ["cube", "coverflow"].indexOf(v.params.effect) >= 0 && (v.support.transforms3d ? (v.params.watchSlidesProgress = !0, v.classNames.push("swiper-container-3d")) : v.params.effect = "slide"),
                    "slide" !== v.params.effect && v.classNames.push("swiper-container-" + v.params.effect),
                    "cube" === v.params.effect && (v.params.resistanceRatio = 0, v.params.slidesPerView = 1, v.params.slidesPerColumn = 1, v.params.slidesPerGroup = 1, v.params.centeredSlides = !1, v.params.spaceBetween = 0, v.params.virtualTranslate = !0, v.params.setWrapperSize = !1),
                    "fade" === v.params.effect && (v.params.slidesPerView = 1, v.params.slidesPerColumn = 1, v.params.slidesPerGroup = 1, v.params.watchSlidesProgress = !0, v.params.spaceBetween = 0, "undefined" == typeof f && (v.params.virtualTranslate = !0)),
                    v.params.grabCursor && v.support.touch && (v.params.grabCursor = !1),
                    v.wrapper = v.container.children("." + v.params.wrapperClass),
                    v.params.pagination && (v.paginationContainer = a(v.params.pagination), v.params.paginationClickable && v.paginationContainer.addClass("swiper-pagination-clickable")),
                    v.rtl = r() && ("rtl" === v.container[0].dir.toLowerCase() || "rtl" === v.container.css("direction")),
                    v.rtl && v.classNames.push("swiper-container-rtl"),
                    v.rtl && (v.wrongRTL = "-webkit-box" === v.wrapper.css("display")),
                    v.params.slidesPerColumn > 1 && v.classNames.push("swiper-container-multirow"),
                    v.device.android && v.classNames.push("swiper-container-android"),
                    v.container.addClass(v.classNames.join(" ")),
                    v.translate = 0,
                    v.progress = 0,
                    v.velocity = 0,
                    v.lockSwipeToNext = function() {
                        v.params.allowSwipeToNext = !1
                    },
                    v.lockSwipeToPrev = function() {
                        v.params.allowSwipeToPrev = !1
                    },
                    v.lockSwipes = function() {
                        v.params.allowSwipeToNext = v.params.allowSwipeToPrev = !1
                    },
                    v.unlockSwipeToNext = function() {
                        v.params.allowSwipeToNext = !0
                    },
                    v.unlockSwipeToPrev = function() {
                        v.params.allowSwipeToPrev = !0
                    },
                    v.unlockSwipes = function() {
                        v.params.allowSwipeToNext = v.params.allowSwipeToPrev = !0
                    },
                    v.params.grabCursor && (v.container[0].style.cursor = "move", v.container[0].style.cursor = "-webkit-grab", v.container[0].style.cursor = "-moz-grab", v.container[0].style.cursor = "grab"),
                    v.imagesToLoad = [],
                    v.imagesLoaded = 0,
                    v.loadImage = function(e, a, t, s, r) {
                        function i() {
                            r && r()
                        }
                        var n;
                        e.complete && s ? i() : a ? (n = new window.Image, n.onload = i, n.onerror = i, t && (n.srcset = t), a && (n.src = a)) : i()
                    },
                    v.preloadImages = function() {
                        function e() {
                            "undefined" != typeof v && null !== v && (void 0 !== v.imagesLoaded && v.imagesLoaded++, v.imagesLoaded === v.imagesToLoad.length && (v.params.updateOnImagesReady && v.update(), v.emit("onImagesReady", v)))
                        }
                        v.imagesToLoad = v.container.find("img");
                        for (var a = 0; a < v.imagesToLoad.length; a++) v.loadImage(v.imagesToLoad[a], v.imagesToLoad[a].currentSrc || v.imagesToLoad[a].getAttribute("src"), v.imagesToLoad[a].srcset || v.imagesToLoad[a].getAttribute("srcset"), !0, e)
                    },
                    v.autoplayTimeoutId = void 0,
                    v.autoplaying = !1,
                    v.autoplayPaused = !1,
                    v.startAutoplay = function() {
                        return "undefined" != typeof v.autoplayTimeoutId ? !1 : v.params.autoplay ? v.autoplaying ? !1 : (v.autoplaying = !0, v.emit("onAutoplayStart", v), void n()) : !1
                    },
                    v.stopAutoplay = function(e) {
                        v.autoplayTimeoutId && (v.autoplayTimeoutId && clearTimeout(v.autoplayTimeoutId), v.autoplaying = !1, v.autoplayTimeoutId = void 0, v.emit("onAutoplayStop", v))
                    },
                    v.pauseAutoplay = function(e) {
                        v.autoplayPaused || (v.autoplayTimeoutId && clearTimeout(v.autoplayTimeoutId), v.autoplayPaused = !0, 0 === e ? (v.autoplayPaused = !1, n()) : v.wrapper.transitionEnd(function() {
                            v && (v.autoplayPaused = !1, v.autoplaying ? n() : v.stopAutoplay())
                        }))
                    },
                    v.minTranslate = function() {
                        return - v.snapGrid[0]
                    },
                    v.maxTranslate = function() {
                        return - v.snapGrid[v.snapGrid.length - 1]
                    },
                    v.updateContainerSize = function() {
                        var e, a;
                        e = "undefined" != typeof v.params.width ? v.params.width: v.container[0].clientWidth,
                            a = "undefined" != typeof v.params.height ? v.params.height: v.container[0].clientHeight,
                            0 === e && r() || 0 === a && !r() || (e = e - parseInt(v.container.css("padding-left"), 10) - parseInt(v.container.css("padding-right"), 10), a = a - parseInt(v.container.css("padding-top"), 10) - parseInt(v.container.css("padding-bottom"), 10), v.width = e, v.height = a, v.size = r() ? v.width: v.height)
                    },
                    v.updateSlidesSize = function() {
                        v.slides = v.wrapper.children("." + v.params.slideClass),
                            v.snapGrid = [],
                            v.slidesGrid = [],
                            v.slidesSizesGrid = [];
                        var e, a = v.params.spaceBetween,
                            t = -v.params.slidesOffsetBefore,
                            s = 0,
                            n = 0;
                        "string" == typeof a && a.indexOf("%") >= 0 && (a = parseFloat(a.replace("%", "")) / 100 * v.size),
                            v.virtualSize = -a,
                            v.rtl ? v.slides.css({
                                marginLeft: "",
                                marginTop: ""
                            }) : v.slides.css({
                                marginRight: "",
                                marginBottom: ""
                            });
                        var o;
                        v.params.slidesPerColumn > 1 && (o = Math.floor(v.slides.length / v.params.slidesPerColumn) === v.slides.length / v.params.slidesPerColumn ? v.slides.length: Math.ceil(v.slides.length / v.params.slidesPerColumn) * v.params.slidesPerColumn, "auto" !== v.params.slidesPerView && "row" === v.params.slidesPerColumnFill && (o = Math.max(o, v.params.slidesPerView * v.params.slidesPerColumn)));
                        var l, p = v.params.slidesPerColumn,
                            d = o / p,
                            c = d - (v.params.slidesPerColumn * d - v.slides.length);
                        for (e = 0; e < v.slides.length; e++) {
                            l = 0;
                            var u = v.slides.eq(e);
                            if (v.params.slidesPerColumn > 1) {
                                var m, f, h;
                                "column" === v.params.slidesPerColumnFill ? (f = Math.floor(e / p), h = e - f * p, (f > c || f === c && h === p - 1) && ++h >= p && (h = 0, f++), m = f + h * o / p, u.css({
                                    "-webkit-box-ordinal-group": m,
                                    "-moz-box-ordinal-group": m,
                                    "-ms-flex-order": m,
                                    "-webkit-order": m,
                                    order: m
                                })) : (h = Math.floor(e / d), f = e - h * d),
                                    u.css({
                                        "margin-top": 0 !== h && v.params.spaceBetween && v.params.spaceBetween + "px"
                                    }).attr("data-swiper-column", f).attr("data-swiper-row", h)
                            }
                            "none" !== u.css("display") && ("auto" === v.params.slidesPerView ? (l = r() ? u.outerWidth(!0) : u.outerHeight(!0), v.params.roundLengths && (l = i(l))) : (l = (v.size - (v.params.slidesPerView - 1) * a) / v.params.slidesPerView, v.params.roundLengths && (l = i(l)), r() ? v.slides[e].style.width = l + "px": v.slides[e].style.height = l + "px"), v.slides[e].swiperSlideSize = l, v.slidesSizesGrid.push(l), v.params.centeredSlides ? (t = t + l / 2 + s / 2 + a, 0 === e && (t = t - v.size / 2 - a), Math.abs(t) < .001 && (t = 0), n % v.params.slidesPerGroup === 0 && v.snapGrid.push(t), v.slidesGrid.push(t)) : (n % v.params.slidesPerGroup === 0 && v.snapGrid.push(t), v.slidesGrid.push(t), t = t + l + a), v.virtualSize += l + a, s = l, n++)
                        }
                        v.virtualSize = Math.max(v.virtualSize, v.size) + v.params.slidesOffsetAfter;
                        var g;
                        if (v.rtl && v.wrongRTL && ("slide" === v.params.effect || "coverflow" === v.params.effect) && v.wrapper.css({
                            width: v.virtualSize + v.params.spaceBetween + "px"
                        }), (!v.support.flexbox || v.params.setWrapperSize) && (r() ? v.wrapper.css({
                            width: v.virtualSize + v.params.spaceBetween + "px"
                        }) : v.wrapper.css({
                            height: v.virtualSize + v.params.spaceBetween + "px"
                        })), v.params.slidesPerColumn > 1 && (v.virtualSize = (l + v.params.spaceBetween) * o, v.virtualSize = Math.ceil(v.virtualSize / v.params.slidesPerColumn) - v.params.spaceBetween, v.wrapper.css({
                            width: v.virtualSize + v.params.spaceBetween + "px"
                        }), v.params.centeredSlides)) {
                            for (g = [], e = 0; e < v.snapGrid.length; e++) v.snapGrid[e] < v.virtualSize + v.snapGrid[0] && g.push(v.snapGrid[e]);
                            v.snapGrid = g
                        }
                        if (!v.params.centeredSlides) {
                            for (g = [], e = 0; e < v.snapGrid.length; e++) v.snapGrid[e] <= v.virtualSize - v.size && g.push(v.snapGrid[e]);
                            v.snapGrid = g,
                                Math.floor(v.virtualSize - v.size) > Math.floor(v.snapGrid[v.snapGrid.length - 1]) && v.snapGrid.push(v.virtualSize - v.size)
                        }
                        0 === v.snapGrid.length && (v.snapGrid = [0]),
                            0 !== v.params.spaceBetween && (r() ? v.rtl ? v.slides.css({
                            marginLeft: a + "px"
                        }) : v.slides.css({
                            marginRight: a + "px"
                        }) : v.slides.css({
                            marginBottom: a + "px"
                        })),
                            v.params.watchSlidesProgress && v.updateSlidesOffset()
                    },
                    v.updateSlidesOffset = function() {
                        for (var e = 0; e < v.slides.length; e++) v.slides[e].swiperSlideOffset = r() ? v.slides[e].offsetLeft: v.slides[e].offsetTop
                    },
                    v.updateSlidesProgress = function(e) {
                        if ("undefined" == typeof e && (e = v.translate || 0), 0 !== v.slides.length) {
                            "undefined" == typeof v.slides[0].swiperSlideOffset && v.updateSlidesOffset();
                            var a = -e;
                            v.rtl && (a = e);
                            v.container[0].getBoundingClientRect(),
                                r() ? "left": "top",
                                r() ? "right": "bottom";
                            v.slides.removeClass(v.params.slideVisibleClass);
                            for (var t = 0; t < v.slides.length; t++) {
                                var s = v.slides[t],
                                    i = (a - s.swiperSlideOffset) / (s.swiperSlideSize + v.params.spaceBetween);
                                if (v.params.watchSlidesVisibility) {
                                    var n = -(a - s.swiperSlideOffset),
                                        o = n + v.slidesSizesGrid[t],
                                        l = n >= 0 && n < v.size || o > 0 && o <= v.size || 0 >= n && o >= v.size;
                                    l && v.slides.eq(t).addClass(v.params.slideVisibleClass)
                                }
                                s.progress = v.rtl ? -i: i
                            }
                        }
                    },
                    v.updateProgress = function(e) {
                        "undefined" == typeof e && (e = v.translate || 0);
                        var a = v.maxTranslate() - v.minTranslate();
                        0 === a ? (v.progress = 0, v.isBeginning = v.isEnd = !0) : (v.progress = (e - v.minTranslate()) / a, v.isBeginning = v.progress <= 0, v.isEnd = v.progress >= 1),
                            v.isBeginning && v.emit("onReachBeginning", v),
                            v.isEnd && v.emit("onReachEnd", v),
                            v.params.watchSlidesProgress && v.updateSlidesProgress(e),
                            v.emit("onProgress", v, v.progress)
                    },
                    v.updateActiveIndex = function() {
                        var e, a, t, s = v.rtl ? v.translate: -v.translate;
                        for (a = 0; a < v.slidesGrid.length; a++)"undefined" != typeof v.slidesGrid[a + 1] ? s >= v.slidesGrid[a] && s < v.slidesGrid[a + 1] - (v.slidesGrid[a + 1] - v.slidesGrid[a]) / 2 ? e = a: s >= v.slidesGrid[a] && s < v.slidesGrid[a + 1] && (e = a + 1) : s >= v.slidesGrid[a] && (e = a); (0 > e || "undefined" == typeof e) && (e = 0),
                            t = Math.floor(e / v.params.slidesPerGroup),
                            t >= v.snapGrid.length && (t = v.snapGrid.length - 1),
                            e !== v.activeIndex && (v.snapIndex = t, v.previousIndex = v.activeIndex, v.activeIndex = e, v.updateClasses())
                    },
                    v.updateClasses = function() {
                        v.slides.removeClass(v.params.slideActiveClass + " " + v.params.slideNextClass + " " + v.params.slidePrevClass);
                        var e = v.slides.eq(v.activeIndex);
                        if (e.addClass(v.params.slideActiveClass), e.next("." + v.params.slideClass).addClass(v.params.slideNextClass), e.prev("." + v.params.slideClass).addClass(v.params.slidePrevClass), v.bullets && v.bullets.length > 0) {
                            v.bullets.removeClass(v.params.bulletActiveClass);
                            var t;
                            v.params.loop ? (t = Math.ceil(v.activeIndex - v.loopedSlides) / v.params.slidesPerGroup, t > v.slides.length - 1 - 2 * v.loopedSlides && (t -= v.slides.length - 2 * v.loopedSlides), t > v.bullets.length - 1 && (t -= v.bullets.length)) : t = "undefined" != typeof v.snapIndex ? v.snapIndex: v.activeIndex || 0,
                                    v.paginationContainer.length > 1 ? v.bullets.each(function() {
                                a(this).index() === t && a(this).addClass(v.params.bulletActiveClass)
                            }) : v.bullets.eq(t).addClass(v.params.bulletActiveClass)
                        }
                        v.params.loop || (v.params.prevButton && (v.isBeginning ? (a(v.params.prevButton).addClass(v.params.buttonDisabledClass), v.params.a11y && v.a11y && v.a11y.disable(a(v.params.prevButton))) : (a(v.params.prevButton).removeClass(v.params.buttonDisabledClass), v.params.a11y && v.a11y && v.a11y.enable(a(v.params.prevButton)))), v.params.nextButton && (v.isEnd ? (a(v.params.nextButton).addClass(v.params.buttonDisabledClass), v.params.a11y && v.a11y && v.a11y.disable(a(v.params.nextButton))) : (a(v.params.nextButton).removeClass(v.params.buttonDisabledClass), v.params.a11y && v.a11y && v.a11y.enable(a(v.params.nextButton)))))
                    },
                    v.updatePagination = function() {
                        if (v.params.pagination && v.paginationContainer && v.paginationContainer.length > 0) {
                            for (var e = "",
                                     a = v.params.loop ? Math.ceil((v.slides.length - 2 * v.loopedSlides) / v.params.slidesPerGroup) : v.snapGrid.length, t = 0; a > t; t++) e += v.params.paginationBulletRender ? v.params.paginationBulletRender(t, v.params.bulletClass) : "<" + v.params.paginationElement + ' class="' + v.params.bulletClass + '"></' + v.params.paginationElement + ">";
                            v.paginationContainer.html(e),
                                v.bullets = v.paginationContainer.find("." + v.params.bulletClass),
                                v.params.paginationClickable && v.params.a11y && v.a11y && v.a11y.initPagination()
                        }
                    },
                    v.update = function(e) {
                        function a() {
                            s = Math.min(Math.max(v.translate, v.maxTranslate()), v.minTranslate()),
                                v.setWrapperTranslate(s),
                                v.updateActiveIndex(),
                                v.updateClasses()
                        }
                        if (v.updateContainerSize(), v.updateSlidesSize(), v.updateProgress(), v.updatePagination(), v.updateClasses(), v.params.scrollbar && v.scrollbar && v.scrollbar.set(), e) {
                            var t, s;
                            v.controller && v.controller.spline && (v.controller.spline = void 0),
                                v.params.freeMode ? a() : (t = ("auto" === v.params.slidesPerView || v.params.slidesPerView > 1) && v.isEnd && !v.params.centeredSlides ? v.slideTo(v.slides.length - 1, 0, !1, !0) : v.slideTo(v.activeIndex, 0, !1, !0), t || a())
                        }
                    },
                    v.onResize = function(e) {
                        var a = v.params.allowSwipeToPrev,
                            t = v.params.allowSwipeToNext;
                        if (v.params.allowSwipeToPrev = v.params.allowSwipeToNext = !0, v.updateContainerSize(), v.updateSlidesSize(), ("auto" === v.params.slidesPerView || v.params.freeMode || e) && v.updatePagination(), v.params.scrollbar && v.scrollbar && v.scrollbar.set(), v.controller && v.controller.spline && (v.controller.spline = void 0), v.params.freeMode) {
                            var s = Math.min(Math.max(v.translate, v.maxTranslate()), v.minTranslate());
                            v.setWrapperTranslate(s),
                                v.updateActiveIndex(),
                                v.updateClasses()
                        } else v.updateClasses(),
                                ("auto" === v.params.slidesPerView || v.params.slidesPerView > 1) && v.isEnd && !v.params.centeredSlides ? v.slideTo(v.slides.length - 1, 0, !1, !0) : v.slideTo(v.activeIndex, 0, !1, !0);
                        v.params.allowSwipeToPrev = a,
                            v.params.allowSwipeToNext = t
                    };
                var w = ["mousedown", "mousemove", "mouseup"];
                window.navigator.pointerEnabled ? w = ["pointerdown", "pointermove", "pointerup"] : window.navigator.msPointerEnabled && (w = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
                    v.touchEvents = {
                        start: v.support.touch || !v.params.simulateTouch ? "touchstart": w[0],
                        move: v.support.touch || !v.params.simulateTouch ? "touchmove": w[1],
                        end: v.support.touch || !v.params.simulateTouch ? "touchend": w[2]
                    },
                    (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === v.params.touchEventsTarget ? v.container: v.wrapper).addClass("swiper-wp8-" + v.params.direction),
                    v.initEvents = function(e) {
                        var t = e ? "off": "on",
                            r = e ? "removeEventListener": "addEventListener",
                            i = "container" === v.params.touchEventsTarget ? v.container[0] : v.wrapper[0],
                            n = v.support.touch ? i: document,
                            o = v.params.nested ? !0 : !1;
                        v.browser.ie ? (i[r](v.touchEvents.start, v.onTouchStart, !1), n[r](v.touchEvents.move, v.onTouchMove, o), n[r](v.touchEvents.end, v.onTouchEnd, !1)) : (v.support.touch && (i[r](v.touchEvents.start, v.onTouchStart, !1), i[r](v.touchEvents.move, v.onTouchMove, o), i[r](v.touchEvents.end, v.onTouchEnd, !1)), !s.simulateTouch || v.device.ios || v.device.android || (i[r]("mousedown", v.onTouchStart, !1), document[r]("mousemove", v.onTouchMove, o), document[r]("mouseup", v.onTouchEnd, !1))),
                            window[r]("resize", v.onResize),
                            v.params.nextButton && (a(v.params.nextButton)[t]("click", v.onClickNext), v.params.a11y && v.a11y && a(v.params.nextButton)[t]("keydown", v.a11y.onEnterKey)),
                            v.params.prevButton && (a(v.params.prevButton)[t]("click", v.onClickPrev), v.params.a11y && v.a11y && a(v.params.prevButton)[t]("keydown", v.a11y.onEnterKey)),
                            v.params.pagination && v.params.paginationClickable && (a(v.paginationContainer)[t]("click", "." + v.params.bulletClass, v.onClickIndex), v.params.a11y && v.a11y && a(v.paginationContainer)[t]("keydown", "." + v.params.bulletClass, v.a11y.onEnterKey)),
                            (v.params.preventClicks || v.params.preventClicksPropagation) && i[r]("click", v.preventClicks, !0)
                    },
                    v.attachEvents = function(e) {
                        v.initEvents()
                    },
                    v.detachEvents = function() {
                        v.initEvents(!0)
                    },
                    v.allowClick = !0,
                    v.preventClicks = function(e) {
                        v.allowClick || (v.params.preventClicks && e.preventDefault(), v.params.preventClicksPropagation && v.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
                    },
                    v.onClickNext = function(e) {
                        e.preventDefault(),
                            (!v.isEnd || v.params.loop) && v.slideNext()
                    },
                    v.onClickPrev = function(e) {
                        e.preventDefault(),
                            (!v.isBeginning || v.params.loop) && v.slidePrev()
                    },
                    v.onClickIndex = function(e) {
                        e.preventDefault();
                        var t = a(this).index() * v.params.slidesPerGroup;
                        v.params.loop && (t += v.loopedSlides),
                            v.slideTo(t)
                    },
                    v.updateClickedSlide = function(e) {
                        var t = o(e, "." + v.params.slideClass),
                            s = !1;
                        if (t) for (var r = 0; r < v.slides.length; r++) v.slides[r] === t && (s = !0);
                        if (!t || !s) return v.clickedSlide = void 0,
                            void(v.clickedIndex = void 0);
                        if (v.clickedSlide = t, v.clickedIndex = a(t).index(), v.params.slideToClickedSlide && void 0 !== v.clickedIndex && v.clickedIndex !== v.activeIndex) {
                            var i, n = v.clickedIndex;
                            if (v.params.loop) {
                                if (v.animating) return;
                                i = a(v.clickedSlide).attr("data-swiper-slide-index"),
                                    v.params.centeredSlides ? n < v.loopedSlides - v.params.slidesPerView / 2 || n > v.slides.length - v.loopedSlides + v.params.slidesPerView / 2 ? (v.fixLoop(), n = v.wrapper.children("." + v.params.slideClass + '[data-swiper-slide-index="' + i + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function() {
                                            v.slideTo(n)
                                        },
                                        0)) : v.slideTo(n) : n > v.slides.length - v.params.slidesPerView ? (v.fixLoop(), n = v.wrapper.children("." + v.params.slideClass + '[data-swiper-slide-index="' + i + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function() {
                                            v.slideTo(n)
                                        },
                                        0)) : v.slideTo(n)
                            } else v.slideTo(n)
                        }
                    };
                var y, b, T, x, S, C, M, P, z, I = "input, select, textarea, button",
                    E = Date.now(),
                    k = [];
                v.animating = !1,
                    v.touches = {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    };
                var D, L;
                if (v.onTouchStart = function(e) {
                    if (e.originalEvent && (e = e.originalEvent), D = "touchstart" === e.type, D || !("which" in e) || 3 !== e.which) {
                        if (v.params.noSwiping && o(e, "." + v.params.noSwipingClass)) return void(v.allowClick = !0);
                        if (!v.params.swipeHandler || o(e, v.params.swipeHandler)) {
                            var t = v.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX: e.pageX,
                                s = v.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY: e.pageY;
                            if (! (v.device.ios && v.params.iOSEdgeSwipeDetection && t <= v.params.iOSEdgeSwipeThreshold)) {
                                if (y = !0, b = !1, x = void 0, L = void 0, v.touches.startX = t, v.touches.startY = s, T = Date.now(), v.allowClick = !0, v.updateContainerSize(), v.swipeDirection = void 0, v.params.threshold > 0 && (M = !1), "touchstart" !== e.type) {
                                    var r = !0;
                                    a(e.target).is(I) && (r = !1),
                                        document.activeElement && a(document.activeElement).is(I) && document.activeElement.blur(),
                                        r && e.preventDefault()
                                }
                                v.emit("onTouchStart", v, e)
                            }
                        }
                    }
                },
                    v.onTouchMove = function(e) {
                        if (e.originalEvent && (e = e.originalEvent), !(D && "mousemove" === e.type || e.preventedByNestedSwiper)) {
                            if (v.params.onlyExternal) return v.allowClick = !1,
                                void(y && (v.touches.startX = v.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX: e.pageX, v.touches.startY = v.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY: e.pageY, T = Date.now()));
                            if (D && document.activeElement && e.target === document.activeElement && a(e.target).is(I)) return b = !0,
                                void(v.allowClick = !1);
                            if (v.emit("onTouchMove", v, e), !(e.targetTouches && e.targetTouches.length > 1)) {
                                if (v.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX: e.pageX, v.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY: e.pageY, "undefined" == typeof x) {
                                    var t = 180 * Math.atan2(Math.abs(v.touches.currentY - v.touches.startY), Math.abs(v.touches.currentX - v.touches.startX)) / Math.PI;
                                    x = r() ? t > v.params.touchAngle: 90 - t > v.params.touchAngle
                                }
                                if (x && v.emit("onTouchMoveOpposite", v, e), "undefined" == typeof L && v.browser.ieTouch && (v.touches.currentX !== v.touches.startX || v.touches.currentY !== v.touches.startY) && (L = !0), y) {
                                    if (x) return void(y = !1);
                                    if (L || !v.browser.ieTouch) {
                                        v.allowClick = !1,
                                            v.emit("onSliderMove", v, e),
                                            e.preventDefault(),
                                            v.params.touchMoveStopPropagation && !v.params.nested && e.stopPropagation(),
                                            b || (s.loop && v.fixLoop(), C = v.getWrapperTranslate(), v.setWrapperTransition(0), v.animating && v.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), v.params.autoplay && v.autoplaying && (v.params.autoplayDisableOnInteraction ? v.stopAutoplay() : v.pauseAutoplay()), z = !1, v.params.grabCursor && (v.container[0].style.cursor = "move", v.container[0].style.cursor = "-webkit-grabbing", v.container[0].style.cursor = "-moz-grabbin", v.container[0].style.cursor = "grabbing")),
                                            b = !0;
                                        var i = v.touches.diff = r() ? v.touches.currentX - v.touches.startX: v.touches.currentY - v.touches.startY;
                                        i *= v.params.touchRatio,
                                            v.rtl && (i = -i),
                                            v.swipeDirection = i > 0 ? "prev": "next",
                                            S = i + C;
                                        var n = !0;
                                        if (i > 0 && S > v.minTranslate() ? (n = !1, v.params.resistance && (S = v.minTranslate() - 1 + Math.pow( - v.minTranslate() + C + i, v.params.resistanceRatio))) : 0 > i && S < v.maxTranslate() && (n = !1, v.params.resistance && (S = v.maxTranslate() + 1 - Math.pow(v.maxTranslate() - C - i, v.params.resistanceRatio))), n && (e.preventedByNestedSwiper = !0), !v.params.allowSwipeToNext && "next" === v.swipeDirection && C > S && (S = C), !v.params.allowSwipeToPrev && "prev" === v.swipeDirection && S > C && (S = C), v.params.followFinger) {
                                            if (v.params.threshold > 0) {
                                                if (! (Math.abs(i) > v.params.threshold || M)) return void(S = C);
                                                if (!M) return M = !0,
                                                    v.touches.startX = v.touches.currentX,
                                                    v.touches.startY = v.touches.currentY,
                                                    S = C,
                                                    void(v.touches.diff = r() ? v.touches.currentX - v.touches.startX: v.touches.currentY - v.touches.startY)
                                            } (v.params.freeMode || v.params.watchSlidesProgress) && v.updateActiveIndex(),
                                                v.params.freeMode && (0 === k.length && k.push({
                                                position: v.touches[r() ? "startX": "startY"],
                                                time: T
                                            }), k.push({
                                                position: v.touches[r() ? "currentX": "currentY"],
                                                time: (new window.Date).getTime()
                                            })),
                                                v.updateProgress(S),
                                                v.setWrapperTranslate(S)
                                        }
                                    }
                                }
                            }
                        }
                    },
                    v.onTouchEnd = function(e) {
                        if (e.originalEvent && (e = e.originalEvent), v.emit("onTouchEnd", v, e), y) {
                            v.params.grabCursor && b && y && (v.container[0].style.cursor = "move", v.container[0].style.cursor = "-webkit-grab", v.container[0].style.cursor = "-moz-grab", v.container[0].style.cursor = "grab");
                            var t = Date.now(),
                                s = t - T;
                            if (v.allowClick && (v.updateClickedSlide(e), v.emit("onTap", v, e), 300 > s && t - E > 300 && (P && clearTimeout(P), P = setTimeout(function() {
                                    v && (v.params.paginationHide && v.paginationContainer.length > 0 && !a(e.target).hasClass(v.params.bulletClass) && v.paginationContainer.toggleClass(v.params.paginationHiddenClass), v.emit("onClick", v, e))
                                },
                                300)), 300 > s && 300 > t - E && (P && clearTimeout(P), v.emit("onDoubleTap", v, e))), E = Date.now(), setTimeout(function() {
                                    v && (v.allowClick = !0)
                                },
                                0), !y || !b || !v.swipeDirection || 0 === v.touches.diff || S === C) return void(y = b = !1);
                            y = b = !1;
                            var r;
                            if (r = v.params.followFinger ? v.rtl ? v.translate: -v.translate: -S, v.params.freeMode) {
                                if (r < -v.minTranslate()) return void v.slideTo(v.activeIndex);
                                if (r > -v.maxTranslate()) return void(v.slides.length < v.snapGrid.length ? v.slideTo(v.snapGrid.length - 1) : v.slideTo(v.slides.length - 1));
                                if (v.params.freeModeMomentum) {
                                    if (k.length > 1) {
                                        var i = k.pop(),
                                            n = k.pop(),
                                            o = i.position - n.position,
                                            l = i.time - n.time;
                                        v.velocity = o / l,
                                            v.velocity = v.velocity / 2,
                                            Math.abs(v.velocity) < v.params.freeModeMinimumVelocity && (v.velocity = 0),
                                            (l > 150 || (new window.Date).getTime() - i.time > 300) && (v.velocity = 0)
                                    } else v.velocity = 0;
                                    k.length = 0;
                                    var p = 1e3 * v.params.freeModeMomentumRatio,
                                        d = v.velocity * p,
                                        c = v.translate + d;
                                    v.rtl && (c = -c);
                                    var u, m = !1,
                                        f = 20 * Math.abs(v.velocity) * v.params.freeModeMomentumBounceRatio;
                                    if (c < v.maxTranslate()) v.params.freeModeMomentumBounce ? (c + v.maxTranslate() < -f && (c = v.maxTranslate() - f), u = v.maxTranslate(), m = !0, z = !0) : c = v.maxTranslate();
                                    else if (c > v.minTranslate()) v.params.freeModeMomentumBounce ? (c - v.minTranslate() > f && (c = v.minTranslate() + f), u = v.minTranslate(), m = !0, z = !0) : c = v.minTranslate();
                                    else if (v.params.freeModeSticky) {
                                        var h, g = 0;
                                        for (g = 0; g < v.snapGrid.length; g += 1) if (v.snapGrid[g] > -c) {
                                            h = g;
                                            break
                                        }
                                        c = Math.abs(v.snapGrid[h] - c) < Math.abs(v.snapGrid[h - 1] - c) || "next" === v.swipeDirection ? v.snapGrid[h] : v.snapGrid[h - 1],
                                            v.rtl || (c = -c)
                                    }
                                    if (0 !== v.velocity) p = v.rtl ? Math.abs(( - c - v.translate) / v.velocity) : Math.abs((c - v.translate) / v.velocity);
                                    else if (v.params.freeModeSticky) return void v.slideReset();
                                    v.params.freeModeMomentumBounce && m ? (v.updateProgress(u), v.setWrapperTransition(p), v.setWrapperTranslate(c), v.onTransitionStart(), v.animating = !0, v.wrapper.transitionEnd(function() {
                                        v && z && (v.emit("onMomentumBounce", v), v.setWrapperTransition(v.params.speed), v.setWrapperTranslate(u), v.wrapper.transitionEnd(function() {
                                            v && v.onTransitionEnd()
                                        }))
                                    })) : v.velocity ? (v.updateProgress(c), v.setWrapperTransition(p), v.setWrapperTranslate(c), v.onTransitionStart(), v.animating || (v.animating = !0, v.wrapper.transitionEnd(function() {
                                        v && v.onTransitionEnd()
                                    }))) : v.updateProgress(c),
                                        v.updateActiveIndex()
                                }
                                return void((!v.params.freeModeMomentum || s >= v.params.longSwipesMs) && (v.updateProgress(), v.updateActiveIndex()))
                            }
                            var w, x = 0,
                                M = v.slidesSizesGrid[0];
                            for (w = 0; w < v.slidesGrid.length; w += v.params.slidesPerGroup)"undefined" != typeof v.slidesGrid[w + v.params.slidesPerGroup] ? r >= v.slidesGrid[w] && r < v.slidesGrid[w + v.params.slidesPerGroup] && (x = w, M = v.slidesGrid[w + v.params.slidesPerGroup] - v.slidesGrid[w]) : r >= v.slidesGrid[w] && (x = w, M = v.slidesGrid[v.slidesGrid.length - 1] - v.slidesGrid[v.slidesGrid.length - 2]);
                            var I = (r - v.slidesGrid[x]) / M;
                            if (s > v.params.longSwipesMs) {
                                if (!v.params.longSwipes) return void v.slideTo(v.activeIndex);
                                "next" === v.swipeDirection && (I >= v.params.longSwipesRatio ? v.slideTo(x + v.params.slidesPerGroup) : v.slideTo(x)),
                                    "prev" === v.swipeDirection && (I > 1 - v.params.longSwipesRatio ? v.slideTo(x + v.params.slidesPerGroup) : v.slideTo(x))
                            } else {
                                if (!v.params.shortSwipes) return void v.slideTo(v.activeIndex);
                                "next" === v.swipeDirection && v.slideTo(x + v.params.slidesPerGroup),
                                    "prev" === v.swipeDirection && v.slideTo(x)
                            }
                        }
                    },
                    v._slideTo = function(e, a) {
                        return v.slideTo(e, a, !0, !0)
                    },
                    v.slideTo = function(e, a, t, s) {
                        "undefined" == typeof t && (t = !0),
                            "undefined" == typeof e && (e = 0),
                            0 > e && (e = 0),
                            v.snapIndex = Math.floor(e / v.params.slidesPerGroup),
                            v.snapIndex >= v.snapGrid.length && (v.snapIndex = v.snapGrid.length - 1);
                        var i = -v.snapGrid[v.snapIndex];
                        v.params.autoplay && v.autoplaying && (s || !v.params.autoplayDisableOnInteraction ? v.pauseAutoplay(a) : v.stopAutoplay()),
                            v.updateProgress(i);
                        for (var n = 0; n < v.slidesGrid.length; n++) - Math.floor(100 * i) >= Math.floor(100 * v.slidesGrid[n]) && (e = n);
                        if (!v.params.allowSwipeToNext && i < v.translate && i < v.minTranslate()) return ! 1;
                        if (!v.params.allowSwipeToPrev && i > v.translate && i > v.maxTranslate() && (v.activeIndex || 0) !== e) return ! 1;
                        if ("undefined" == typeof a && (a = v.params.speed), v.previousIndex = v.activeIndex || 0, v.activeIndex = e, i === v.translate) return v.updateClasses(),
                            !1;
                        v.updateClasses(),
                            v.onTransitionStart(t);
                        r() ? i: 0,
                            r() ? 0 : i;
                        return 0 === a ? (v.setWrapperTransition(0), v.setWrapperTranslate(i), v.onTransitionEnd(t)) : (v.setWrapperTransition(a), v.setWrapperTranslate(i), v.animating || (v.animating = !0, v.wrapper.transitionEnd(function() {
                            v && v.onTransitionEnd(t)
                        }))),
                            !0
                    },
                    v.onTransitionStart = function(e) {
                        "undefined" == typeof e && (e = !0),
                            v.lazy && v.lazy.onTransitionStart(),
                            e && (v.emit("onTransitionStart", v), v.activeIndex !== v.previousIndex && v.emit("onSlideChangeStart", v))
                    },
                    v.onTransitionEnd = function(e) {
                        v.animating = !1,
                            v.setWrapperTransition(0),
                            "undefined" == typeof e && (e = !0),
                            v.lazy && v.lazy.onTransitionEnd(),
                            e && (v.emit("onTransitionEnd", v), v.activeIndex !== v.previousIndex && v.emit("onSlideChangeEnd", v)),
                            v.params.hashnav && v.hashnav && v.hashnav.setHash()
                    },
                    v.slideNext = function(e, a, t) {
                        if (v.params.loop) {
                            if (v.animating) return ! 1;
                            v.fixLoop();
                            v.container[0].clientLeft;
                            return v.slideTo(v.activeIndex + v.params.slidesPerGroup, a, e, t)
                        }
                        return v.slideTo(v.activeIndex + v.params.slidesPerGroup, a, e, t)
                    },
                    v._slideNext = function(e) {
                        return v.slideNext(!0, e, !0)
                    },
                    v.slidePrev = function(e, a, t) {
                        if (v.params.loop) {
                            if (v.animating) return ! 1;
                            v.fixLoop();
                            v.container[0].clientLeft;
                            return v.slideTo(v.activeIndex - 1, a, e, t)
                        }
                        return v.slideTo(v.activeIndex - 1, a, e, t)
                    },
                    v._slidePrev = function(e) {
                        return v.slidePrev(!0, e, !0)
                    },
                    v.slideReset = function(e, a, t) {
                        return v.slideTo(v.activeIndex, a, e)
                    },
                    v.setWrapperTransition = function(e, a) {
                        v.wrapper.transition(e),
                            "slide" !== v.params.effect && v.effects[v.params.effect] && v.effects[v.params.effect].setTransition(e),
                            v.params.parallax && v.parallax && v.parallax.setTransition(e),
                            v.params.scrollbar && v.scrollbar && v.scrollbar.setTransition(e),
                            v.params.control && v.controller && v.controller.setTransition(e, a),
                            v.emit("onSetTransition", v, e)
                    },
                    v.setWrapperTranslate = function(e, a, t) {
                        var s = 0,
                            n = 0,
                            o = 0;
                        r() ? s = v.rtl ? -e: e: n = e,
                            v.params.roundLengths && (s = i(s), n = i(n)),
                            v.params.virtualTranslate || (v.support.transforms3d ? v.wrapper.transform("translate3d(" + s + "px, " + n + "px, " + o + "px)") : v.wrapper.transform("translate(" + s + "px, " + n + "px)")),
                            v.translate = r() ? s: n,
                            a && v.updateActiveIndex(),
                            "slide" !== v.params.effect && v.effects[v.params.effect] && v.effects[v.params.effect].setTranslate(v.translate),
                            v.params.parallax && v.parallax && v.parallax.setTranslate(v.translate),
                            v.params.scrollbar && v.scrollbar && v.scrollbar.setTranslate(v.translate),
                            v.params.control && v.controller && v.controller.setTranslate(v.translate, t),
                            v.emit("onSetTranslate", v, v.translate)
                    },
                    v.getTranslate = function(e, a) {
                        var t, s, r, i;
                        return "undefined" == typeof a && (a = "x"),
                            v.params.virtualTranslate ? v.rtl ? -v.translate: v.translate: (r = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? (s = r.transform || r.webkitTransform, s.split(",").length > 6 && (s = s.split(", ").map(function(e) {
                                return e.replace(",", ".")
                            }).join(", ")), i = new window.WebKitCSSMatrix("none" === s ? "": s)) : (i = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), t = i.toString().split(",")), "x" === a && (s = window.WebKitCSSMatrix ? i.m41: 16 === t.length ? parseFloat(t[12]) : parseFloat(t[4])), "y" === a && (s = window.WebKitCSSMatrix ? i.m42: 16 === t.length ? parseFloat(t[13]) : parseFloat(t[5])), v.rtl && s && (s = -s), s || 0)
                    },
                    v.getWrapperTranslate = function(e) {
                        return "undefined" == typeof e && (e = r() ? "x": "y"),
                            v.getTranslate(v.wrapper[0], e)
                    },
                    v.observers = [], v.initObservers = function() {
                    if (v.params.observeParents) for (var e = v.container.parents(), a = 0; a < e.length; a++) l(e[a]);
                    l(v.container[0], {
                        childList: !1
                    }),
                        l(v.wrapper[0], {
                            attributes: !1
                        })
                },
                    v.disconnectObservers = function() {
                        for (var e = 0; e < v.observers.length; e++) v.observers[e].disconnect();
                        v.observers = []
                    },
                    v.createLoop = function() {
                        v.wrapper.children("." + v.params.slideClass + "." + v.params.slideDuplicateClass).remove();
                        var e = v.wrapper.children("." + v.params.slideClass);
                        "auto" !== v.params.slidesPerView || v.params.loopedSlides || (v.params.loopedSlides = e.length),
                            v.loopedSlides = parseInt(v.params.loopedSlides || v.params.slidesPerView, 10),
                            v.loopedSlides = v.loopedSlides + v.params.loopAdditionalSlides,
                            v.loopedSlides > e.length && (v.loopedSlides = e.length);
                        var t, s = [],
                            r = [];
                        for (e.each(function(t, i) {
                            var n = a(this);
                            t < v.loopedSlides && r.push(i),
                                t < e.length && t >= e.length - v.loopedSlides && s.push(i),
                                n.attr("data-swiper-slide-index", t)
                        }), t = 0; t < r.length; t++) v.wrapper.append(a(r[t].cloneNode(!0)).addClass(v.params.slideDuplicateClass));
                        for (t = s.length - 1; t >= 0; t--) v.wrapper.prepend(a(s[t].cloneNode(!0)).addClass(v.params.slideDuplicateClass))
                    },
                    v.destroyLoop = function() {
                        v.wrapper.children("." + v.params.slideClass + "." + v.params.slideDuplicateClass).remove(),
                            v.slides.removeAttr("data-swiper-slide-index")
                    },
                    v.fixLoop = function() {
                        var e;
                        v.activeIndex < v.loopedSlides ? (e = v.slides.length - 3 * v.loopedSlides + v.activeIndex, e += v.loopedSlides, v.slideTo(e, 0, !1, !0)) : ("auto" === v.params.slidesPerView && v.activeIndex >= 2 * v.loopedSlides || v.activeIndex > v.slides.length - 2 * v.params.slidesPerView) && (e = -v.slides.length + v.activeIndex + v.loopedSlides, e += v.loopedSlides, v.slideTo(e, 0, !1, !0))
                    },
                    v.appendSlide = function(e) {
                        if (v.params.loop && v.destroyLoop(), "object" == typeof e && e.length) for (var a = 0; a < e.length; a++) e[a] && v.wrapper.append(e[a]);
                        else v.wrapper.append(e);
                        v.params.loop && v.createLoop(),
                            v.params.observer && v.support.observer || v.update(!0)
                    },
                    v.prependSlide = function(e) {
                        v.params.loop && v.destroyLoop();
                        var a = v.activeIndex + 1;
                        if ("object" == typeof e && e.length) {
                            for (var t = 0; t < e.length; t++) e[t] && v.wrapper.prepend(e[t]);
                            a = v.activeIndex + e.length
                        } else v.wrapper.prepend(e);
                        v.params.loop && v.createLoop(),
                            v.params.observer && v.support.observer || v.update(!0),
                            v.slideTo(a, 0, !1)
                    },
                    v.removeSlide = function(e) {
                        v.params.loop && (v.destroyLoop(), v.slides = v.wrapper.children("." + v.params.slideClass));
                        var a, t = v.activeIndex;
                        if ("object" == typeof e && e.length) {
                            for (var s = 0; s < e.length; s++) a = e[s],
                                v.slides[a] && v.slides.eq(a).remove(),
                                t > a && t--;
                            t = Math.max(t, 0)
                        } else a = e,
                            v.slides[a] && v.slides.eq(a).remove(),
                            t > a && t--,
                            t = Math.max(t, 0);
                        v.params.loop && v.createLoop(),
                            v.params.observer && v.support.observer || v.update(!0),
                            v.params.loop ? v.slideTo(t + v.loopedSlides, 0, !1) : v.slideTo(t, 0, !1)
                    },
                    v.removeAllSlides = function() {
                        for (var e = [], a = 0; a < v.slides.length; a++) e.push(a);
                        v.removeSlide(e)
                    },
                    v.effects = {
                        fade: {
                            setTranslate: function() {
                                for (var e = 0; e < v.slides.length; e++) {
                                    var a = v.slides.eq(e),
                                        t = a[0].swiperSlideOffset,
                                        s = -t;
                                    v.params.virtualTranslate || (s -= v.translate);
                                    var i = 0;
                                    r() || (i = s, s = 0);
                                    var n = v.params.fade.crossFade ? Math.max(1 - Math.abs(a[0].progress), 0) : 1 + Math.min(Math.max(a[0].progress, -1), 0);
                                    a.css({
                                        opacity: n
                                    }).transform("translate3d(" + s + "px, " + i + "px, 0px)")
                                }
                            },
                            setTransition: function(e) {
                                if (v.slides.transition(e), v.params.virtualTranslate && 0 !== e) {
                                    var a = !1;
                                    v.slides.transitionEnd(function() {
                                        if (!a && v) {
                                            a = !0,
                                                v.animating = !1;
                                            for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], t = 0; t < e.length; t++) v.wrapper.trigger(e[t])
                                        }
                                    })
                                }
                            }
                        },
                        cube: {
                            setTranslate: function() {
                                var e, t = 0;
                                v.params.cube.shadow && (r() ? (e = v.wrapper.find(".swiper-cube-shadow"), 0 === e.length && (e = a('<div class="swiper-cube-shadow"></div>'), v.wrapper.append(e)), e.css({
                                    height: v.width + "px"
                                })) : (e = v.container.find(".swiper-cube-shadow"), 0 === e.length && (e = a('<div class="swiper-cube-shadow"></div>'), v.container.append(e))));
                                for (var s = 0; s < v.slides.length; s++) {
                                    var i = v.slides.eq(s),
                                        n = 90 * s,
                                        o = Math.floor(n / 360);
                                    v.rtl && (n = -n, o = Math.floor( - n / 360));
                                    var l = Math.max(Math.min(i[0].progress, 1), -1),
                                        p = 0,
                                        d = 0,
                                        c = 0;
                                    s % 4 === 0 ? (p = 4 * -o * v.size, c = 0) : (s - 1) % 4 === 0 ? (p = 0, c = 4 * -o * v.size) : (s - 2) % 4 === 0 ? (p = v.size + 4 * o * v.size, c = v.size) : (s - 3) % 4 === 0 && (p = -v.size, c = 3 * v.size + 4 * v.size * o),
                                        v.rtl && (p = -p),
                                        r() || (d = p, p = 0);
                                    var u = "rotateX(" + (r() ? 0 : -n) + "deg) rotateY(" + (r() ? n: 0) + "deg) translate3d(" + p + "px, " + d + "px, " + c + "px)";
                                    if (1 >= l && l > -1 && (t = 90 * s + 90 * l, v.rtl && (t = 90 * -s - 90 * l)), i.transform(u), v.params.cube.slideShadows) {
                                        var m = r() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"),
                                            f = r() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");
                                        0 === m.length && (m = a('<div class="swiper-slide-shadow-' + (r() ? "left": "top") + '"></div>'), i.append(m)),
                                            0 === f.length && (f = a('<div class="swiper-slide-shadow-' + (r() ? "right": "bottom") + '"></div>'), i.append(f));
                                        i[0].progress;
                                        m.length && (m[0].style.opacity = -i[0].progress),
                                            f.length && (f[0].style.opacity = i[0].progress)
                                    }
                                }
                                if (v.wrapper.css({
                                    "-webkit-transform-origin": "50% 50% -" + v.size / 2 + "px",
                                    "-moz-transform-origin": "50% 50% -" + v.size / 2 + "px",
                                    "-ms-transform-origin": "50% 50% -" + v.size / 2 + "px",
                                    "transform-origin": "50% 50% -" + v.size / 2 + "px"
                                }), v.params.cube.shadow) if (r()) e.transform("translate3d(0px, " + (v.width / 2 + v.params.cube.shadowOffset) + "px, " + -v.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + v.params.cube.shadowScale + ")");
                                else {
                                    var h = Math.abs(t) - 90 * Math.floor(Math.abs(t) / 90),
                                        g = 1.5 - (Math.sin(2 * h * Math.PI / 360) / 2 + Math.cos(2 * h * Math.PI / 360) / 2),
                                        w = v.params.cube.shadowScale,
                                        y = v.params.cube.shadowScale / g,
                                        b = v.params.cube.shadowOffset;
                                    e.transform("scale3d(" + w + ", 1, " + y + ") translate3d(0px, " + (v.height / 2 + b) + "px, " + -v.height / 2 / y + "px) rotateX(-90deg)")
                                }
                                var T = v.isSafari || v.isUiWebView ? -v.size / 2 : 0;
                                v.wrapper.transform("translate3d(0px,0," + T + "px) rotateX(" + (r() ? 0 : t) + "deg) rotateY(" + (r() ? -t: 0) + "deg)")
                            },
                            setTransition: function(e) {
                                v.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                                    v.params.cube.shadow && !r() && v.container.find(".swiper-cube-shadow").transition(e)
                            }
                        },
                        coverflow: {
                            setTranslate: function() {
                                for (var e = v.translate,
                                         t = r() ? -e + v.width / 2 : -e + v.height / 2, s = r() ? v.params.coverflow.rotate: -v.params.coverflow.rotate, i = v.params.coverflow.depth, n = 0, o = v.slides.length; o > n; n++) {
                                    var l = v.slides.eq(n),
                                        p = v.slidesSizesGrid[n],
                                        d = l[0].swiperSlideOffset,
                                        c = (t - d - p / 2) / p * v.params.coverflow.modifier,
                                        u = r() ? s * c: 0,
                                        m = r() ? 0 : s * c,
                                        f = -i * Math.abs(c),
                                        h = r() ? 0 : v.params.coverflow.stretch * c,
                                        g = r() ? v.params.coverflow.stretch * c: 0;
                                    Math.abs(g) < .001 && (g = 0),
                                        Math.abs(h) < .001 && (h = 0),
                                        Math.abs(f) < .001 && (f = 0),
                                        Math.abs(u) < .001 && (u = 0),
                                        Math.abs(m) < .001 && (m = 0);
                                    var w = "translate3d(" + g + "px," + h + "px," + f + "px)  rotateX(" + m + "deg) rotateY(" + u + "deg)";
                                    if (l.transform(w), l[0].style.zIndex = -Math.abs(Math.round(c)) + 1, v.params.coverflow.slideShadows) {
                                        var y = r() ? l.find(".swiper-slide-shadow-left") : l.find(".swiper-slide-shadow-top"),
                                            b = r() ? l.find(".swiper-slide-shadow-right") : l.find(".swiper-slide-shadow-bottom");
                                        0 === y.length && (y = a('<div class="swiper-slide-shadow-' + (r() ? "left": "top") + '"></div>'), l.append(y)),
                                            0 === b.length && (b = a('<div class="swiper-slide-shadow-' + (r() ? "right": "bottom") + '"></div>'), l.append(b)),
                                            y.length && (y[0].style.opacity = c > 0 ? c: 0),
                                            b.length && (b[0].style.opacity = -c > 0 ? -c: 0)
                                    }
                                }
                                if (v.browser.ie) {
                                    var T = v.wrapper[0].style;
                                    T.perspectiveOrigin = t + "px 50%"
                                }
                            },
                            setTransition: function(e) {
                                v.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                            }
                        }
                    },
                    v.lazy = {
                        initialImageLoaded: !1,
                        loadImageInSlide: function(e, t) {
                            if ("undefined" != typeof e && ("undefined" == typeof t && (t = !0), 0 !== v.slides.length)) {
                                var s = v.slides.eq(e),
                                    r = s.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)"); ! s.hasClass("swiper-lazy") || s.hasClass("swiper-lazy-loaded") || s.hasClass("swiper-lazy-loading") || (r = r.add(s[0])),
                                    0 !== r.length && r.each(function() {
                                    var e = a(this);
                                    e.addClass("swiper-lazy-loading");
                                    var r = e.attr("data-background"),
                                        i = e.attr("data-src"),
                                        n = e.attr("data-srcset");
                                    v.loadImage(e[0], i || r, n, !1,
                                        function() {
                                            if (r ? (e.css("background-image", "url(" + r + ")"), e.removeAttr("data-background")) : (n && (e.attr("srcset", n), e.removeAttr("data-srcset")), i && (e.attr("src", i), e.removeAttr("data-src"))), e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"), s.find(".swiper-lazy-preloader, .preloader").remove(), v.params.loop && t) {
                                                var a = s.attr("data-swiper-slide-index");
                                                if (s.hasClass(v.params.slideDuplicateClass)) {
                                                    var o = v.wrapper.children('[data-swiper-slide-index="' + a + '"]:not(.' + v.params.slideDuplicateClass + ")");
                                                    v.lazy.loadImageInSlide(o.index(), !1)
                                                } else {
                                                    var l = v.wrapper.children("." + v.params.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]');
                                                    v.lazy.loadImageInSlide(l.index(), !1)
                                                }
                                            }
                                            v.emit("onLazyImageReady", v, s[0], e[0])
                                        }),
                                        v.emit("onLazyImageLoad", v, s[0], e[0])
                                })
                            }
                        },
                        load: function() {
                            var e;
                            if (v.params.watchSlidesVisibility) v.wrapper.children("." + v.params.slideVisibleClass).each(function() {
                                v.lazy.loadImageInSlide(a(this).index())
                            });
                            else if (v.params.slidesPerView > 1) for (e = v.activeIndex; e < v.activeIndex + v.params.slidesPerView; e++) v.slides[e] && v.lazy.loadImageInSlide(e);
                            else v.lazy.loadImageInSlide(v.activeIndex);
                            if (v.params.lazyLoadingInPrevNext) if (v.params.slidesPerView > 1) {
                                for (e = v.activeIndex + v.params.slidesPerView; e < v.activeIndex + v.params.slidesPerView + v.params.slidesPerView; e++) v.slides[e] && v.lazy.loadImageInSlide(e);
                                for (e = v.activeIndex - v.params.slidesPerView; e < v.activeIndex; e++) v.slides[e] && v.lazy.loadImageInSlide(e)
                            } else {
                                var t = v.wrapper.children("." + v.params.slideNextClass);
                                t.length > 0 && v.lazy.loadImageInSlide(t.index());
                                var s = v.wrapper.children("." + v.params.slidePrevClass);
                                s.length > 0 && v.lazy.loadImageInSlide(s.index())
                            }
                        },
                        onTransitionStart: function() {
                            v.params.lazyLoading && (v.params.lazyLoadingOnTransitionStart || !v.params.lazyLoadingOnTransitionStart && !v.lazy.initialImageLoaded) && v.lazy.load()
                        },
                        onTransitionEnd: function() {
                            v.params.lazyLoading && !v.params.lazyLoadingOnTransitionStart && v.lazy.load()
                        }
                    },
                    v.scrollbar = {
                        isTouched: !1,
                        setDragPosition: function(e) {
                            var a = v.scrollbar,
                                t = r() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX: e.pageX || e.clientX: "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY: e.pageY || e.clientY,
                                s = t - a.track.offset()[r() ? "left": "top"] - a.dragSize / 2,
                                i = -v.minTranslate() * a.moveDivider,
                                n = -v.maxTranslate() * a.moveDivider;
                            i > s ? s = i: s > n && (s = n),
                                s = -s / a.moveDivider,
                                v.updateProgress(s),
                                v.setWrapperTranslate(s, !0)
                        },
                        dragStart: function(e) {
                            var a = v.scrollbar;
                            a.isTouched = !0,
                                e.preventDefault(),
                                e.stopPropagation(),
                                a.setDragPosition(e),
                                clearTimeout(a.dragTimeout),
                                a.track.transition(0),
                                v.params.scrollbarHide && a.track.css("opacity", 1),
                                v.wrapper.transition(100),
                                a.drag.transition(100),
                                v.emit("onScrollbarDragStart", v)
                        },
                        dragMove: function(e) {
                            var a = v.scrollbar;
                            a.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, a.setDragPosition(e), v.wrapper.transition(0), a.track.transition(0), a.drag.transition(0), v.emit("onScrollbarDragMove", v))
                        },
                        dragEnd: function(e) {
                            var a = v.scrollbar;
                            a.isTouched && (a.isTouched = !1, v.params.scrollbarHide && (clearTimeout(a.dragTimeout), a.dragTimeout = setTimeout(function() {
                                    a.track.css("opacity", 0),
                                        a.track.transition(400)
                                },
                                1e3)), v.emit("onScrollbarDragEnd", v), v.params.scrollbarSnapOnRelease && v.slideReset())
                        },
                        enableDraggable: function() {
                            var e = v.scrollbar,
                                t = v.support.touch ? e.track: document;
                            a(e.track).on(v.touchEvents.start, e.dragStart),
                                a(t).on(v.touchEvents.move, e.dragMove),
                                a(t).on(v.touchEvents.end, e.dragEnd)
                        },
                        disableDraggable: function() {
                            var e = v.scrollbar,
                                t = v.support.touch ? e.track: document;
                            a(e.track).off(v.touchEvents.start, e.dragStart),
                                a(t).off(v.touchEvents.move, e.dragMove),
                                a(t).off(v.touchEvents.end, e.dragEnd)
                        },
                        set: function() {
                            if (v.params.scrollbar) {
                                var e = v.scrollbar;
                                e.track = a(v.params.scrollbar),
                                    e.drag = e.track.find(".swiper-scrollbar-drag"),
                                    0 === e.drag.length && (e.drag = a('<div class="swiper-scrollbar-drag"></div>'), e.track.append(e.drag)),
                                    e.drag[0].style.width = "",
                                    e.drag[0].style.height = "",
                                    e.trackSize = r() ? e.track[0].offsetWidth: e.track[0].offsetHeight,
                                    e.divider = v.size / v.virtualSize,
                                    e.moveDivider = e.divider * (e.trackSize / v.size),
                                    e.dragSize = e.trackSize * e.divider,
                                    r() ? e.drag[0].style.width = e.dragSize + "px": e.drag[0].style.height = e.dragSize + "px",
                                        e.divider >= 1 ? e.track[0].style.display = "none": e.track[0].style.display = "",
                                    v.params.scrollbarHide && (e.track[0].style.opacity = 0)
                            }
                        },
                        setTranslate: function() {
                            if (v.params.scrollbar) {
                                var e, a = v.scrollbar,
                                    t = (v.translate || 0, a.dragSize);
                                e = (a.trackSize - a.dragSize) * v.progress,
                                        v.rtl && r() ? (e = -e, e > 0 ? (t = a.dragSize - e, e = 0) : -e + a.dragSize > a.trackSize && (t = a.trackSize + e)) : 0 > e ? (t = a.dragSize + e, e = 0) : e + a.dragSize > a.trackSize && (t = a.trackSize - e),
                                    r() ? (v.support.transforms3d ? a.drag.transform("translate3d(" + e + "px, 0, 0)") : a.drag.transform("translateX(" + e + "px)"), a.drag[0].style.width = t + "px") : (v.support.transforms3d ? a.drag.transform("translate3d(0px, " + e + "px, 0)") : a.drag.transform("translateY(" + e + "px)"), a.drag[0].style.height = t + "px"),
                                    v.params.scrollbarHide && (clearTimeout(a.timeout), a.track[0].style.opacity = 1, a.timeout = setTimeout(function() {
                                        a.track[0].style.opacity = 0,
                                            a.track.transition(400)
                                    },
                                    1e3))
                            }
                        },
                        setTransition: function(e) {
                            v.params.scrollbar && v.scrollbar.drag.transition(e)
                        }
                    },
                    v.controller = {
                        LinearSpline: function(e, a) {
                            this.x = e,
                                this.y = a,
                                this.lastIndex = e.length - 1;
                            var t, s;
                            this.x.length;
                            this.interpolate = function(e) {
                                return e ? (s = r(this.x, e), t = s - 1, (e - this.x[t]) * (this.y[s] - this.y[t]) / (this.x[s] - this.x[t]) + this.y[t]) : 0
                            };
                            var r = function() {
                                var e, a, t;
                                return function(s, r) {
                                    for (a = -1, e = s.length; e - a > 1;) s[t = e + a >> 1] <= r ? a = t: e = t;
                                    return e
                                }
                            } ()
                        },
                        getInterpolateFunction: function(e) {
                            v.controller.spline || (v.controller.spline = v.params.loop ? new v.controller.LinearSpline(v.slidesGrid, e.slidesGrid) : new v.controller.LinearSpline(v.snapGrid, e.snapGrid))
                        },
                        setTranslate: function(e, a) {
                            function s(a) {
                                e = a.rtl && "horizontal" === a.params.direction ? -v.translate: v.translate,
                                    "slide" === v.params.controlBy && (v.controller.getInterpolateFunction(a), i = -v.controller.spline.interpolate( - e)),
                                    i && "container" !== v.params.controlBy || (r = (a.maxTranslate() - a.minTranslate()) / (v.maxTranslate() - v.minTranslate()), i = (e - v.minTranslate()) * r + a.minTranslate()),
                                    v.params.controlInverse && (i = a.maxTranslate() - i),
                                    a.updateProgress(i),
                                    a.setWrapperTranslate(i, !1, v),
                                    a.updateActiveIndex()
                            }
                            var r, i, n = v.params.control;
                            if (v.isArray(n)) for (var o = 0; o < n.length; o++) n[o] !== a && n[o] instanceof t && s(n[o]);
                            else n instanceof t && a !== n && s(n)
                        },
                        setTransition: function(e, a) {
                            function s(a) {
                                a.setWrapperTransition(e, v),
                                    0 !== e && (a.onTransitionStart(), a.wrapper.transitionEnd(function() {
                                    i && (a.params.loop && "slide" === v.params.controlBy && a.fixLoop(), a.onTransitionEnd())
                                }))
                            }
                            var r, i = v.params.control;
                            if (v.isArray(i)) for (r = 0; r < i.length; r++) i[r] !== a && i[r] instanceof t && s(i[r]);
                            else i instanceof t && a !== i && s(i)
                        }
                    },
                    v.hashnav = {
                        init: function() {
                            if (v.params.hashnav) {
                                v.hashnav.initialized = !0;
                                var e = document.location.hash.replace("#", "");
                                if (e) for (var a = 0,
                                                t = 0,
                                                s = v.slides.length; s > t; t++) {
                                    var r = v.slides.eq(t),
                                        i = r.attr("data-hash");
                                    if (i === e && !r.hasClass(v.params.slideDuplicateClass)) {
                                        var n = r.index();
                                        v.slideTo(n, a, v.params.runCallbacksOnInit, !0)
                                    }
                                }
                            }
                        },
                        setHash: function() {
                            v.hashnav.initialized && v.params.hashnav && (document.location.hash = v.slides.eq(v.activeIndex).attr("data-hash") || "")
                        }
                    },
                    v.disableKeyboardControl = function() {
                        a(document).off("keydown", p)
                    },
                    v.enableKeyboardControl = function() {
                        a(document).on("keydown", p)
                    },
                    v.mousewheel = {
                        event: !1,
                        lastScrollTime: (new window.Date).getTime()
                    },
                    v.params.mousewheelControl) {
                    try {
                        new window.WheelEvent("wheel"),
                            v.mousewheel.event = "wheel"
                    } catch(G) {}
                    v.mousewheel.event || void 0 === document.onmousewheel || (v.mousewheel.event = "mousewheel"),
                        v.mousewheel.event || (v.mousewheel.event = "DOMMouseScroll")
                }
                v.disableMousewheelControl = function() {
                    return v.mousewheel.event ? (v.container.off(v.mousewheel.event, d), !0) : !1
                },
                    v.enableMousewheelControl = function() {
                        return v.mousewheel.event ? (v.container.on(v.mousewheel.event, d), !0) : !1
                    },
                    v.parallax = {
                        setTranslate: function() {
                            v.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                c(this, v.progress)
                            }),
                                v.slides.each(function() {
                                    var e = a(this);
                                    e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                        var a = Math.min(Math.max(e[0].progress, -1), 1);
                                        c(this, a)
                                    })
                                })
                        },
                        setTransition: function(e) {
                            "undefined" == typeof e && (e = v.params.speed),
                                v.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                    var t = a(this),
                                        s = parseInt(t.attr("data-swiper-parallax-duration"), 10) || e;
                                    0 === e && (s = 0),
                                        t.transition(s)
                                })
                        }
                    },
                    v._plugins = [];
                for (var B in v.plugins) {
                    var O = v.plugins[B](v, v.params[B]);
                    O && v._plugins.push(O)
                }
                return v.callPlugins = function(e) {
                    for (var a = 0; a < v._plugins.length; a++) e in v._plugins[a] && v._plugins[a][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                },
                    v.emitterEventListeners = {},
                    v.emit = function(e) {
                        v.params[e] && v.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                        var a;
                        if (v.emitterEventListeners[e]) for (a = 0; a < v.emitterEventListeners[e].length; a++) v.emitterEventListeners[e][a](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                        v.callPlugins && v.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                    },
                    v.on = function(e, a) {
                        return e = u(e),
                            v.emitterEventListeners[e] || (v.emitterEventListeners[e] = []),
                            v.emitterEventListeners[e].push(a),
                            v
                    },
                    v.off = function(e, a) {
                        var t;
                        if (e = u(e), "undefined" == typeof a) return v.emitterEventListeners[e] = [],
                            v;
                        if (v.emitterEventListeners[e] && 0 !== v.emitterEventListeners[e].length) {
                            for (t = 0; t < v.emitterEventListeners[e].length; t++) v.emitterEventListeners[e][t] === a && v.emitterEventListeners[e].splice(t, 1);
                            return v
                        }
                    },
                    v.once = function(e, a) {
                        e = u(e);
                        var t = function() {
                            a(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]),
                                v.off(e, t)
                        };
                        return v.on(e, t),
                            v
                    },
                    v.a11y = {
                        makeFocusable: function(e) {
                            return e.attr("tabIndex", "0"),
                                e
                        },
                        addRole: function(e, a) {
                            return e.attr("role", a),
                                e
                        },
                        addLabel: function(e, a) {
                            return e.attr("aria-label", a),
                                e
                        },
                        disable: function(e) {
                            return e.attr("aria-disabled", !0),
                                e
                        },
                        enable: function(e) {
                            return e.attr("aria-disabled", !1),
                                e
                        },
                        onEnterKey: function(e) {
                            13 === e.keyCode && (a(e.target).is(v.params.nextButton) ? (v.onClickNext(e), v.isEnd ? v.a11y.notify(v.params.lastSlideMessage) : v.a11y.notify(v.params.nextSlideMessage)) : a(e.target).is(v.params.prevButton) && (v.onClickPrev(e), v.isBeginning ? v.a11y.notify(v.params.firstSlideMessage) : v.a11y.notify(v.params.prevSlideMessage)), a(e.target).is("." + v.params.bulletClass) && a(e.target)[0].click())
                        },
                        liveRegion: a('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
                        notify: function(e) {
                            var a = v.a11y.liveRegion;
                            0 !== a.length && (a.html(""), a.html(e))
                        },
                        init: function() {
                            if (v.params.nextButton) {
                                var e = a(v.params.nextButton);
                                v.a11y.makeFocusable(e),
                                    v.a11y.addRole(e, "button"),
                                    v.a11y.addLabel(e, v.params.nextSlideMessage)
                            }
                            if (v.params.prevButton) {
                                var t = a(v.params.prevButton);
                                v.a11y.makeFocusable(t),
                                    v.a11y.addRole(t, "button"),
                                    v.a11y.addLabel(t, v.params.prevSlideMessage)
                            }
                            a(v.container).append(v.a11y.liveRegion)
                        },
                        initPagination: function() {
                            v.params.pagination && v.params.paginationClickable && v.bullets && v.bullets.length && v.bullets.each(function() {
                                var e = a(this);
                                v.a11y.makeFocusable(e),
                                    v.a11y.addRole(e, "button"),
                                    v.a11y.addLabel(e, v.params.paginationBulletMessage.replace(/{{index}}/, e.index() + 1))
                            })
                        },
                        destroy: function() {
                            v.a11y.liveRegion && v.a11y.liveRegion.length > 0 && v.a11y.liveRegion.remove()
                        }
                    },
                    v.init = function() {
                        v.params.loop && v.createLoop(),
                            v.updateContainerSize(),
                            v.updateSlidesSize(),
                            v.updatePagination(),
                            v.params.scrollbar && v.scrollbar && (v.scrollbar.set(), v.params.scrollbarDraggable && v.scrollbar.enableDraggable()),
                            "slide" !== v.params.effect && v.effects[v.params.effect] && (v.params.loop || v.updateProgress(), v.effects[v.params.effect].setTranslate()),
                            v.params.loop ? v.slideTo(v.params.initialSlide + v.loopedSlides, 0, v.params.runCallbacksOnInit) : (v.slideTo(v.params.initialSlide, 0, v.params.runCallbacksOnInit), 0 === v.params.initialSlide && (v.parallax && v.params.parallax && v.parallax.setTranslate(), v.lazy && v.params.lazyLoading && (v.lazy.load(), v.lazy.initialImageLoaded = !0))),
                            v.attachEvents(),
                            v.params.observer && v.support.observer && v.initObservers(),
                            v.params.preloadImages && !v.params.lazyLoading && v.preloadImages(),
                            v.params.autoplay && v.startAutoplay(),
                            v.params.keyboardControl && v.enableKeyboardControl && v.enableKeyboardControl(),
                            v.params.mousewheelControl && v.enableMousewheelControl && v.enableMousewheelControl(),
                            v.params.hashnav && v.hashnav && v.hashnav.init(),
                            v.params.a11y && v.a11y && v.a11y.init(),
                            v.emit("onInit", v)
                    },
                    v.cleanupStyles = function() {
                        v.container.removeClass(v.classNames.join(" ")).removeAttr("style"),
                            v.wrapper.removeAttr("style"),
                            v.slides && v.slides.length && v.slides.removeClass([v.params.slideVisibleClass, v.params.slideActiveClass, v.params.slideNextClass, v.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),
                            v.paginationContainer && v.paginationContainer.length && v.paginationContainer.removeClass(v.params.paginationHiddenClass),
                            v.bullets && v.bullets.length && v.bullets.removeClass(v.params.bulletActiveClass),
                            v.params.prevButton && a(v.params.prevButton).removeClass(v.params.buttonDisabledClass),
                            v.params.nextButton && a(v.params.nextButton).removeClass(v.params.buttonDisabledClass),
                            v.params.scrollbar && v.scrollbar && (v.scrollbar.track && v.scrollbar.track.length && v.scrollbar.track.removeAttr("style"), v.scrollbar.drag && v.scrollbar.drag.length && v.scrollbar.drag.removeAttr("style"))
                    },
                    v.destroy = function(e, a) {
                        v.detachEvents(),
                            v.stopAutoplay(),
                            v.params.scrollbar && v.scrollbar && v.params.scrollbarDraggable && v.scrollbar.disableDraggable(),
                            v.params.loop && v.destroyLoop(),
                            a && v.cleanupStyles(),
                            v.disconnectObservers(),
                            v.params.keyboardControl && v.disableKeyboardControl && v.disableKeyboardControl(),
                            v.params.mousewheelControl && v.disableMousewheelControl && v.disableMousewheelControl(),
                            v.params.a11y && v.a11y && v.a11y.destroy(),
                            v.emit("onDestroy"),
                            e !== !1 && (v = null)
                    },
                    v.init(),
                    v
            }
        };
        t.prototype = {
            isSafari: function() {
                var e = navigator.userAgent.toLowerCase();
                return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
            } (),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
            isArray: function(e) {
                return "[object Array]" === Object.prototype.toString.apply(e)
            },
            browser: {
                ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
                ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1
            },
            device: function() {
                var e = navigator.userAgent,
                    a = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                    t = e.match(/(iPad).*OS\s([\d_]+)/),
                    s = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                    r = !t && e.match(/(iPhone\sOS)\s([\d_]+)/);
                return {
                    ios: t || r || s,
                    android: a
                }
            } (),
            support: {
                touch: window.Modernizr && Modernizr.touch === !0 ||
                    function() {
                        return !! ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
                    } (),
                transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 ||
                    function() {
                        var e = document.createElement("div").style;
                        return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
                    } (),
                flexbox: function() {
                    for (var e = document.createElement("div").style, a = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), t = 0; t < a.length; t++) if (a[t] in e) return ! 0
                } (),
                observer: function() {
                    return "MutationObserver" in window || "WebkitMutationObserver" in window
                } ()
            },
            plugins: {}
        };
        for (var s = ["jQuery", "Zepto", "Dom7"], r = 0; r < s.length; r++) window[s[r]] && e(window[s[r]]);
        var i;
        i = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery: Dom7,
            i && ("transitionEnd" in i.fn || (i.fn.transitionEnd = function(e) {
            function a(i) {
                if (i.target === this) for (e.call(this, i), t = 0; t < s.length; t++) r.off(s[t], a)
            }
            var t, s = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                r = this;
            if (e) for (t = 0; t < s.length; t++) r.on(s[t], a);
            return this
        }), "transform" in i.fn || (i.fn.transform = function(e) {
            for (var a = 0; a < this.length; a++) {
                var t = this[a].style;
                t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e
            }
            return this
        }), "transition" in i.fn || (i.fn.transition = function(e) {
            "string" != typeof e && (e += "ms");
            for (var a = 0; a < this.length; a++) {
                var t = this[a].style;
                t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e
            }
            return this
        })),
            window.Swiper = t
    } (),
        "undefined" != typeof module ? module.exports = window.Swiper: "function" == typeof define && define.amd && define([],
    function() {
        "use strict";
        return window.Swiper
    });
//# sourceMappingURL=maps/swiper.jquery.min.js.map
