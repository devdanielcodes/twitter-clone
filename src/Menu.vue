<template>
    <div class="menu">
        <ul>
            <img class="logo" src="./assets/logo.svg" alt="" srcset="">
            <router-link class="routed" to="/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="r-13gxpu9 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M22.58 7.35L12.475 1.897c-.297-.16-.654-.16-.95 0L1.425 7.35c-.486.264-.667.87-.405 1.356.18.335.525.525.88.525.16 0 .324-.038.475-.12l.734-.396 1.59 11.25c.216 1.214 1.31 2.062 2.66 2.062h9.282c1.35 0 2.444-.848 2.662-2.088l1.588-11.225.737.398c.485.263 1.092.082 1.354-.404.263-.486.08-1.093-.404-1.355zM12 15.435c-1.795 0-3.25-1.455-3.25-3.25s1.455-3.25 3.25-3.25 3.25 1.455 3.25 3.25-1.455 3.25-3.25 3.25z"></path></g></svg><span>Home</span></router-link>
            <li><svg height="469pt" viewBox="0 -21 469.33333 469" width="469pt" xmlns="http://www.w3.org/2000/svg"><path d="m448 106.839844h-64.8125l21.398438-79.808594c3.050781-11.371094-3.691407-23.082031-15.082032-26.132812-11.390625-3.050782-23.105468 3.710937-26.132812 15.082031l-24.339844 90.859375h-151.511719l21.398438-79.808594c3.050781-11.371094-3.691407-23.082031-15.082031-26.132812-11.394532-3.027344-23.082032 3.710937-26.113282 15.082031l-24.363281 90.859375h-79.359375c-11.777344 0-21.332031 9.535156-21.332031 21.332031 0 11.800781 9.554687 21.335937 21.332031 21.335937h67.902344l-34.324219 128h-76.246094c-11.773437 0-21.332031 9.535157-21.332031 21.332032s9.558594 21.332031 21.332031 21.332031h64.8125l-21.398437 79.808594c-3.050782 11.371093 3.691406 23.082031 15.082031 26.132812 1.835937.492188 3.691406.726563 5.503906.726563 9.410157 0 18.050781-6.273438 20.589844-15.808594l24.382813-90.859375h151.507812l-21.398438 79.808594c-3.046874 11.371093 3.691407 23.082031 15.085938 26.132812 1.832031.492188 3.6875.726563 5.523438.726563 9.410156 0 18.046874-6.273438 20.585937-15.808594l24.363281-90.859375h79.359375c11.777344 0 21.335938-9.535156 21.335938-21.332031s-9.558594-21.332032-21.335938-21.332032h-67.902343l34.324218-128h76.246094c11.777344 0 21.332031-9.535156 21.332031-21.335937 0-11.796875-9.554687-21.332031-21.332031-21.332031zm-154.753906 170.667968h-151.507813l34.324219-128h151.511719zm0 0"/></svg><span>Explore</span></li>
            <router-link class="routed" to="/notifications"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="r-hkyrab r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.532-.812-4.782-2.347-6.335C15.872 2.71 14.01 1.94 12.005 1.93h-.013c-2.004.01-3.866.78-5.242 2.174-1.534 1.553-2.368 3.802-2.346 6.334.037 4.33-2.02 5.967-2.102 6.03-.26.193-.366.53-.265.838.102.308.39.515.712.515h4.92c.102 2.31 1.997 4.16 4.33 4.16s4.226-1.85 4.327-4.16h4.922c.322 0 .61-.206.71-.514.103-.307-.003-.645-.263-.838zM12 20.478c-1.505 0-2.73-1.177-2.828-2.658h5.656c-.1 1.48-1.323 2.66-2.828 2.66zM4.38 16.32c.74-1.132 1.548-3.028 1.524-5.896-.018-2.16.644-3.982 1.913-5.267C8.91 4.05 10.397 3.437 12 3.43c1.603.008 3.087.62 4.18 1.728 1.27 1.285 1.933 3.106 1.915 5.267-.024 2.868.785 4.765 1.525 5.896H4.38z"></path></g></svg><span>Notifications</span> </router-link>
            <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="r-hkyrab r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M19.25 3.018H4.75C3.233 3.018 2 4.252 2 5.77v12.495c0 1.518 1.233 2.753 2.75 2.753h14.5c1.517 0 2.75-1.235 2.75-2.753V5.77c0-1.518-1.233-2.752-2.75-2.752zm-14.5 1.5h14.5c.69 0 1.25.56 1.25 1.25v.714l-8.05 5.367c-.273.18-.626.182-.9-.002L3.5 6.482v-.714c0-.69.56-1.25 1.25-1.25zm14.5 14.998H4.75c-.69 0-1.25-.56-1.25-1.25V8.24l7.24 4.83c.383.256.822.384 1.26.384.44 0 .877-.128 1.26-.383l7.24-4.83v10.022c0 .69-.56 1.25-1.25 1.25z"></path></g></svg> <span>Messages</span></li>
            <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="r-hkyrab r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M19.9 23.5c-.157 0-.312-.05-.442-.144L12 17.928l-7.458 5.43c-.228.164-.53.19-.782.06-.25-.127-.41-.385-.41-.667V5.6c0-1.24 1.01-2.25 2.25-2.25h12.798c1.24 0 2.25 1.01 2.25 2.25v17.15c0 .282-.158.54-.41.668-.106.055-.223.082-.34.082zM12 16.25c.155 0 .31.048.44.144l6.71 4.883V5.6c0-.412-.337-.75-.75-.75H5.6c-.413 0-.75.338-.75.75v15.677l6.71-4.883c.13-.096.285-.144.44-.144z"></path></g></svg><span>Bookmarks</span></li>
            <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="r-hkyrab r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M19.75 22H4.25C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM4.25 3.5c-.414 0-.75.337-.75.75v15.5c0 .413.336.75.75.75h15.5c.414 0 .75-.337.75-.75V4.25c0-.413-.336-.75-.75-.75H4.25z"></path><path d="M17 8.64H7c-.414 0-.75-.337-.75-.75s.336-.75.75-.75h10c.414 0 .75.335.75.75s-.336.75-.75.75zm0 4.11H7c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h10c.414 0 .75.336.75.75s-.336.75-.75.75zm-5 4.11H7c-.414 0-.75-.335-.75-.75s.336-.75.75-.75h5c.414 0 .75.337.75.75s-.336.75-.75.75z"></path></g></svg><span>Lists</span></li>
            <router-link class="routed" to="/profile"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="r-13gxpu9 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M12.225 12.165c-1.356 0-2.872-.15-3.84-1.256-.814-.93-1.077-2.368-.805-4.392.38-2.826 2.116-4.513 4.646-4.513s4.267 1.687 4.646 4.513c.272 2.024.008 3.46-.806 4.392-.97 1.106-2.485 1.255-3.84 1.255zm5.849 9.85H6.376c-.663 0-1.25-.28-1.65-.786-.422-.534-.576-1.27-.41-1.968.834-3.53 4.086-5.997 7.908-5.997s7.074 2.466 7.91 5.997c.164.698.01 1.434-.412 1.967-.4.505-.985.785-1.648.785z"></path></g></svg><span>Profile</span> </router-link>
            <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="r-hkyrab r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M16.5 10.25c-.965 0-1.75.787-1.75 1.75s.784 1.75 1.75 1.75c.964 0 1.75-.786 1.75-1.75s-.786-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75zm-4.5-2.5c-.966 0-1.75.787-1.75 1.75s.785 1.75 1.75 1.75 1.75-.786 1.75-1.75-.784-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75zm-4.5-2.5c-.965 0-1.75.787-1.75 1.75s.785 1.75 1.75 1.75c.964 0 1.75-.786 1.75-1.75s-.787-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75z"></path><path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"></path></g></svg> <span>More</span></li>
            <svg viewBox="0 0 24 24" class="tweet r-jwli3a r-4qtqp9 r-yyyyoo r-1q142lx r-50lct3 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1srniue"><g><path d="M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z"></path></g></svg><button>Tweet</button>
        </ul>
        <div class="profile">
                <img src="./assets/p.jpg" alt="" srcset="">
                <div class="name">
                <h4>Deadkill</h4>
                <span>@danieladekoya</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.menu{
    height: 100vh;
    border-right: 1px solid rgba(128, 128, 128, 0.329);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 40px;
    flex-direction: column;
    padding-bottom: 20px;
    color: var(--black);
    width: 25%;


}
.logo{
    width: 45px;
    height: 45px;
    padding: 5px;
    cursor: pointer;
    transition: all .4s;
    border-radius: 100px
}
ul{
    list-style: none;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
ul li, .routed{
    font-size: 17px;
    font-weight: 900;
    padding: 10px 10px;
    border-radius: 40px;
    margin: 3px 0;
    cursor: pointer;
    transition: all .2s;
    display: flex;
    align-items: center;
}
ul li svg, .routed svg{
    width: 25px;
    height: 25px;
    margin-right: 10px;
}
ul li svg path, .routed svg path{
    fill: var(--black);
    transition: all .2s
}
ul li:hover svg path, .routed:hover svg path{
    fill: #03A9F4;
}
ul li:hover,.logo:hover, .routed:hover{
    background: var(--hover); 
    color: #03A9F4;
}

ul button{
    padding: 15px 0;
    background: var(--primary);
    border: none;
    border-radius: 30px;
    color: white;
    font-size: 16px;
    font-weight: 900;
    width: 100%;
    cursor: pointer;
    outline: none;
}
.routed, a{
    text-decoration: none;
    color: var(--black);
}
.router-link-active.routed, .router-link-active svg path{
    color: #03A9F4;
    fill: #03A9F4;
    border-radius: 100px
}
.profile{
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 100px;
    justify-content: space-around;
    width: 90%;
    transition: all .2s;
    cursor: pointer;
}
.profile:hover{
    background: var(--hover)
}
.profile img{
    width: 40px;
    border-radius: 100px;
}
.tweet{
    display: none;
}
@media (max-width: 1250px){
    .menu{
        padding: 10px 10px;
        width: 70px;
    }
    .logo{
        margin: auto
    }
    ul li, .routed{
        width: auto;
        margin: auto;
    }
    ul li svg, .routed svg{
        margin-right: 0;
    }
    ul li span, .routed span{
        display: none
    }
    ul button{
        display: none;
    }
    .profile .name{
        display: none
    }
    .profile{
        width: auto
    }
    .menu{
        padding: 10px;
    }
    .tweet{
        display: block;
        width: 50px;
        cursor: pointer;
        margin: auto;
        padding: 8px;
        background: #03A9F4;
        border-radius: 100px;
        margin-top: 10px;
    }
    .tweet path{
        fill: white;
    }
}
</style>