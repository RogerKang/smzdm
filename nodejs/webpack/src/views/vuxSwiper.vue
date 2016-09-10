<template>
<div v-if="list.length>0" style="width:250px;">
  <Swiper :list="list" auto height="250px"></Swiper>
<div>
</template>

<script>
import Swiper from '../components/vux/swiper'
import SwiperItem from '../components/vux/swiper-item'

export default {
  data: function () {
   /* return {
      list: [{
        url: 'http://mp.weixin.qq.com/s?__biz=MzAxNjU0MDYxMg==&ampmid=400385458&ampidx=1&ampsn=78f6b8d99715384bdcc7746596d88359&ampscene=19#wechat_redirect',
        img: 'http://7xqzw4.com2.z0.glb.qiniucdn.com/1.jpg',
        title: '如何手制一份秋意的茶？'
      }, {
        url: 'http://mp.weixin.qq.com/s?__biz=MzAxNjU0MDYxMg==&ampmid=400160890&ampidx=1&ampsn=29ef02af25793a11a3f6aec92bfb46c1&ampscene=19#wechat_redirect',
        img: 'http://7xqzw4.com2.z0.glb.qiniucdn.com/2.jpg',
        title: '茶包VS原叶茶'
      }, {
        url: 'http://mp.weixin.qq.com/s?__biz=MzAxNjU0MDYxMg==&ampmid=400094682&ampidx=1&ampsn=8231a2053b772b2108784fccc254d28c&ampscene=19#wechat_redirect',
        img: 'http://7xqzw4.com2.z0.glb.qiniucdn.com/3.jpg',
        title: '播下茶籽，明春可发芽？'
      }]
    }*/

    return {
        list: [],
        topics : [],
        scroll: false,
        skip:0,
        pageSize:5,
        swiperHeight:250

    }
  },
    ready:function(){
            this.getTopics();
  }
  ,
          methods:{
              getTopics (searchKey){

              this.scroll=false;
              var comp = this;
                    $.get('http://kangro-w7:3002/smzdm/list?skip='+comp.skip+'&pageSize='+comp.pageSize, {},function(data){




                                                              comp.topics = comp.topics.concat(data);

                                                                        console.log('Nothing');
                                                              var swiperList = [];
                                                              for(var x=0;x<comp.topics.length;x++){
                                                                var swiperItem = comp.topics[x];
                                                                swiperList.push({
                                                                    url:swiperItem.buyLink,
                                                                    img:'data:image/jpg;base64,'+swiperItem.picBase64,
                                                                    title:swiperItem.name

                                                                });


                                                              }


                                                              comp.list = swiperList;

                                                              if(data!=null && data.length>0&&data.length>=comp.pageSize){
                                                                                                               comp.skip+=comp.pageSize;
                                                                                                               comp.scroll = true;
                                                                                                              }
                                                                      comp.handlePicUrl();


                                                           })


              },
              //滚动加载数据
              getScrollData (){
                  if(this.scroll){

                                      var totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());

                                      if ($(document).height() > totalheight + 200) {
                                           return ;
                                      }

                                      document.getElementsByClassName('loading')[0].className = "loading";
                                      this.scroll = false;
                                      var comp = this;


                                           $.get('http://kangro-w7:3002/smzdm/list?skip='+comp.skip+'&pageSize='+comp.pageSize, {},function(data){

                                              document.getElementsByClassName('loading')[0].className = "loading hideLoading";


                                              comp.topics = comp.topics.concat(data);


                                                  if(data!=null && data.length>0&&data.length>=comp.pageSize){
                                                   comp.skip+=comp.pageSize;
                                                   comp.scroll = true;
                                                  }

                                                  comp.handlePicUrl();


                                           })

                                  }

              },
              handlePicUrl (){
              return;
                      alert('Run handle pic_url');
                      for(var t=0;t<this.topics.length;t++){

                          this.topics[t].pic_url = this.topics[t].pic_url.replace(/y.zdmimg.com/,'kangro-w7:8090/zdmpic');
                          this.topics[t].pic_url = this.topics[t].pic_url.replace(/ym.zdmimg.com/,'kangro-w7:8090/zdmpicm');

                      }
                      console.log( this.topics);

              }
          },
  components:{
               'Swiper':Swiper,
                  'SwiperItem':SwiperItem
          }
}
</script>

<style>
   @import '../assets/scss/vux/vux.css';
   p {
    padding: 0;
   }
</style>