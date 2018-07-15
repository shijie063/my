<template>

    <div class="home"> 
      <div id="header">
        <div class="top">
              <router-link class="jt" :to="{path:'./elm'}">&lt;</router-link>
              <img class="im" src="../../static/img/1.jpg" alt="">

              <div class="right"> 
                    <img src="../../static/img/brand@2x.png" alt="" class="pinpai"><span class="zhou">粥品香坊（大运村）</span>
                    <p>蜂鸟专送 / 38分钟送达</p>
                  <img src="../../static/img/decrease_1@2x.png" alt="" class="jian"> <span class="pay">在线支付满28减5，满50减10</span>
                
              </div>
          <div class="five">5个</div>
           
          </div>
          <div class="gong">
              <img src="../../static/img/bulletin@2x.png" alt="" class="gg">
              <p>粥品香坊其烹饪粥料的秘方源于中国千年古法，再融合现代...</p> &gt;
            
          </div>
      </div>
      <div id="nav">
          <router-link :to="{path:'/Home'}">商品</router-link>
          <router-link :to="{path:'/Talk'}">评价</router-link>
          <router-link :to="{path:'/Mark'}">商家</router-link>
      </div>
  
    <router-view></router-view>
    </div>


 

    
 
</template>

<script>
export default {
  name: "index",

  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header {
  width: 100%;
  height: 2.68rem;
  background: rgba(7, 17, 27, 0.5);
  overflow: hidden;
}
#header .top {
  height: 2.13rem;
}
.jt {
  float: left;
  margin: 0.2rem 0 0 0.2rem;
  font-size: 0.4rem;
  font-weight: bold;
  font-family: "宋体";
  color: #fff;
}
.im {
  width: 1.28rem;
  height: 1.28rem;
  margin: 0.48rem 0 0 0.28rem;
  float: left;
}
.right {
  color: #fff;
  float: left;
  margin: 0.5rem 0 0 0.32rem;
}

.right .pinpai {
  float: left;
  width: 0.6rem;
  height: 0.36rem;
  margin-top: 0.05rem;
}
.right .zhou {
  font-size: 0.32rem;
  font-weight: bold;
  margin-left: 0.12rem;
}
.right p {
  font-size: 0.24rem;
  line-height: 0.48rem;
}
.right .jian {
  width: 0.24rem;
  height: 0.24rem;
  float: left;
  margin-top: 0.05rem;
}
.right .pay {
  font-size: 0.2rem;
  margin-left: 0.08rem;
}
#header .gong {
  height: 0.56rem;
  background: rgba(7, 17, 27, 0.2);
}
.gong .gg {
  float: left;
  width: 0.44rem;
  height: 0.24rem;
  margin: 0.16rem 0 0 0.24rem;
}
.gong p {
  font-size: 0.12rem;
  color: #fff;
  line-height: 0.54rem;
  margin-left: 0.76rem;
}

.five {
  width: 0.86rem;
  height: 0.48rem;
  background: rgba(0, 0, 0, 0.2);
  float: right;
  color: #fff;
  border-radius: 0.2rem;
  text-align: center;
  line-height: 0.48rem;
  font-family: "宋体";
  font-size: 0.18rem;
  margin: 1.34rem 0.24rem 0 0;
}
#nav {
  height: 0.8rem;
  border-bottom: 1px solid #e5e5e5;
  color: #4d555d;
  font-size: 0.28rem;
  line-height: 0.8rem;
  display: flex;
  justify-content: space-around;
}
</style>
<style>
</style>

