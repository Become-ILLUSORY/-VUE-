<!--  -->
<script setup>
function updateTime() {
    // 获取当前时间
    var now = new Date();

    // 将时间格式化为字符串
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var timeString = hours + ":" + minutes + ":" + seconds;

    // 将时间字符串显示在页面上
    document.getElementById("current-time").innerHTML = timeString;
}
// 每秒钟更新一次时间
setInterval(updateTime, 1000);

</script>


<template>


        <body>
            <div class=top id="current-time"></div>
            <div class="head">
                <!-- <img src="/img/head.jpg"> -->
                洛阳文旅

            </div>
            <div class=nv>
                <nav>
                    <ul class=moban14>
                        <li class="apple"><router-link to="/" >首页</router-link></li>
                        <li class="apple"><router-link to="/jingdian">景点介绍</router-link></li>
                        <li class="apple"><router-link to="/gonglue">旅游攻略</router-link></li>
                        <li class="apple"><a href="https://you.ctrip.com/place/luoyang198.html#ctm_ref=www_hp_bs_lst" target="_blank">旅游服务</a></li>
                        <li class="apple"><router-link to="/dazhong">大众点评</router-link></li>
                        <li class="apple"><router-link to="/about">关于我们</router-link></li>
                        
                    </ul>
                </nav>
            </div>

            <router-view></router-view>
        </body>

</template>


<style scoped>
* {
    margin: 0px;
    padding: 0px;
}

.head {
    font-size: 40px;
    display: flex;
    /* margin-top: 3%; */
    margin-bottom: 15px;
    margin-left: 55px;
    margin-right: 1380px;
    color: black;
    /* 或其他颜色，取决于背景图片的基调 */
    background-color: rgba(235, 235, 235, 0.425);
    /* 半透明黑色层 */
    padding: 5px;
    border-radius: 30px;
    
}

.top {
    /* font-size: bolder; */
    font-weight: bolder;
    height: 15px;
    /* line-height: 20px; */
    color: #333333;
    background-color: rgba(235, 235, 235, 0.425);
    /* 半透明黑色层 */
    /* padding: 5px; */
    /* padding-top: 5px;
     */
    /* margin-top: 20px; */
    height: 50px;
    margin-left: 800px;
    border-radius: 30px;
    width: 100px;
    font-size: 16px;
    text-align: right;
    /* 将文本右对齐 */
    padding-right: 21px;
    margin-left: 1450px;
    margin-right: 500px;
    padding-top: 10px;
    /* padding-left: 10px */
}

.top .top_home span.home-top {
    background: url(/img/home.png) no-repeat;
}

.nv {
    height: 50px;
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */

    /* 设置导航栏的基本样式 */
    /* position: fixed; */
    /* top: 100px; */
    /* left: 0; */
    /* right: 0; */

    /* 应用模糊背景效果 */
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.3);

    /* 添加边框圆角 */
    border-radius: 30px;

    /* 使用margin代替padding来创建左右边距，同时保持宽度为100% */
    margin-left: 60px;
    /* 上下边距为0，左右边距各20px */
    margin-right: 60px;
    /* 上下边距为0，左右边距各20px */
    /* margin-top: 100px; */
}

.apple:hover {
    transform: scale(1.2);
}

nav {
    text-align: center;
    /* 将子元素居中 */
}

ul {
    list-style: none;
    /* 去除默认的列表样式 */
    display: inline-block;
    /* 设置为行内块级元素，使其能够水平排列 */
    padding: 0;
    /* 去除默认的内边距 */
}

.moban14 li {
    display: inline-block;
    /* 设置为行内块级元素，使其能够水平排列 */
    margin-right: 20px;
    /* 调整菜单项之间的间距 */
    font-size: 16px;
    /* 调整菜单项文字的大小 */
    line-height: 50px;
    /* 调整菜单项文字的行高 */
}



li:last-child {
    margin-right: 0;
    /* 去除最后一个菜单项的右侧间距 */
}

.moban14 li a {

    color: #4b4b4b;
    text-align: center;
    cursor: pointer;
    padding: 0px 33px;
    font-weight: bold;
    text-decoration: none;
    margin-top: auto;
}
</style>
