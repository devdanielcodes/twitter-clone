<template>
    <div class="side">
        <div class="input">
            <img src="./assets/search.svg" alt="" srcset="">
            <input class="search" type="text" placeholder="Search Twitter clone">
        </div>
        <div class="trends">
            <div class="head">
                <h2>Trends for you</h2>
                <img src="./assets/settings.svg" alt="" srcset="">
            </div>
            <div class="trend">
                <span class="t">Trending</span>
                <h2>Daniel Adekoya</h2>
                <span>55.2K Tweets</span>
            </div>
            <div class="trend">
                <span class="t">Trending</span>
                <h2>Daniel Adekoya</h2>
                <span>55.2K Tweets</span>
            </div>
            <div class="trend">
                <span class="t">Trending</span>
                <h2>Daniel Adekoya</h2>
                <span>55.2K Tweets</span>
            </div>
            <div class="trend">
                <span class="t">Trending</span>
                <h2>Daniel Adekoya</h2>
                <span>55.2K Tweets</span>
            </div>
            <div class="trend">
                <span class="t">Trending</span>
                <h2>Daniel Adekoya</h2>
                <span>55.2K Tweets</span>
            </div>

        </div>
        
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            count: 0,
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style scoped>
.side{
    color: var(--black);
    padding: 5px 20px;
}
.search{
    background: none;
     color: var(--black);
    border: none;
    padding: 13px 20px;
    width: 90%;
    font-size: 16px;
    position: absolute;
    border-radius: 100px;
    top: 0;
    right: 0;
    height: 100%;
    outline: none;
}
.input{
    background: var(--white2);
    color: var(--black);
    position: relative;
    border: none;
    padding: 13px 20px;
    width: 100%;
    font-size: 16px;
    border-radius: 100px;
}
.input img{
    width: 20px;
}
.trends{
    background: var(--white2);
    margin-top: 20px;
    border-radius: 20px;
    min-height: 80vh;
    position: sticky;
    top: 10px;
}
.trends .head{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding: 15px;
    border-bottom: 1px solid var(--border);
}
.trends .head img{
    width: 32px;
    cursor: pointer;
    padding: 5px;
    transition: all .2s;
    border-radius: 100px;
}
.trends .head img:hover{
    background: var(--hover)
}
.trend{
    padding: 15px;
    border-bottom: 1px solid var(--border)
}
.trend h2{
    font-size: 18px;
    font-weight: 900;
}
.trend span{
    font-size: 15px;
    margin: 5px 0;
}
</style>