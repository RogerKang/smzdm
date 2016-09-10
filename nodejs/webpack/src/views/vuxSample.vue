<template>
<div class="loading hideLoading">
        </div>
  <div>
           <group>
              <cell v-for="item in topics" track-by="$index" v-bind:title="item.name">
                 <a href="{{item.buyLink}}" target="_blank" style="display:block;background:#29C3C3;color:white;padding:5px;border-radius:4px;">直接购买</a>
              </cell>
          </group>


  </div>
</template>

<script>
import Group from '../components/vux/group'
import Cell from '../components/vux/cell'

    export default {
        data (){
            return {
                topics:[],
                scroll: false,
                skip:0,
                pageSize:20
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
                  $.get('http://kangro-w7:3002/smzdm/list?skip='+comp.skip+'&pageSize='+comp.pageSize, {},function(data){




                                                            comp.topics = comp.topics.concat(data);
  console.log('Nothing');
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
             'Group':Group,
                'Cell':Cell
        }
    }
</script>

<style>
    @import '../assets/scss/vux/vux.css';

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