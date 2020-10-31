<template>
  <div class="app">
    <Menu class="menu" />
    <router-view class="router"></router-view>
    <Side class="side" />
  </div>
</template>

<script>
import Menu from './Menu.vue'
import Side from './Sidebar.vue'

export default {
  name: 'App',
  components: {
    Menu,
    Side
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@100;200;300;400;500;600;700;800;900&display=swap');
*{
  font-family: 'Gothic A1', sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.app{
  display: grid;
  grid-template-columns: 25% 45% 30%;

  --primary: #1DA1F2;
  --hover: #86d0ff62;
  --white: #FFFFFF;
  --black: #000000;
  --white2: #b7e4ff20;
  --border: rgba(128, 128, 128, 0.329);
}
.app.dark{
  background: var(--bg);


  --primary: #1DA1F2;
  --white: #000000;
  --black: #FFFFFF;
  --bg: #243447;
}
body.dark{
  background: var(--bg);

  --bg: #243447;
}
.menu{
  grid-area: 'menuu';
  position: fixed;
}
.router{
  grid-area: 'router';
  border-right: 1px solid rgba(128, 128, 128, 0.329);
  grid-column: 2/3;
  border-right: 1px solid var(--border);
  min-height: 100vh;



}
.side{
  grid-area: 'side';

  
}
@media (max-width: 1250px){
  .app{
    display: grid;
    grid-template-columns: 70px auto auto;
    
  } 
  .menu{
    width: 90px;
  }
}
@media (max-width: 1000px) {
  .app{
    display: grid;
    grid-template-columns: 70px 1fr 0;
    width: 100%;
    margin: auto;
  }
  .menu{
    width: 90px;
  }
  .side{
    display: none;
  }
}
</style>
