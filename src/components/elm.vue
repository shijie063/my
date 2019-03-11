<template>

    <div class="elm"> 
        <div class="header">
      <p><a class="iconfont">&#xe63e;</a>{{local}}</p>
        </div>
        <div class="search">
            <div class="content">
              <span href="">搜索饿了么商家、商品名称</span>
            </div>
        </div>
        <div class="swip">
          <div class="homeswiper" style='height:3rem'>
              <mt-swipe :auto="4000">
                <mt-swipe-item v-for="m,index in imgs" :key="index">
                  <img :src="m" class="guanggaoimg" />
                </mt-swipe-item>
              </mt-swipe>
            </div>
          
        </div>
        <div class="main">
            <a v-for='item,index in items' :key='index'>
              <img :src="item.url">
              <span>{{item.name}}</span>
             </a>
        </div>
        <div class="tc">
            <div>
              <h3><router-link :to="{path:'/Home'}">品质套餐</router-link></h3>
              <p>搭配齐全吃得好</p>
              <a href="">立即抢购&gt;</a>
            </div>
            
            <img src="../../static/img/tc.png" alt="">
        </div>
         <div class="footer">
              <div class="iconfont">&#xe602;<span>首页</span> </div>
              <div class="iconfont">&#xe609;<span>订单</span> </div>
              <div class="iconfont">&#xe612;<span>发现</span> </div>
              <div class="iconfont">&#xe629;<span>我的</span> </div>
         </div>
         <div class="tuijian">
           <p @click="hendler">一 推荐商家 一</p>
         </div>
        <elist></elist>
        <!-- <div class="homeswiper" style='height:3rem'>
          <mt-swipe :auto="4000">
            <mt-swipe-item v-for="m,index in imgs" :key="index">
              <img :src="m" class="guanggaoimg" />
            </mt-swipe-item>
          </mt-swipe>
        </div> -->
    </div>
    
</template>

<script>
import elist from './elist'

export default {
  name:'elm',
 components:{elist},
  data () {
    return {
      a:'1',
      b:'2',
      c:'3',
     img:'../../static/img/swip.png',
     items:[
       {
        url:'../../static/img/food1.png',
        name:'美食'
       },
       {
        url:'../../static/img/food2.png',
        name:'商超便利'
       },
       {
        url:'../../static/img/food3.png',
        name:'果蔬生鲜'
       },
       {
        url:'../../static/img/food4.png',
        name:'早餐'
       },
       {
        url:'../../static/img/food5.png',
        name:'医药健康'
       },
       {
        url:'../../static/img/food6.png',
        name:'大牌五折'
       },
       {
        url:'../../static/img/food7.png',
        name:'浪漫鲜花'
       },
       {
        url:'../../static/img/food8.png',
        name:'麻辣烫'
       },
       {
        url:'../../static/img/food9.png',
        name:'地方菜系'
       },
       {
        url:'../../static/img/food10.png',
        name:'匹萨意面'
       },
     ],
     local:'北京西站',
     imgs:['../../static/img/swip.png','../../static/img/img2.png']
    }
  },
  mounted(){
    this.a = '3'
    console.log(this.a)
  },
  methods:{
    hendler(){
      console.log(this.a)
      this.a = '2'
      console.log(this.a)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@font-face {font-family: "iconfont";
  src: url('../../static/font/iconfont.eot?t=1525944264614'); /* IE9*/
  src: url('../../static/font/iconfont.eot?t=1525944264614#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('../../static/font/iconfont.ttf?t=1525944264614') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('../../static/font/iconfont.svg?t=1525944264614#iconfont') format('svg'); /* iOS 4.1- */
}
.iconfont {
  font-weight: bold;
  font-family:"iconfont" !important;
  font-size:.36rem;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #eee
}
.guanggaoimg{
  display: block;
  height: 100%;
  width: 100%;
}
      .header{
        width: 100%;
        height: .89rem;
        background-image: linear-gradient(90deg,#0af,#0085ff);
       font-weight: bold;
        color:#fff;
        font-size: .33rem;
        line-height:1.1rem;
        text-indent: .3rem;
      
      }
   
     
      .search{
        height: 1.02rem;
        background-image: linear-gradient(90deg,#0af,#0085ff);
        display: flex;
        justify-content: center;
        align-items: center
      }
      .search .content{
        width: 6.94rem;
        height: .72rem;
        background: #fff;
        color:#bbb;
        line-height: .72rem;
        text-align: center
      }
      .swip{
        height: 2.1rem;
      }
      .swip img{
        width: 7.5rem;
        height: 2.1rem;
      }
      .main{
        width: 7.5rem;
        height: 3.54rem;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        align-content: flex-start
      }
      .main a{
        display: block;
        width: 1.5rem;
        height: 1.28rem;
        margin-top:.22rem;
        display: flex;
        flex-direction: column;
      }
      .main a img{
        width: .9rem;
        height: .9rem;
        align-self: center
      }
      .main a span{
        align-self: center;
        color:rgb(65, 64, 64);
        margin-top:.1rem
      }
      .tc{
        width: 7.1rem;
        height: 2.2rem;
        background: rgb(240, 240, 240);
        margin: 0 auto;
       
      }
      .tc img{
        width: 2.82rem;
        height: 1.88rem;
        float: right;
        margin: .24rem .3rem 0 0
      }
      .tc div{
        float: left;
        padding: .24rem 0 0 .3rem
      }
      .tc h3{
        font-size: .35rem;
        font-weight: bold;
      }
      .tc p{
        color: #aaa;
        font-size: .24rem;
        line-height: .42rem
      }
      .tc a{
           font-size: .24rem;
          color: #af8260;
          font-weight: 700;
      }
      .footer{
        width: 100%;
        height: 1rem;
        border-top:.01rem solid #bbb;
        position: fixed;
        bottom:0;
        display: flex;
        align-items: center;
        background: #fff;
        
      }
      .footer div{
        width: 1.87rem;
        height: .69rem;     
        text-align: center;
      }
       .footer div span{
         display: block;
         height: .24rem;
       }
       .footer .iconfont span {
         font-size: .24rem;
         font-weight: normal;
       }
       .tuijian{
         height: .72rem;
         margin-top:.38rem;
         font-size: .3rem;
         line-height: .72rem;
         text-align: center;
       }
       .footer .iconfont{
         color: rgb(65, 64, 64);
       }
</style>

