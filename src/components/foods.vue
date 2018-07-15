<template>

<div class="foods">
  <p>特色粥品</p>
             <div class="pad" v-for="afood,index in afoods"  >
               <img class="img" :src="afood.img">
                <b>{{afood.b}}</b>
                <i>{{afood.i}}</i> 
                <a>￥<span>{{afood.n}}</span></a>
               <div class="ad">
                 <div class="del">-</div>
                 <a href="">1</a> 
                 <div class="add">+</div>
               </div>
             </div>
       
  <p>单人特色</p> 
             <div class="pad"  v-for="bfood,index in bfoods" >
               <img class="img" :src="bfood.img">
                <b>{{bfood.b}}</b>
                <i>{{bfood.i}}</i> 
                <a>￥<span>{{bfood.n}}</span></a>
               <div class="ad">
                 <div class="del">-</div>
                 <a href="">1</a> 
                 <div class="add">+</div>
               </div>
             </div>
  <p>精选热菜</p>
             <div class="pad" v-for="cfood,index in cfoods" >
               <img class="img" :src="cfood.img" alt="">
                <b>{{cfood.b}}</b>
                <i>{{cfood.i}}</i> 
                <a>￥<span>{{cfood.n}}</span></a>
               <div class="ad">
                 <div class="del">-</div>
                 <a href="">1</a> 
                 <div class="add">+</div>
               </div>
             </div>
</div>

     
</template>

<script>
export default {
  name: 'foods',
  data () {
    return {
        afoods:[
                {
                  img:'../../static/img/zhou.png',
                  b:'皮蛋瘦肉粥配包子套餐',
                  i:'月销1132份 好评率100%',
                  n:'24',
                  },
                  {
                  img:'../../static/img/zhou.png',
                  b:'皮蛋瘦肉粥配包子套餐',
                  i:'月销1132份 好评率100%',
                  n:'24'
                  }, 
          ],
        bfoods:[
          {
                img:'../../static/img/zhou2.png',
                b:'黄桃西米冰粥',
                i:'月销1132份 好评率100%',
                n:'18'
          },
           {
                img:'../../static/img/zhou2.png',             
                b:'黄桃西米冰粥',
                i:'月销1132份 好评率100%',
                n:'18'
          },
           {
                img:'../../static/img/zhou2.png',             
                b:'黄桃西米冰粥',
                i:'月销1132份 好评率100%',
                n:'18'
          },
        ],
        cfoods:[
          {
                img:'../../static/img/zhou3.png',  
                b:'冰晶包包菜',
                i:'月销1132份 好评率100%',
                n:'32'
          },
          {
                img:'../../static/img/zhou3.png',             
                b:'冰晶包包菜',
                i:'月销1132份 好评率100%',
                n:'32'
          },
          {
                img:'../../static/img/zhou3.png',              
                b:'冰晶包包菜',
                i:'月销1132份 好评率100%',
                n:'32'
          },
        ]
    }
  },
  //   methods:{
  //     kk(index,event){
  //       console.log(index)
  //     }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
i{
  font-style: normal;
}
.foods{
  float: right;
  width: 79%;
  height: 8.9rem;
  overflow-y: auto;
}
  .foods p{
    float: left;
    width: 100%;
    height: .52rem;
    background: #f3f5f7;
    border-left:.01rem solid #d9dde1;
    font-size: .24rem;
    color: #93999f;
    line-height: .52rem;
    text-indent: .24rem; 
  }
    .foods .pad b{
      display: block;
      font-size: .28rem;
      text-indent: .2rem
    }
    .foods .pad i{
      color:#93999f;
      font-size: .24rem;
      display: inline-block;
      text-indent: .2rem;
      line-height: .42rem
    }
    .foods .pad a{
      display: block;
      text-indent: .2rem;
      font-size: .2rem;
      color: red;
    }
    .foods .pad span{   
      font-size: .28rem;
      font-weight: bold;
    }
  
   .foods .pad .ad{
     height: .4rem;
     width: 1.3rem;
     float: right;
   }
   .foods .pad .ad a{
     font-size: .24rem;
     color:#93999f;
     margin:-.35rem 0 0 .35rem;
   
   }
    .foods .pad .add,.del{
      width: .4rem;
      height: .4rem;
      background: rgb(0, 160, 220);
      border-radius: 50%;
      font-size: .48rem;
      line-height: .32rem;
      color:#fff;
      text-align: center;
      float: right;
      margin-top:-.4rem
    }
    .foods .pad .del{
      float: left;
      background: #fff;
      line-height: .28rem;
      border:.03rem solid rgb(0, 160, 220);
      margin-right: .88rem;
      color: rgb(0, 160, 220);
    }
  .foods img{
    display: block;
    width: 1.14rem;
    height: 1.14rem;
    border-radius: .1rem;
    float: left;
  }
    .foods .pad{
      width: 88%;
      float: left;
      margin: .36rem .36rem 0 .36rem;
      border-bottom: .01rem solid #ccc;
    }
   
     
</style>