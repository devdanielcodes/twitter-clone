import { createStore } from "vuex"

const store = createStore({
    state:{
        tweets:[],
        tweet: ''
    },
    mutations:{
        addTweet(state){
            state.tweets.unshift(
                {company: {
                    catchPhrase: state.tweet
                }}
            )
        }
        
    }
})

export default store