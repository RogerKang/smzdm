<template>
    <div class="htmleaf-container">
    		<div class="htmleaf-content">
    			    <div id="clock_hou"></div>
    		</div>

    	</div>
</template>
<script>
    var jQuery = require('jquery');
    require('../libs/jquery.rotate.js')(jQuery);
    require('../libs/jClocksGMT.js')(jQuery);
    export default {
            ready (){
                        setTimeout(function(){
                         jQuery('#clock_hou').jClocksGMT(
                                                                {
                                                                    title: '美国华盛顿',
                                                                    offset: '-6'
                                                                });
                        },10000);

                      }
    }

</script>

<style lang="sass">
.jcgmt-container {
    float:left;
    padding: 3px;
}
.jcgmt-container .jcgmt-lbl {
    font-size:10px;
    color: #333333;
    line-height: 22px;
    background: url(../assets/scss/img/clock/jcgmt-clock_label.png) no-repeat;
    text-align: center;
    padding-bottom: 5px;
    width: 108px;
    margin: 0 auto;
}
.jcgmt-clockHolder {
    width:100px;
    margin:0 auto;
    position:relative;
    overflow: hidden;
}
.jcgmt-sec,
.jcgmt-min,
.jcgmt-hour {
    display:block;
    position:absolute;
}

.jcgmt-rotatingWrapper {
    position:absolute;
    width:100px;
    height:100px;
}
.jcgmt-digital,
.jcgmt-date {
    font-weight:bold;
    font-size: 12px;
    color: #D5D6E2;
    text-align:center;
    margin-left:8px;
}


</style>