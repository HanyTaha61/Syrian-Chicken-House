<template>
  <div class="main">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
        <b-carousel-slide>
            <template v-slot:img>
            <img
                class=""
                width="100%"
                height="auto"
                :src="require(`../assets/${banner1}`)"
                alt="image slot"
            >
            </template>
        </b-carousel-slide>
        <b-carousel-slide>
            <template v-slot:img>
                <img
                    class=""
                    width="100%"
                    height="auto"
                    :src="require(`../assets/${banner2}`)"
                    alt="image slot"
                >
            </template>
        </b-carousel-slide>
      <b-carousel-slide>
            <template v-slot:img>
                <img
                    class=""
                    width="100%"
                    height="auto"
                    :src="require(`../assets/${banner3}`)"
                    alt="image slot"
                >
            </template>          
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img>
            <img
                class=""
                width="100%"
                height="auto"
                :src="require(`../assets/${banner4}`)"
                alt="image slot"
            >
        </template>           
      </b-carousel-slide>
    </b-carousel>

<!-- Main Text -->

    <div class="home" id="home">
        <div class="layer">
            <div class="container-fluid">
                <div class="banner mx-auto">
                    <div class="">
                        <h1 class="title">
                            <span class="house d-block text-center">بيت الدجاج السوري</span>
                            <span class="welcome">يرحب بكم</span>
                        </h1>
                        <p class="address text-center mt-5">
                            أول شارع القاهرة - سيدي بشر - الرأس السوداء - اسكندرية
                        </p>
                        <p class="tel text-center rounded">
                            <span class="mr-3 n-012">012</span>
                            <span class="mr-3 n-88">88</span>
                            <span class="mr-3 n-955">955</span>
                            <span class="mr-3 n-211">211</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>  
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        banner1: 'banner.webp',
        banner2: 'banner2.webp',
        banner3: 'banner3.webp',
        banner4: 'banner4.webp'
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>


<style lang='scss' scoped>

#home{
	position: absolute;
    top: 0px;
    left: 0;
	width: 100%;
	height: 100%;
	font-family: 'Cairo';

	.layer{
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(1, 1, 1, 0.5);

        .main{

            #carousel-1{

                .carousel-inner{

                    .carousel-item{

                        img{
                            height: -webkit-fill-available;
                        }
                    }
                }
            }
        }

		.banner{

			padding: 10px 30px;
			width: 100%;
            padding-top: 300px;

			.title{
				color: var(--tertiary-color);
				text-align: center;

				span.welcome{
				color: var(--tertiary-color);
				font-size: 2em;

					@media(max-width: 815px){
						font-size: 1.2em;
					}			

				}

				span.house{
					color: var(--primary-color-1);
					font-size: 2.5em;

					@media(max-width: 815px){
						display: block;
						font-size: 1.4em;
					}
				}

			}

			.address{
				color: var(--tertiary-color);
				font-size: 3em;

					@media(max-width: 999px){
						font-size: 2.5em;
					}
					@media(max-width: 850px){
						font-size: 2em;
					}	
					@media(max-width: 700px){
						font-size: 1.3em;
					}									


			}

			.tel{
				font-size: 3em;
				color: var(--tertiary-color);
				padding: 5px 10px;
				margin: auto;

				@media (max-width: 767px){
					font-size: 1.9em;
				}

				span.n-012, span.n-88, span.n-955, span.n-211{
					font-size: 2em;
					color: #eee;
				}

				span.n-88{
					color: var(--primary-color-1);				
				}

				span.n-955{
					font-size: 3em;
					color: var(--secondary-color);
				}
			}
		}
	}
}


</style>
