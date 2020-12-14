<template>
  <div id="Home">
    <el-container>
      <el-header height="70px">
        <div class="Head">
          <img class="Logo" src="../../assets/doushenLogo.png" alt="" />

          <el-button @click="drawer = true" style="margin-left: 16px; margin-top: 10px" class="drawer">
            <i class="el-icon-s-unfold"></i>
          </el-button>
          <el-drawer :visible.sync="drawer" direction="ltr" :with-header="false">
            <div class="Content">
              <loginAccountForm @func="getMsgFormSon" />

              <div class="Main" :style="[{ height: RightMainHeight }]">
                <navigation>
                  <router-view />
                </navigation>
              </div>
            </div>
          </el-drawer>

          <div class="UserName">
            <span>{{ this.$store.state.userinfo.username }} 【{{ this.$store.state.userinfo.role_name }}】你好</span>
            <span @click="LogOut">退出登录</span>
          </div>
        </div>
      </el-header>

      <div class="Content">
        <div class="LeftNav">
          <el-aside width="100%">
            <el-menu :default-active="$route.path" class="el-menu-vertical" :style="[{ height: LeftNavHeight }]" :unique-opened="true" @select="handleOpen" background-color="#f2efea" text-color="#000" active-text-color="#29b3b5" :router="true">
              <el-menu-item index="/EditUserInfo" route="/EditUserInfo">
                <i class="iconfont icon-yong-ren"></i>
                <span slot="title">修改个人信息</span>
              </el-menu-item>

              <el-menu-item index="/StudentList" route="/StudentList" >
                <i class="iconfont icon-yong-xuesheng"></i>
                <span slot="title">学生管理</span>
              </el-menu-item>

            </el-menu>
          </el-aside>
          <div class="HideScroll"></div>
        </div>

        <div class="Main">
          <navigation>
            <router-view />
          </navigation>
        </div>
      </div>
    </el-container>
  </div>
</template>


<script lang="ts">
    import { Component ,Vue } from 'vue-property-decorator';
   @Component({
         name: 'Homes',
    })  
   export default class Homes extends Vue {
      public LeftNavHeight: any = null ;
      public RightMainHeight: any = null ;
      public UserInfo: any = null ;
      public ModularList: [] 
      public PowfulList: [];
      public Powful: [];
      public PageFunction: [];
      public PageFunctionList: [];
      public drawer: false;

      LogOut(){
          this.$router.replace("/");
          this.$store.commit("LogOut");
      }

      created() {
        this.LeftNavHeight = document.documentElement.clientHeight - 90 + "px";   
      }
   }
</script>
<style lang="scss" scoped>
.HostTip {
  font-size: 15px;
  margin-left: 40px;
  position: relative;
  top: -5px;
  color: #000;
  font-weight: 600;
  height: 100%;
}

.el-header {
  padding: 0;
  width: 100%;
  min-width: 1200px;
  height: 100%;

  .Head {
    background: #fff;
    height: 50px;
    -moz-box-shadow: 2px 2px 5px #eee;
    -webkit-box-shadow: 2px 2px 5px #eee;
    box-shadow: 2px 2px 5px #eee;
    position: relative;

    .Logo {
      width: 150px;
      height: 100%;
      margin: -2px 0 0 50px;
    }

    .UserName {
      position: absolute;
      right: 40px;
      top: 10px;

      span {
        font-size: 14px;
        display: inline-block;
        margin-right: 10px;
      }

      span:last-child {
        color: #00a5a8;
        cursor: pointer;
      }
    }
  }
}

.Content {
  width: 100%;
  min-width: 1300px;
//   height: 100%;

  > div {
    float: left;
  }

  .LeftNav {
    position: relative;
    .el-menu-vertical {
      min-width: 235px;
      background: #f2efea;
      min-height: auto;
      overflow-y: scroll;
      position: relative;
    }

    .el-menu {
      width: 100%;
      border-right: 0;
    }

    .LeftNavImg {
      position: absolute;
      right: 0;
      top: 500px;
    }

    .HideScroll {
      position: absolute;
      background: #f2efea;
      right: 0;
      top: 0;
      width: 16px;
    }
  }

  .Main {
    width: 79%;
    margin-left: 30px;
    border-radius: 10px;
    background: #fff;
    -moz-box-shadow: 0px 0px 5px #eee;
    -webkit-box-shadow: 0px 0px 5px #eee;
    box-shadow: 0px 0px 5px #eee;
    overflow-y: auto;
  }
}

.drawer {
  display: none;
}

i {
  margin-right: 7px;
}
</style>

