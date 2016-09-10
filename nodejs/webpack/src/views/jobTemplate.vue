
<template>

<!--Main-Section-->
<div id="swiperH5" class="swiper-container swiper-container-home">
    <div class="swiper-wrapper swiper-wrapper-home">

        <!--One-->
        <div class="swiper-slide slide-middle slide-1">
            <div class="slide-wrap">
                <div class="title">
                    <h5>{{params}}</h5>
                    <h6>免费的手机招聘平台</h6>
                </div>
                <div class="content">
                    <ul class="list-j clr" id="listJoin">
                        <li><div><span>高效</span><img src="../assets/images/jobTemplate/1/man_01.png"></div></li>
                        <li><div><span>并</span><img src="../assets/images/jobTemplate/1/man_02.png"></div></li>
                        <li><div><span>有效</span><img src="../assets/images/jobTemplate/1/man_03.png"></div></li>
                        <li><div><span></span><img src="../assets/images/jobTemplate/1/man_04.png"></div></li>
                        <li><div><span>连接</span><img src="../assets/images/jobTemplate/1/man_05.png"></div></li>
                        <li><div><span></span><img src="../assets/images/jobTemplate/1/man_06.png"></div></li>
                        <li><div><span>求职者</span><img src="../assets/images/jobTemplate/1/man_07.png"></div></li>
                        <li><div><span>与</span><img src="../assets/images/jobTemplate/1/man_08.png"></div></li>
                        <li><div><span>招聘者</span><img src="../assets/images/jobTemplate/1/man_09.png"></div></li>
                    </ul>
                </div>
            </div>
        </div>

        <!--Two-->
        <div class="swiper-slide slide-middle slide-2">
            <div class="slide-wrap">
                <div class="title">
                    <img class="face" src="../assets/images/jobTemplate/2/face.png">
                    <h5><span class="va_m">最新重庆招聘</span><img class="va_m ml_5" height="20" src="../assets/images/jobTemplate/2/icon_sex.png"></h5>
                </div>
                <div class="content">
                    <div class="text">
                        <p>微博@最新重庆招聘 已经运营三年，</p>
                        <p>忠实粉丝&nbsp;&nbsp;<span id="digitNum1">126,000</span></p>
                        <p>月均博文阅读量&nbsp;&nbsp;<span id="digitNum2">2,400,000</span></p>
                    </div>
                </div>
            </div>
        </div>

        <!--Three-->
        <div class="swiper-slide slide-middle slide-3">
            <div class="slide-wrap">
                <div class="title">
                    <h6>早于微博招聘官微@微招聘1年</h6>
                </div>
                <div class="content">
                    <ul class="list-n">
                        <li>
                            <h6>2013 - 01</h6>
                            <p>@最新重庆招聘发布第一条微博信息</p>
                        </li>
                        <li>
                            <h6>2014 - 09</h6>
                            <p>微博粉丝突破10万</p>
                        </li>
                        <li>
                            <h6>2015 - 01</h6>
                            <p>上百万用户好评如潮！</p>
                        </li>
                        <li>
                            <h6>2015 - 12</h6>
                            <p>最新招聘APP正式上线</p>
                            <p>……</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!--Four-->
        <div class="swiper-slide slide-4">
            <div class="slide-wrap">
                <div class="title">
                    <h6>成功帮助500万求职者找到满意工作</h6>
                </div>
                <div class="content">
                    <div class="about-wrap">
                        <div class="swiper-container swiper-container-about" id="swiperAbout">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" style="background-image:require('../assets/images/jobTemplate/4/bg04_01.png')"></div>
                                <div class="swiper-slide" style="background-image:require(../assets/images/jobTemplate/4/bg04_02.png)"></div>
                                <div class="swiper-slide" style="background-image:require(../assets/images/jobTemplate/4/bg04_03.png)"></div>
                                <div class="swiper-slide" style="background-image:require(../assets/images/jobTemplate/4/bg04_04.png)"></div>
                                <div class="swiper-slide" style="background-image:require(../assets/images/jobTemplate/4/bg04_05.png)"></div>
                                <div class="swiper-slide" style="background-image:require(../assets/images/jobTemplate/4/bg04_06.png)"></div>
                                <div class="swiper-slide" style="background-image:require(../assets/images/jobTemplate/4/bg04_07.png)"></div>
                            </div>
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--Five-->
        <div class="swiper-slide slide-middle slide-5">
            <div class="slide-wrap">
                <div class="title">
                    <h6>帮助上万家企业快速找到<br>合适人才</h6>
                </div>
                <div class="content">
                    <ul class="list-a clr" id="lis">
                        <li><span style="background-image:require(../assets/images/jobTemplate/5/1.png);"></span></li>
                        <li><span style="background-image:require(../assets/images/jobTemplate/5/2.png);"></span></li>
                        <li><span style="background-image:require(../assets/images/jobTemplate/5/3.png);"></span></li>
                        <li><span style="background-image:require(../assets/images/jobTemplate/5/4.png);"></span></li>
                        <li><span style="background-image:require(../assets/images/jobTemplate/5/5.png);"></span></li>
                        <li><span style="background-image:require(../assets/images/jobTemplate/5/6.png);"></span></li>
                        <li><span style="background-image:require(../assets/images/jobTemplate/5/7.png);"></span></li>
                        <li><span style="background-image:require(../assets/images/jobTemplate/5/8.png);"></span></li>
                        <li><span style="background-image:require(../assets/images/jobTemplate/5/9.png);"></span></li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</div>

