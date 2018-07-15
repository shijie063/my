<template>
  <div class="Home">
      <ul class="louti">
        <li v-for="item,index in items" :key="index" @click='list(index)'>
            {{item}}
        </li>
      </ul>
     
    <foods></foods>
    <div id="foot">
      <div class="radiu">
        <div class="s-radiu iconfont">&#xe622;</div>
      </div>
      <div class="price">￥0</div>
      <p class="four">另需配送费￥4元</p>
        <p class="qi"> 
            ￥20元起送
        </p>
    </div>
  </div>
    
</template>

<script>
import foods from "./foods";
export default {
  components: { foods },
  name: "Home",
  data() {
    return {
      items: [
        "热销榜",
        "单人套餐",
        "特色粥品",
        "精选凉菜",
        "爽口凉菜",
        "半成品",
        "饭类",
        "面类"
      ]
    };
  },
  methods: {
    list(index, event) {
      console.log(index);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.louti {
  width: 1.6rem;
  background: #f3f5f7;
  float: left;
  width: 21%;
}
.louti li {
  width: 70%;
  height: 1.07rem;
  background: #f3f5f7;
  border-bottom: 0.01rem solid rgba(7, 17, 27, 0.1);
  margin-left: 0.24rem;
  line-height: 1.07rem;
  font-size: 0.24rem;
}

#foot {
  height: 0.96rem;
  width: 100%;
  background: #141d27;
  position: fixed;
  bottom: 0;
}
#foot .qi {
  width: 2.1rem;
  height: 0.96rem;
  background: #2b333b;
  float: right;
  margin: 0;
  font-size: 0.24rem;
  font-weight: bold;
  text-align: center;
  line-height: 0.96rem;
  color: #979a9c;
}
#foot .radiu {
  width: 1.12rem;
  height: 1.12rem;
  background: #141d27;
  border-radius: 50%;
  position: absolute;
  bottom: 0.12rem;
  left: 0.24rem;
}
#foot .s-radiu {
  width: 0.88rem;
  height: 0.88rem;
  background: rgb(0, 160, 220);
  border-radius: 50%;
  position: absolute;
  bottom: 0.12rem;
  left: 0.12rem;
}
#foot .price {
  height: 0.48rem;
  width: 1.06rem;
  border-right: 0.01rem solid #ccc;
  float: left;
  font-size: 0.32rem;
  font-weight: bold;
  color: #979a9c;
  margin: 0.24rem 0 0 1.35rem;
  text-align: center;
}
#foot .iconfont {
  line-height: 0.88rem;
  text-align: center;
}
#foot .four {
  float: left;
  margin: 0.32rem 0 0 0.35rem;
  color: #979a9c;
  font-size: 0.24rem;
}

@font-face {
  font-family: "iconfont";
  src: url("../../static/font/iconfont.eot?t=1525944264614"); /* IE9*/
  src: url("../../static/font/iconfont.eot?t=1525944264614#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("../../static/font/iconfont.ttf?t=1525944264614")
      format("truetype"),
    /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
      url("../../static/font/iconfont.svg?t=1525944264614#iconfont")
      format("svg"); /* iOS 4.1- */
}
.iconfont {
  font-weight: bold;
  font-family: "iconfont" !important;
  font-size: 0.4rem;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}
</style>