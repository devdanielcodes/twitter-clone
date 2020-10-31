<template>
    <div class="profile">
        <div class="top">
            <h2>Deadkill</h2>
            <p>10,000 tweets</p>
        </div>
        <div class="banner_profile">
            <img class="banner" src="../assets/banner.jpg" alt="" srcset="">
            <img class="profile_img" src="../assets/p.jpg" alt="" srcset="">
        </div>
        <div class="bio">
            <h2>Deadkill</h2>
            <span>@daniel</span>
            <p>My profile page</p>

            <div class="follow">
                <div class="following"><strong>1</strong> <span>Following</span></div>
                <div class="followers"><strong>1.2B</strong> <span>Followers</span></div>
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
.top{
  border-bottom: 1px solid var(--border);
  padding: 20px;
}
.top p{
    font-size: 12px;
}
.top h2{
  font-weight: 900;
  font-size: 18px;
}
.banner_profile{
    height: 200px;
    width: 100%;
    position: relative;
}
.banner{
    width: 100%;
    height: 100%;
}
.profile_img{
    position: absolute;
    left: 10px;
    width: 150px;
    top: 0;
    transform: translateY(80%);
    border-radius: 400px;
    border: 4px solid white;
}
.bio{
    padding: 20px;
    margin-top: 70px;
}
.bio h2{
  font-weight: 900;
  font-size: 18px;
}
.bio span{
    opacity: 40%;
}
.bio p{
    margin-top: 10px;
}
.bio .follow{
    display: flex;
    width: 100%;
    margin-top: 10px;
}
.bio .follow .following{
    margin-right: 30px;
}
</style>