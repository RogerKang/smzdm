<template>
   <div id="level">
   		<div id="content">
   			<div id="gears">

   				<div id="gear-system-3">

   					<div id="gear9"></div>

   				</div>

   			</div>
   		</div>
   	</div>
</template>
<script>
    export default {
        ready (){
            setTimeout(() => {
                this.$route.router.go({ name: 'smzdm'});
            },3000);
        }
    }
</script>
<style lang="sass">
    @import '../assets/scss/iconfont/iconfont.css';
    @import '../assets/scss/CV.scss';
    @import '../assets/scss/github-markdown.css';
    @import '../assets/scss/zzsc.css'
</style>