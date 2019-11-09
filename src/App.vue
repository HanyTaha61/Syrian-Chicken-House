<template>
  <div id="app">
    <navbar />
    <router-view/>
    </div>
</template>

<script>
  import navbar from './components/navbar'

  export default {
    data(){
      return{
        
      }
    },
    methods:{

    },
    components:{navbar}
  }
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css?family=Changa|El+Messiri|Cairo&display=swap');
  html{

    body{
    /* colors variables */
		--primary-color-1: rgb(139, 195, 74);
		--primary-color-2: rgb(255, 235, 59);
		--secondary-color: rgb(234, 134, 38);
    --tertiary-color: rgb(240, 255, 255);

    --primary-1-hexa: 139, 195, 74;
    --primary-2-hexa: 255, 235, 59;
    --secondary-hexa: 234, 134, 38;
    --tertiary-hexa: 240, 255, 255;

    /*------------------*/
    }
  }

</style>
