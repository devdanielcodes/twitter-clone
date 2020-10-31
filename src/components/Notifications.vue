<template>
    <div class="notif">
        <div class="top">
            <p>Notifications</p>
            <h3>All</h3>
        </div>
        <ul class="tweets">
      <li class="tweet" v-for="(item, index) in tweets" :key="index">
        <img src="../assets/p.jpg" alt="" srcset="">
        <div class="tweet_con">
          <div class="name">
            <h4>{{item.username || 'Daniel'}}</h4><p>@deadkill</p>
          </div>
          <div class="con">
            <span>followed you</span>
          </div>
   
        </div>
      </li>
      
    </ul>
    </div>
</template>

<script>
import store from '../store/store'
import { reactive, toRefs, onMounted } from 'vue'

export default {
  setup () {
    const state = reactive({
      count: 0,
      tweet: store.state.tweet,
      tweets: store.state.tweets
    })

    function addtweet(){
      if(state.tweet == ''){
        console.log('error')
      }else{
        state.tweets.unshift(
            {company: {
                catchPhrase: state.tweet
            }}
        )
        state.tweet = ''
      }

        
    }
    onMounted(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        state.tweets = data
      })
    })


    return {
      ...toRefs(state),
      addtweet
    }
  }
}
</script>

<style scoped>
.top{
  border-bottom: 1px solid var(--border);
  padding: 20px;
}
.top p{
  font-weight: 900
}
.top h3{
    text-align: center;
    margin-top: 30px;
}
.tweet img{
  width: 50px;
  border-radius: 200px;
  margin-right: 10px;
}

.tweet{
  display: flex;
  align-items: flex-start;
  padding: 10px 15px;
  width: 100%;
  border-bottom: 1px solid var(--border)
}
.tweet_con{
  width: 100%;
}
.tweet .tweet_con .name{
  display: flex;
}
.name h4{
  margin-right: 10px;
}
.name p{
  opacity: 50%;
}
.tweet .act{
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 15px;
  fill: var(--black);
}
.tweet .act svg{
  width: 20px;
}
.tweet .act .ac{
  display: flex;
  cursor: pointer;

}
</style>