<!--Fixed Icon-->
<div class="home-foot-arrow"><i class="icon-arrow"></i></div>

</template>
<script>



    export default {
            ready (){

require('jquery');
window.jQuery = $;
var Swiper = require('../libs/jobTemplate/swiper.jquery.min');
var CountUp = require('../libs/jobTemplate/countUp.min');

/***Digit num*/
var digit = function(){
    digit.num1.reset();
    digit.num2.reset();
    digit.num1.start();
    digit.num2.start();
};
digit.options = {
    useEasing: true,
    useGrouping: true,
    separator: ',',
    decimal: '.',
    prefix: '',
    suffix: ''
};
digit.num1 =  new CountUp("digitNum1", 0, 126000, 0, 1.5, digit.options);
digit.num2 =  new CountUp("digitNum2", 0, 2400000, 0, 1.5, digit.options);


/***Join line height*/
function joinLineHeight(){
    var _box = $("#listJoin").find("div");
    _box.css("lineHeight", _box.height()+"px");
}


/***Logo cut*/
var compLogoCut = {};
compLogoCut = function(){

    console.log('run!');

    var _box    = $("#lis"),
        _ite    = _box.find("li").find("span"),
        speed   = 3000, //U.ms
        isFsh   = true,
        TIME    = 0,
        aryTmp  = new Array(),
        imgLen  = 36,
        sign = true;

    var m = {
        random: function(len){
            return parseInt(Math.random() * len);
        },
        delay: function(i, t){
            TIME = setTimeout(function(){
                var sign = true;
                do{
                    var idx = m.random(imgLen) + 1;
                    var sign = m.redo(idx);
                } while(sign);
                m.load(i, idx, i == _ite.length - 1);
            }, t);
        },
        redo: function(idx){
            var sign = false;
            for(var i in aryTmp){
                if(aryTmp[i] == idx) {
                    sign = true;
                    break;
                }
            }
            if(!sign) {
                aryTmp.push(idx);
            }
            return sign;
        },
        load: function(i, idx, isEnd){
            var image = new Image();
            image.onload = function() {
                var imgUrl = require("../assets/images/jobTemplate/5/" + idx + ".png");

                _ite.eq(i).css("backgroundImage", "url("+imgUrl+")");
                if(isEnd) {
                    isFsh = true;
                    clearTimeout(TIME);
                    aryTmp.length = 0;
                }
            };
            image.onerror = function(){
                return false;
            };
            setTimeout(function(){
                //image.src = "images/5/" + idx + ".png";
                var imgUrl = require("../assets/images/jobTemplate/5/" + idx + ".png");
                image.src = imgUrl;

            }, 50);
        },
        auto: function(){
            var t = 0;
            if(sign) {
                sign = false;
                for(var i=0; i<_ite.length; i++) {
                    m.delay(i, t += 150);
                }
            } else {
                sign = true;
                for(var i=_ite.length - 1; i>=0; i--) {
                    m.delay(i, t += 150);
                }
            }
            compLogoCut.time = setTimeout(function(){ m.auto();}, speed);
        }
    };

    compLogoCut.time = setTimeout(function(){ m.auto();}, 600);
};
compLogoCut.time = 0;



//ready
    /***Page-Swiper*/

    var swiperHome = new Swiper("#swiperH5", {
        paginationClickable: false,
        direction: "vertical",
        speed: 350,
        resistance: true,
        resistanceRatio: 0,
        onSlideChangeStart: function (swiper) {

            if(swiper.activeIndex == 4) { //Logo cut
                $(".home-foot-arrow").hide();   //2015-12-9 randan add
                compLogoCut();
            } else {
                $(".home-foot-arrow").show();   //2015-12-9 randan add
                clearTimeout(compLogoCut.time);
            }
        },
        onSlideChangeEnd: function(swiper){
            if(swiper.activeIndex == 1) { //数字滚动-Start
                digit();
            }
        },
        onInit : function(swiper){

            $($('.slide-1')[0]).removeClass('swiper-slide-active');
            // $($('.slide-1')[0]).addClass('swiper-slide-active')

        }
    });

   setTimeout(function(){

    //swiperHome.slideTo(1, 2000, false);
    // swiperHome.slideTo(0, 2000, false);
   },1000);


            }

}


</script>
<style>

@import '../assets/scss/jobTemplate/common.css';
@import '../assets/scss/jobTemplate/pages.css';
@import '../assets/scss/jobTemplate/swiper.css';

</style>