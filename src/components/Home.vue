<template>
  <div class="home">
    <div class="top">
      <p>Home</p>
    </div>
    <div class="main_form">
      <div class="form">
        <img src="../assets/p.jpg" alt="" srcset="">
        <textarea v-model="tweet" placeholder="What's happening" name=""></textarea>
      </div>
      <div class="form_misc">
        <div class="img">
          <img src="../assets/image.svg" alt="">
          <img src="../assets/gif.svg" alt="">
          <img class="dis" src="../assets/vote.svg" alt="">
          <img src="../assets/emoji.svg" alt="">
          <img class="dis" src="../assets/schedule.svg" alt="">
        </div>
        <button @click="addtweet">tweet</button>
        
      </div>
    </div>
    <ul class="tweets">
      <li class="tweet" v-for="(item, index) in tweets" :key="index">
        <img src="../assets/p.jpg" alt="" srcset="">
        <div class="tweet_con">
          <div class="name">
            <h4>{{item.username || 'Daniel'}}</h4><p>@deadkill</p>
          </div>
          <div class="con">
            <span>{{item.company.catchPhrase}}</span>
          </div>
          <div class="act">
            <div class="ac">
              <svg viewBox="0 0 24 24" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path></g></svg>
              <span>10</span>
            </div>
            <div class="ac">
                <svg viewBox="0 0 24 24" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path></g></svg>
              <span>12</span>
            </div>
            <div class="ac">
                <svg viewBox="0 0 24 24" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path></g></svg>
              <span>15</span>
            </div>
            <div class="ac">
                <svg viewBox="0 0 24 24" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path><path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path></g></svg>
            </div>
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
.home{
  color: var(--black);
  min-height: 100vh;

}
.top{
  border-bottom: 1px solid var(--border);
  padding: 20px;
}
.top p{
  font-weight: 900
}
.main_form{
  width: 100%;
  margin: auto;
  border-bottom: 10px solid var(--hover);
  padding: 10px 20px; 
}
.form{
  display: flex;
  align-items: center;
  height: 60px;
}
.form img, .tweet img{
  width: 50px;
  border-radius: 200px;
  margin-right: 10px;
}
textarea{
  width: 100%;
  height: 100%;
  border: none;
  font-size: 20px;
   padding-top: 20px;
  outline: none;
  background: none;
  color: var(--black)
}
textarea::placeholder{
   padding-top: 0px;
}
textarea::-webkit-scrollbar{
  width: 0;
}
.form_misc{
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-left: auto;
}
.form_misc .img{
  display: flex
}
.form_misc img{
  width: 35px;
  margin-right: 10px;
  cursor: pointer;
  padding: 5px;
  border-radius: 200px;
  transition: all .3s;
}
.form_misc img:hover{
  background: var(--hover)
}
.form_misc button{
  padding: 15px 20px;
    background: var(--primary);
    border: none;
    border-radius: 30px;
    color: white;
    font-size: 15px;
    font-weight: 900;
    cursor: pointer;
    outline: none;
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
  width: 90%;
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
@media (max-width: 500px) {
  .dis{
    display: none
  }
  .form_misc{
    flex-wrap: wrap;
  }
}
</style>