<template>
      <div class="loading hideLoading">
        </div>
    <section id="page">
        <!-- 首页列表 -->
        <!--<div style="float:left;width:auto;height:auto;">
        <div style="position:fixed;">
            <nv-Menu></nv-Menu>
        </div>
        <my-Clock2></my-Clock2>
        </div>
        <div style="height:300px;width:300px;position:fixed;margin-left:80%;">
        <my-Clock></my-Clock>
        </div>-->
        <div style="float:left;">
        <ul class="posts-list">
            <li v-for="item in topics" track-by="$index">

                <h3 title="值" class="top" v-if="item.process>50"><a href="{{item.link}}" target="_blank">{{item.name||item}}</a></h3>
                <h3 title="不值" v-if="item.process<=50" style=""><a href="{{item.link}}" target="_blank">{{item.name||item}}</a></h3>
                <div class="content">
                <img src="{{'data:image/jpg;base64,'+item.picBase64}}" style="width:100px;height:100px;">
                <span class="top"><a href="{{item.buyLink}}" target="_blank" style="display:block;margin-top:100%;margin-left:10px;background:#29C3C3;color:white;padding:5px;border-radius:4px;">直接购买</a></span>
                </div>

            </li>
        </ul>
        <!--</div>-->
    </section>

</template>

<script>

    export default {
        data (){
            return {
                topics:[],
                scroll: false,
                skip:0,
                pageSize:10
            }
        },
        route:{
            data (transition){
                        this.scroll = true;
                    this.getTopics();

                //滚动加载
                $(window).on('scroll', () => {

                    this.getScrollData();
                });


            }
        },
        methods:{
            getTopics (searchKey){

            this.scroll=false;
            var comp = this;
                  $.get('http://www.rogerkang.site:3002/smzdm/list?skip='+comp.skip+'&pageSize='+comp.pageSize, {},function(data){




                                                            comp.topics = comp.topics.concat(data);

                                                            if(data!=null && data.length>0&&data.length>=comp.pageSize){
                                                                                                             comp.skip+=comp.pageSize;
                                                                                                             comp.scroll = true;
                                                                                                            }
                                                                    comp.handlePicUrl();


                                                         })


            },
            //滚动加载数据
            getScrollData (){

             /*   if(this.scroll){

                    var totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());

                    if ($(document).height() > totalheight + 200) {
                         return ;
                    }

                    document.getElementsByClassName('loading')[0].className = "loading";
                    this.scroll = false;
                    var comp = this;          //success, closure this, not this.scroll, because this is an object, this.scroll is a boolean, object can be closured, boolean cannot
                    //var scrollClosure = this.scroll;  //fail,scroll is a boolean, basic type, will be closured
                    this.topics=this.topics.concat(['a','b','v','2','a','b','v','2','a','b','v','2','a','b','v','2','a','b','v','2','a','b','v','2','xxwe']);
                    setTimeout(function(){
                    document.getElementsByClassName('loading')[0].className = "loading hideLoading";
                    //this.scroll = true;  //fail, this is not the component, this is the windows object
                    //scrollClosure = true; ////fail,scroll is a boolean, basic type, will be closured
                    comp.scroll = true;
                    },2000);
                }*/


                if(this.scroll){

                                    var totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());

                                    if ($(document).height() > totalheight + 200) {
                                         return ;
                                    }

                                    document.getElementsByClassName('loading')[0].className = "loading";
                                    this.scroll = false;
                                    var comp = this;


                                         $.get('http://www.rogerkang.site:3002/smzdm/list?skip='+comp.skip+'&pageSize='+comp.pageSize, {},function(data){

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

                        this.topics[t].pic_url = this.topics[t].pic_url.replace(/y.zdmimg.com/,'www.rogerkang.site:8090/zdmpic');
                        this.topics[t].pic_url = this.topics[t].pic_url.replace(/ym.zdmimg.com/,'www.rogerkang.site:8090/zdmpicm');

                    }
                    console.log( this.topics);

            }
        },
        components:{
            'nvMenu':require('../components/myMenu.vue'),
            'myClock':require('../components/clock2.vue')
        }
    }
</script>

/*
three ways of defining components and alias:
// see https://vuxjs.gitbooks.io/vux/content/about/questions.html
#1
  components:{
            'nvMenu':require('../components/myMenu.vue'),
            'myClock':require('../components/clock2.vue'),
            'myClock2':require('../components/clock.vue')
        }

#2
  components:{
            require('../components/myMenu.vue'), //directly list out the component object
            require('../components/clock2.vue'), //use default name: clock2
            require('../components/clock.vue')
        }

#3
  components:{
            'changeName':require('../components/myMenu.vue') // use alias, same as #1
        }


*/
<style>
.loading {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1040;
    background-color: #000;
    background:url("../assets/images/loading.gif") no-repeat center 250px;
    opacity:40;
}
.hideLoading {
    display:none;

}

</style>