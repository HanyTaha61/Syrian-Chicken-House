<template>
	<div class="menu" id="menu">
		<div class="layer">
			<div class="container px-5 pt-5 rounded">
				<div class="row">
					<div class="col-lg-6 mb-5 menu-list" v-for="item in menu" :key="item.name">
						<template>
							<img :src="`/menu/${item.url}`">
						</template>
						<h1 class="text-light text-center mt-1 py-3 mb-4 rounded">{{item.name}}</h1>
						<div class="rounded">
							<div class="content row mx-0 mb-1" v-for="(piece,x) in item.type" :key="x">
								<div class="col-3 price text-right py-3">
									{{piece.price}} LE
								</div>
								<div class="col-9 name text-right py-3">
									{{piece.size}}  {{piece.name}}
								</div>
							</div>
						</div>
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
            menu:[
				{
					name: 'بيتزا',
					type:[
						{name: 'بسطرمة', size: '( M )', price: 35, desc: ''},
						{name: 'بسطرمة', size: '( L )', price: 42, desc: ''},
						{name: 'سجق', size: '( M )', price: 30, desc: ''},
						{name: 'سجق', size: '( L )', price: 37, desc: ''},
						{name: 'شاورما', size: '( M )', price: 32, desc: ''},
						{name: 'شاورما', size: '( L )', price: 38, desc: ''},
						{name: 'شيش', size: '( M )', price: 30, desc: ''},
						{name: 'شيش', size: '( L )', price: 37, desc: ''},
						{name: 'فصول', size: '( M )', price: 25, desc: ''},
						{name: 'فصول', size: '( L )', price: 30, desc: ''},
						{name: 'الأجبان الثلاث', size: '( M )', price: 25, desc: ''},
						{name: 'الأجبان الثلاث', size: '( L )', price: 30, desc: ''},
						{name: 'جبن رومي', size: '( L )', price: 22, desc: ''},
						{name: 'جبن رومي', size: '( L )', price: 28, desc: ''},
					],
					url: 'pizza.webp'
				},
				{
					name: 'شاورما الدجاج',
					type:[
						{name: 'كيلو شاورما', size: '', price: 199, desc: 'تقدم مع الخبز و البطاطس و التومية و المخلل و سلطة الكولسلو'},
						{name: 'وجبة شاورما اكسترا', size: '', price: 42, desc: ''},
						{name: 'وجبة شاورما', size: '', price: 45, desc: 'تقدم مع الخبز و البطاطس و التومية و المخلل و سلطة الكولسلو'},
						{name: 'فتة شاورما', size: '( M )', price: 40, desc: 'تقدم مع الخبز و البطاطس و التومية و المخلل'},
						{name: 'فتة شاورما', size: '( L )', price: 45, desc: 'تقدم مع الخبز و البطاطس و التومية و المخلل'},
						{name: 'ساندوتش عربي', size: '', price: 32, desc: ''},
						{name: 'ساندوتش لف', size: '( M )', price: 20, desc: ''},
						{name: 'ساندوتش لف', size: '( L )', price: 25, desc: ''},
					],
					url: 'shawerma.webp'
				},
				{
					name: 'المعجنات',
					type:[
						{name: 'موزاريلا مع بسطرمة', size: '', price: 13, desc: ''},
						{name: 'شيش طاووق', size: '', price: 13, desc: ''},
						{name: 'سجق', size: '', price: 12, desc: ''},
						{name: 'جبن رومي', size: '', price: 10, desc: ''},
						{name: 'جبن شامي', size: '', price: 9, desc: ''},
						{name: 'موزاريلا مع زيتون', size: '', price: 9, desc: ''},
						{name: 'جبن كيري', size: '', price: 8, desc: ''},
						{name: 'شوكولا', size: '', price: 8, desc: ''},
						{name: 'زعتر', size: '', price: 7, desc: ''}
					],
					url: 'pasta.webp'
				},
				{
					name: 'سندوتشات',
					type:[
						{name: 'بطاطس', size: '', price: 8, desc: ''},
						{name: 'زنجر', size: '', price: 22, desc: ''},
						{name: 'فاهيتا', size: '', price: 20, desc: ''},
						{name: 'مكسيكي', size: '', price: 20, desc: ''},
						{name: 'برجر دجاج', size: '', price: 17, desc: ''},
						{name: 'شيش طاووق', size: '', price: 22, desc: ''},
						{name: 'كرسبي ستربس', size: '', price: 22, desc: ''}
					],
					url: 'sandwitch.webp'
				},
				{
					name: 'وجبات',
					type:[
						{name: 'وجبة بيت الدجاج السوري', size: '', price: 59, desc: 'تقدم مع الرز أو البطاطس المقلية و سلطة الكولسلو و التومية و المخلل'},
						{name: 'نصف فرخة على الفحم', size: '', price: 55, desc: 'تقدم مع الرز أو البطاطس المقلية و التومية و المخلل'},
						{name: 'نصف فرخة ماكينة على الطريقة السورية', size: '', price: 55, desc: 'تقدم مع الرز أو البطاطس المقلية و التومية و المخلل'},
						{name: 'اسكالوب', size: '', price: 39, desc: 'تقدم مع الرز أو البطاطس المقلية و سلطة الكولسلو و التومية و المخلل'},
						{name: 'كرسبي ستربس', size: '', price: 39, desc: 'تقدم مع الرز أو البطاطس المقلية و سلطة الكولسلو و التومية و المخلل'},
						{name: 'زنجر حار', size: '', price: 39, desc: 'تقدم مع الرز أو البطاطس المقلية و سلطة الكولسلو و التومية و المخلل'},
						{name: 'شيش طاووق', size: '', price: 39, desc: 'تقدم مع الرز أو البطاطس المقلية و سلطة الكولسلو و التومية و المخلل'}
					],
					url: 'meals.webp'
				},
				{
					name: 'دجاج ماكينة سورية',
					type:[
						{name: 'فرخة', size: '', price: 105, desc: 'تقدم مع الرز و الخبز و المخلل + تومية'},
						{name: 'نصف فرخة', size: '', price: 55, desc: 'تقدم مع الرز و الخبز و المخلل + تومية'}
					],
					url: 'grilled-chicken.webp'
				},
				{
					name: 'دجاج بروستد',
					type:[
						{name: 'فرخة', size: '', price: 105, desc: 'تقدم مع البطاطس و الخبز و المخلل + تومية'},
						{name: 'نصف فرخة', size: '', price: 55, desc: 'تقدم مع البطاطس و الخبز و المخلل + تومية'}
					],
					url: 'broasted.webp'
				},
				{
					name: 'مشويات',
					type:[
						{name: 'كيلو شيش طاووق', size: '', price: 169, desc: 'تقدم مع الرز أو البطاطس المقلية و سلطة الكولسلو و التومية و المخلل'},
						{name: 'فرخة على الفحم', size: '', price: 105, desc: 'تقدم مع الرز و الخبز و المخلل + تومية'},
						{name: 'نصف فرخة على الفحم', size: '', price: 55, desc: 'تقدم مع الرز و الخبز و المخلل + تومية'},
						{name: 'ربع صدر على الفحم', size: '', price: 30, desc: 'تقدم مع الرز و الخبز و المخلل + تومية'},
						{name: 'ربع ورك على الفحم', size: '', price: 28, desc: 'تقدم مع الرز و الخبز و المخلل + تومية'}
					],
					url: 'grills.webp'
				},
				{
					name: 'سلطات',
					type:[
						{name: 'تبولة', size: '', price: 13, desc: ''},
						{name: 'فتوش', size: '', price: 13, desc: ''},
						{name: 'سلطة خضراء', size: '', price: 13, desc: ''}
					],
					url: 'salads.webp'
				},
				{
					name: 'المقبلات',
					type:[
						{name: 'طبق مشكل', size: '', price: 25, desc: 'تشكيلة من أشهى المقبلات السورية (حمص - متبل - بابا غنوج - محمرة)1'},
						{name: 'حمص', size: '', price: 14, desc: ''},
						{name: 'متبل', size: '', price: 13, desc: ''},
						{name: 'بابا غنوج', size: '', price: 13, desc: ''},
						{name: 'محمرة', size: '', price: 10, desc: ''}
					],
					url: 'mokabelat.webp'
				},
				{
					name: 'مشروبات',
					type:[
						{name: 'كنز - بيبسي', size: '', price: 7, desc: ''},
						{name: 'مياه معدنية حجم صغير', size: '', price: 5, desc: ''}
					],
					url: 'peverages.webp'
				}
			]
        }
	},
	methods:{
		navbar_opacity(){
        	return console.log('---------------------');
      	}
	}
}
</script>

