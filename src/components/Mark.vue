<template>
  <div class="mark">
    

     <mt-header title="todolist">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  
    <div v-for='todo in todos' :key='todo.id'>
        <p>{{todo.title}}</p>
        <button @click='del(todo.id)'>删除</button>
    </div>

    <!-- <div>
      <button @click='a'>A</button>
      <button @click='b'>B</button>
      <button @click='c'>C</button>
    </div> -->
    
   
       
        
  
    
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui';
import { Header } from 'mint-ui';
export default {
  name: 'HelloWorld',
  data () {
    return {
      todos:[
        {id:1,title:'共和国的尴尬就更加高级的嘎叽的'},
        {id:2,title:'asdasdasdvf'},
      ],
      
    }
  },
    methods:{
      del(id){
        MessageBox.confirm('确定执行此操作?').then(action => {
            console.log(this.todos)
            this.todos.map( (todo, index,arr)=>{
              if( todo.id === id ){
                console.log(this)
                arr.splice(index,1);
              }
              
          })
      });
    }
  },
  
  computed:{

  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .qq{
      width: 3.75rem;
      height: 200%;
      font-size: 100px;
    }
</style>
