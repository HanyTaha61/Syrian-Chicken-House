<template>
<div>
  <b-navbar class="navbar" id="navbar" toggleable="md" fixed="top">
    <b-navbar-toggle class="collapse-button" target="nav-collapse">
    </b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item class="ml-5">
                <router-link exact to="/">الرئيسية</router-link>
            </b-nav-item>
            <b-nav-item class="ml-5">
                <router-link to="/menu">القائمة</router-link>
            </b-nav-item>
            <b-nav-item class="ml-5">
                <router-link to="/contact">تواصل معنا</router-link>
            </b-nav-item>
            <b-nav-item class="ml-5 mb-2">
                <router-link to="/branches">الفروع</router-link>
            </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="navbar-nav2">
            <b-nav-item to="/">
                <img src="../assets/logo.webp" class="logo">
            </b-nav-item>
        </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>




export default {
    data(){
        return{
            
        }
    },
    methods:{
        
    }
}
</script>

<style lang="scss" scoped>
    .navbar{
        direction: rtl;
        background: rgba(1,1,1, 0.5);

        @media (max-width: 767px) {
            background-color: rgba(1,1,1, 0.8);
        }

        .collapse-button{
            background-color: var(--primary-color-1);
            border: 2px solid var(--tertiary-color-1);
            outline: none;
        }
            .navbar-nav{
                padding: 0;

                .nav-item{
                    @media (max-width: 991px) {
                        margin-top: 20px;
                    }

                    .nav-link{
                        text-align: right;

                        @media (max-width: 991px) {
                            margin-top: 10px !important;
                            margin-bottom: 10px !important;
                            padding: 0 !important;
                        }

                        a{
                            color: var(--primary-color-1);
                            font-size: 30px;
                            font-family: 'Cairo';
                            text-align: right;
                            transition: color 0.3s;
                            padding: 10px 20px;
                            border-radius: 5px;
                            position: relative;

                            &::after{
                                bottom: 0;
                                left: 0;
                            }
                            
                            &::before{   
                                top: 0;
                                right: 0;
                            }

                            &::after, &::before{
                                content: '';
                                position: absolute;
                                width: 0;
                                background-color: var(--primary-color-1);
                                height: 3px;
                                transition: 0.5s;
                            }

                        &:hover{
                            text-decoration: none;
                            color: var(--secondary-color);
                        }
                    }

                    .router-link-active{
                        color: var(--tertiary-color);
                        border: 2px solid #999;
                        box-shadow: -3px 3px 10px var(--tertiary-color);
                        text-shadow: -3px 3px 3px #999;
                    }
                    
                    :not(.router-link-active){
                        &:hover::before, &:hover::after{
                            width: 100%;
                        }
                    }
            }
        }
    }
    .navbar-nav2{
        margin-right: auto;

        .logo{
            width: 100px;
            
            @media (max-width: 991px) {
            display: none;
                
            }
        }
    }
}

</style>