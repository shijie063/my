<template>
  <div class="elist">
     <div class="list" v-for='item,index in items' :key="index">
            <img :src="item.img"> 
            <div class="r_content">
                  <span class="pp">品牌</span><p>{{item.p1}}</p>
                  <a style='line-height:.6rem'>5月做1234单</a><span class="aa">蜂鸟专送</span>
                  <a class="last">￥20元起送 丨 配送费￥5.5</a><span>1.8KM丨20分钟</span>
            </div>
            <div class="l_content">
                <p>口碑人气好店</p>
                <span>首</span><p>新用户下单立减17元</p>
                <span>减</span><p>满28减5，满50减15，满70减25</p>
            </div>

            
    </div>
      
     
  </div>
</template>

<script>
export default {
  name:'elist',
  data(){
      return {
          items:[
              {
                p1:'永和大王（北京军博店BJ005）',
                img:'../../static/img/yonghe.png'
              },
               {
                p1:'永和一品（西站店）',
                img:'../../static/img/elist2.png'
              },
               {
                p1:'庆丰包子店（羊坊路店）',
                img:'../../static/img/elist3.png'
              },
               
          ]
         
      }
  }
}
</script>

<style scoped>
        .list{
            height: 3.4rem;
           
        }
        
         .list img{
            widows:1.3rem ;
            height: 1.3rem;
            margin: .3rem 0 0 .2rem;
            float: left;
         }
         .list .r_content{
             float: left;
             width: 5.6rem;
             height: 1.3rem;
             margin:.3rem 0 0 .2rem
         }
         .r_content .pp{
             display: block;
             background: yellow;
             width: .54rem;
             height: .34rem;
             font-size: .18rem;
             float: left;
                 margin-top: 0rem;
         }
          .r_content .aa{
              display: block;
              width: 1rem;
              height: .3rem;
              background: #0085ff;
              margin-top: .1rem;
              float: right;
              color:#fff;
          }
         .r_content p{
            font-size: .28rem;
            font-weight: bold;
            text-indent: .1rem;
           
         }
       
         .r_content .last{
             display:block;
       
         } 
         .r_content span{
                margin-top:-.3rem;
                   float: right;
         }
         .list .l_content{
             float: left;
             width: 5.6rem;
             height: 1.3rem;
             float: right;
             margin-right: .2rem
         }
         .l_content span{
             display: block;
             width: .28rem;
             height: .28rem;
             margin-top:.3rem;
             float: left;
             color: #fff;
             background: rgb(112, 188, 70);
         } 
         .l_content span:nth-of-type(2){
             margin-top:0.05rem;
         }
         .l_content p:nth-of-type(1){
             color: red;
              margin-top:.2rem
         }
         .l_content p{
             text-indent: .2rem;
           line-height: .4rem
         }
         .l_content p:nth-of-type(2){
             margin-top:.25rem
         }


</style>