<style lang='scss' scoped>
  #menu{
	background: url('../assets/menu-bg2.webp') no-repeat center;
	background-attachment: fixed;

	background-size: cover;
	position: absolute;
    top: 0px;
    left: 0;
	width: 100%;
	font-family: 'Cairo';

	.layer{
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(32, 32, 32, 0.3);
		padding-top: 200px;

		@media(max-width: 767px){
		padding-top: 100px;
		}

		.container{
			background: url('../assets/menu-cont-bg.webp') no-repeat;
			background-size: cover;
			box-shadow: 30px 20px 60px #111;

			.menu-list{
				padding: 10px 30px;

				img{
					width: 100%;
				}

				h1{
					background-color: rgba(var(--secondary-hexa),0.75);
					font-size: 35px;

					@media (max-width: 1199px) {
						font-size: 28px;
					}						
					@media (max-width: 991px) {
						font-size: 40px;
							
					}
				}

				.content:nth-child(odd){
					background-color: #111;
					color: var(--primary-color-1);
					font-size: 18px;
				}

				.content:nth-child(even){

					background-color: #333;
					color: var(--primary-color-1);
					font-size: 18px;
						

					div{
						@media (max-width: 991px) {
							font-size: 25px;
							
						}
						@media (max-width: 767px) {
							font-size: 18px;
							
						}
					}
				}

			}
		}
	}
}

</style>