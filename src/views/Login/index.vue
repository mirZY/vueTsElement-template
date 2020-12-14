<template>
    <div class="Login">

        <div class="LoginForm">
            <h4>线上课管理系统</h4>
            <div class="LoginIpt">
                <div class="IptLi">
                    <span class="IptLiTitle">登录手机号：</span>
                    <el-input class="IptLiInput" v-model="Phone" size="mini" type="tel"></el-input>
                </div>

                <div class="IptLi">
                    <span class="IptLiTitle">登录密码：</span>
                    <el-input class="IptLiInput" v-model="Pass" size="mini" type="password"></el-input>
                    <span class="ForgetPass" >忘记密码</span>
                </div>

                <div class="IptLi">
                    <span class="IptLiTitle">验证码：</span>
                    <el-input class="IptLiInput" v-model="CheckCode" size="mini" type="tel" @keyup.enter.native="Login"></el-input>
                    <img class="CheckCodeImg" :src="CheckCodeUrl" alt="" @click="GetCheckCode">
                </div>
            </div>

            <div class="LoginBtn" @click="Login()">
                <button class="Commit Generalcolor">登录</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
   import { Logins } from "@/api/Logins.ts"
   import { Component ,Vue } from 'vue-property-decorator';
   @Component({
         name: 'Login',
    })  
   export default class Login extends Vue {
       public Phone: any = null;
       public Pass: any=null;
       public CheckCode: any=null;
       public CheckCodeUrl: any=null;
       public Random: any=null;
       public CurrentHostName: any=null;
       public test = {} ;

        GetCheckCode() {
            this.Random = (Math.random()) * 10;
            this.CheckCodeUrl =  "http://api.zhuge.zyuwen.cn" + '/api/v1/captcha/' + this.Random;
        }

        Login(){
            this.test = {
                "phone": this.Phone,
                "password": this.Pass,
                "captcha": this.CheckCode,
                "captcha_random": this.Random,
            }

            Logins(this.test).then((res: any) => {
                 if (res.status_code == 200) {
                        this.$store.commit('Login', res.data.token);
                        this.$message({
                            'message': '登录成功',
                            'type': 'success',
                            'duration': 500,
                        });
                        this.$router.push('/Homes')
                    } 
                     else if (res.status_code == 401 || res.status_code == 500) {
                        this.$message.error('登录失败');
                        this.CheckCode = "";
                    }
            })
           }

       created() {
         this.GetCheckCode();
       }
   }
</script>

<style lang="scss" scoped>
    .LoginTitle{
        font-size: 30px;
        text-align: center;
        font-weight: 600;
    }

    .LoginBg {
        width: 100%;
        height: 100%;
        position: absolute;
    }

    .LoginForm {
        width: 500px;
        padding-bottom: 25px;
        border-radius: 10px;
        position: absolute;
        top: 52%;
        left: 50%;
        min-height: 280px;
        min-width: 450px;
        background: rgba(255, 255, 250, 0.8);
        -moz-box-shadow: 0px 0px 10px #ccc;
        -webkit-box-shadow: 0px 0px 10px #ccc;
        box-shadow: 0px 0px 10px #ccc;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        h4 {
            font-size: 20px;
            text-align: center;
            margin-top: 20px;
        }
        .LoginIpt {
            width: 80%;
            margin: 15px auto 0;
            margin-top: 40px;
            div{
                margin-bottom: 20px;
            }
        }
        .IptLi {
            margin-bottom: 25px;
            .IptLiTitle {
                width: 28%;
                display: inline-block;
                font-size: 12px;
                text-align: right;
            }
            .IptLiInput {
                width: 53%;
            }
        }
        .IptLi:nth-child(2) {
            .IptLiInput {
                width: 53%;
            }
            .ForgetPass {
                font-size: 10px;
                display: inline-block;
                width: 14%;
                text-align: right;
                cursor: pointer;
                text-decoration: underline;
            }
        }
        .IptLi:nth-child(3) {
            position: relative;
            .IptLiInput {
                width: 44%;
            }
            .CheckCodeImg {
                font-size: 10px;
                display: inline-block;
                width: 22%;
                position: absolute;
                right: 5px;
                top: 2px;
                text-align: right;
            }
        }
        .LoginBtn {
            text-align: center;
            width: 250px;
            margin: auto;
            .Commit {
                width: 100%;
                height: 30px;
                line-height: 30px;
                color: #fff;
                background: #9b8f72;
                outline: none;
                border: none;
                cursor: pointer;
                border-radius: 3px;
                font-size: 12px;
                &:active {
                    background: #c1ac77
                }
            }
        }
    }

</style>