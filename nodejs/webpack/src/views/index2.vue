<template>
    <!-- 全局header -->
    <div>
        <img class="index" src="../assets/images/index.png">
    </div>
</template>
<script>
    export default {
        ready (){
            setTimeout(() => {
                this.$route.router.go({ name: 'list'});
            },20000);
        }
    }
</script>
<style lang="sass">
    @import '../assets/scss/iconfont/iconfont.css';
    @import '../assets/scss/CV.scss';
    @import '../assets/scss/github-markdown.css';
    .index{
        width: 100%;
        background-color: #fff;
        margin-top: 40%;
    }
</style>

