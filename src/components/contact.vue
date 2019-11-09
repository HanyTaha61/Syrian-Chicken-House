<template>
    <div id="contact" class="contact">
        <div class="layer">
            <div class="container">
                <div class="contact_form">
                    <h1 class="mb-5 pt-3 display-4">راسلنا</h1>
                    <div class="form-group data">
                        <div class="col-lg-6 mb-5 cont_name text-right">
                            <label class="">الاسم: </label>
                            <input type="text" v-model="name" class="name text-light" >
                        </div>
                        <div class="col-lg-6 mb-5 cont_subject">
                            <label>الموضوع: </label>
                            <input type="text" v-model="subject" class="subject text-light" >
                        </div>
                    </div>
                    <div class="col-lg-12 w-100 cont_message">
                        <label>فضلاً اترك رسالتك بالأسفل</label>
                        <textarea
                                class="message"
                                v-model="message"
                                rows="5"
                                :maxlength="maxLength"
                                @input="countChars"
                        >
                            
                        </textarea>
                        <span class="d-block text-right mb-4 text-light">
                            الحروف المتبقية:
                            <p
                                class="d-inline font-weight-bold text-success"
                                :class="{'zero': reachZero}"
                            >
                                {{remainingChars}} حرف
                            </p>
                        </span>
                    </div>
                    <input
                        @click="send_mail"
                        type="submit"
                        value="ارسل ايميل"
                        class="w-50 send btn"
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            name: '',
            subject: '',
            message: '',
            maxLength: 200,
            remainingChars: 200,
            reachZero: false
        }
    },
    methods:{
        send_mail(){
            if(this.name != '' && this.subject != '' && this.message != '')
            {
                window.open("mailto: hanygrand1980@gmail.com?subject=" + this.subject + "&body=" + this.message)
                this.name = ''
                this.subject = ''
                this.message = ''
                this.remainingChars = 200
            }
        },
        countChars(){
            this.remainingChars = this.maxLength - this.message.length
            this.reachZero = this.remainingChars === 0
        }
    }
}
</script>

<style lang='scss' scoped>
.contact{
    font-family: 'Cairo' !important;
    background: url('../assets/contact.webp') no-repeat center center;
	background-size: cover;
	position: absolute;
    top: 0;
    left: 0;
	width: 100%;
    height: 100%;

    .layer{
        padding-top: 200px;
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
        height: 100%;
		background-color: rgba(32, 32, 32, 0.3);

        @media (max-width: 767px) {
        padding-top: 100px;            
        }
    }
        .contact_form{
            box-shadow: 20px 20px 40px #000;
            border-radius: 10px;
            font-size: 25px !important;
            padding-bottom: 10px;
            direction: rtl;
            background-color: rgba(1,1,1,0.75);

            ::placeholder{
                color: #888;
                font-size: 1.5em;
            }

            h1{
                color: var(--secondary-color);
                width: fit-content;
                margin: auto;
            }

            .data{
                color: #000;
                
                .name, .subject{
                    padding: 5px 10px;
                    border-radius: 5px;
                    box-shadow: 5px 5px 10px #444;
                    background-color: transparent;
                    font-size: 20px;
                    font-family: 'Quicksand';
                    font-weight: bold;
                }

                label{
                    margin-left: 20px;
                    color: #fff;

                }
            }

            .cont_name .cont_message, .cont_subject{
                text-align: right
            }

            .cont_message{
                direction: rtl;

                label{
                    text-align: right;
                    width: 100%;
                    color: #fff;
                }
                
                .message{
                    background-color: transparent;
                    width: 85%;
                    margin-left: 90px;
                    border-radius: 5px;
                    box-shadow: 5px 5px 10px #444;
                    background-color: transparent;
                    color: #fff;
                    font-size: 24px;
                    font-family: 'Quicksand';

                }
                span{
                    margin-right: 100px;
                    font-size: 16px;
                    width: 85%;

                    span:not(p){
                        color: #ccc;
                    }

                    .zero{
                        color: red !important;
                    }
                }
            }

            .send{
                background-color: var(--secondary-color);
                color: #fff;
                display: block;
                font-family: 'Cairo';
                margin: auto;
                font-size: 1.5em;
                border-radius: 10px;
                
                &:hover{
                    background-color: var(--primary-color-1);
                }
            }
        }
    
}
</style>