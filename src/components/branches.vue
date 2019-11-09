<template>
  <div class="about">
    <div class="layer">
      <div class="container">
        <h1 class="col-lg-12 text-center mx-auto py-2 w-50 rounded">فروعنا</h1>
        <div class="row mt-5">
          <div class="media w-100">
            <ol class="media-body text-right px-5 py-4 my-2 rounded">
              <li class="py-3">أول شارع القاهرة - سيدي بشر قبلي - اسكندرية -- ت: 01288955211</li>
              <li class="py-3">شارع اسكندر ابراهيم - سيدي بشر بحري -  اسكندرية -- ت: 01288955211</li>
              <li class="py-3">شارع فوزي معاذ - سموحه - اسكندرية -- ت: 01288955211</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    }
}
</script>

<style lang='scss' scoped>
  .about{
    background: url('../assets/branches-bg.webp') no-repeat center center;
    background-size: cover;
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    height: 100%;    

    .layer{
      padding-top: 150px;
      position: relative;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: rgba(0,0,0, 0.1);

      @media (max-width: 767px) {
        padding-top: 50px;      
      }
    
    h1{
      font-family: 'Abril Fatface';
      position: relative;
      font-family: 'Cairo';
      color: var(--tertiary-color);
      background-color: rgba(1, 1, 1, 0.4);
      font-size: 4em;

      @media (max-width: 767px) {
        font-size: 3em;
        margin-top: 100px;

      }

      &::after{
        content: '';
        position: absolute;
        background-color: #000;
        bottom: -20px;
        height: 10px;
        width: 100%;
        left: 0px; 


        @media (max-width: 767px) {
        }        
      }

    }
    .media{
      background-color: rgba(1, 1, 1, 0.4);
      
      .media-body{
        font-family: 'Cairo';
        box-shadow: 10px 10px 15px #111;
        font-size: 25px;
        

        @media (max-width: 767px) {
          font-size: 1.4em;
          margin-right: 0 !important;
          margin-left: 0 !important;
        }

        @media (min-width: 768px) {
          font-size: 1.3em;
        }  
        @media (min-width: 992px) {
          font-size: 1.5em;
        }

        li{
          background-color: rgba(3, 3, 3, 0.5);
          margin-bottom: 20px;
          direction: rtl;
          padding-right: 10px;
          color: var(--primary-color-1);

          @media (max-width: 767px) {
            font-size: small !important;
          }
        }
        
        a{
          color: #000000;
          font-weight: bold;
          background-color: var(--fourth-color);
          padding: 5px 10px;
          transition: 0.3s;

          &:hover{
            text-decoration: none;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>