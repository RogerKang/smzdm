<template>
<svg height="200" width="200" viewBox="0 0 1000 1000">

<path d="M978,500c0,263.99-214.01,478-478,478s-478-214.01-478-478,214.01-478,478-478,478,214.01,478,478zm-888.93,237.25,20.179-11.65m779.16-449.85l22.517-13m-648.18,648.18,11.65-20.18m449.85-779.16l13-22.517m-711.75,410.93h23.305m899.7,0h26m-885.43-237.25,20.179,11.65m779.16,449.85,22.517,13m-648.18-648.18l11.652,20.183m449.85,779.16,13,22.517m-237.25-885.43v23.305m0,899.7,0,26"/>
<path d="M500,500,500,236" id="hour"/>
<path d="M500,500,500,120" id="min" />
<path d="M500,500,500,90" id="sec" />
</svg>
</template>
<script>
    export default {
            ready (){
                         setInterval(function() {
                           function r(el, deg) {
                             el.setAttribute('transform', 'rotate('+ deg +' 500 500)')
                           }
                           var d = new Date()
                           r(sec, 6*d.getSeconds())
                           r(min, 6*d.getMinutes())
                           r(hour, 30*(d.getHours()%12) + d.getMinutes()/2)
                         }, 1000)
                      }
    }
</script>
<style lang="sass">
html {
  background: #0e2e3a;
}
h1,p,p a{color: #fff;}
svg {
  position: absolute;
  top: 10%;
  width: 100%;
  height: 80%;
}
path {
  stroke: #09151b;
  stroke-linecap:round;
  stroke-width: 42;
  fill:none;
}
#sec {
  stroke: #6f7f24;
  stroke-width: 20;
}
#min {
  stroke: #3d601b;
  stroke-width: 38;
}
#hour {
  stroke: #13441e;
  stroke-width: 38;
}
</style>