<template>
    <div class="container">
      <div class="top-pic">

        <img src="https://pic.ichengzii.com/LightPicture/2024/06/ffaf6590c3ddc9c1.jpg" alt="白马寺">
        <div class="text-block-zuo">白马寺（White Horse Temple），位于河南省洛阳市瀍河回族区白马寺镇310国道边，是中国佛教的发源地，始建于东汉永平十一年（公元68年），是佛教传入中国后兴建的第一座官办寺院，乃中国、越南、朝鲜、日本及欧美国家的“释源”和“祖庭”。
            白马寺把佛教传到了朝鲜、日本和东南亚，使佛教在亚洲得到普及，后来又进入欧美，成为世界各地佛教信徒参拜的圣地。因此20世纪末以来，日本捐资重修白马寺钟楼并立空海雕像；泰国、印度、缅甸政府相继出资于白马寺建造佛殿，使之成为全世界唯一拥有中、印、缅、泰四国风格佛殿的国际化寺院。韩国、新加坡、马来西亚均来此受戒，美国、德国、加拿大皆出席该寺方丈升任法会，作为国际化程度最高的寺院，白马寺可谓名副其实的“天下第一寺”。</div>
      </div>
      <div class="center-pic">
        <div class="text-block">老君山（The Laojun Mountain），“天下无双圣境，世界第一仙山”。原名景室山，位于十三朝古都洛阳的栾川县县城东南三千米处。八百里伏牛山脉的主峰，玉皇顶海拔2217米。距今已有两千多年人文历史，是道教中历史最长的山脉。
            春秋时期，被公认为道教始祖的老子李耳到此归隐修炼，使之成为“道源”（道教起源地）和“祖庭”（祖师之庭）。北魏始于其上建老君庙以纪念。唐贞观十一年（637年），唐太宗派尉迟敬德重修景室山铁顶老君庙，并赐名为“老君山”。明万历三十一年（1603年），明神宗诏谕老君山为“天下名山”，并发帑金建殿，成为是历史上唯一被皇封为“天下名山”的中国山脉。</div>
        <img src="https://pic.ichengzii.com/LightPicture/2024/06/5f96b3cf4b507738.jpg" alt="老君山">

      </div>
      <div class="bottom-pic">

        <img src="https://pic.ichengzii.com/LightPicture/2024/06/0e8beb573754ebf2.jpg" alt="龙门石窟">
        <div class="text-block-zuo">龙门石窟位于河南省洛阳市，是世界上造像最多、规模最大的石刻艺术宝库，被联合国教科文组织评为“中国石刻艺术的最高峰”，位居中国各大石窟之首。现为世界文化遗产、全国重点文物保护单位、国家AAAAA级旅游景区。龙门石窟造像多为皇家贵族所建，是世界上绝无仅有的皇家石窟。主要有按照武则天的形象塑造的卢舍那大佛、孝文帝为冯太后凿古阳洞、兰陵王孙于万佛洞造像、李泰为长孙皇后造宾阳南洞、韦贵妃凿敬善寺、高力士为唐玄宗造无量寿佛等。又经历天竺、新罗、吐火罗、康国等外国人开窟造像，发现有欧洲纹样、古希腊石柱等，堪称全世界国际化水平最高的石窟。</div>
      </div>
    </div>
  </template>
  <script setup>
  // 在这里导入图片或者写相关的Vue逻辑
  </script>
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* 让元素靠左对齐 */
  }
  .top-pic, .bottom-pic {
    display: flex;
    align-items: center;
    margin-left: 160px;
    margin-top: 30px;
  }
  .center-pic {
    display: flex;
    justify-content: flex-end; /* 让中间图片靠右对齐 */
    position: relative;
    top: -50%; /* 让中间图片在上下图片中间 */
    margin-left: 350px;
    margin-top: 30px;
  }
  .text-block-zuo {
    width: 600px; /* 文本块的宽度可以自己设置 */
    margin-right: 10px; /* 如果你想文本在左侧，保持这个margin */
    /* 如果你想文本在右侧，使用margin-left: 10px; 并且将它移到img后面 */

    height: 210px;
    margin-left: 100px;
    background-color: rgba(235, 235, 235, 0.425); /* 半透明黑色层 */
    border-radius: 30px;
    font-size: 15px;
    color: black;
    /* font-weight: bolder; */
  }
  .text-block{
    /* padding-left: 100px; */
    /* margin-left: 20px; */
    width: 600px;
    margin-right: 100px;
    height: 210px;

    background-color: rgba(235, 235, 235, 0.425); /* 半透明黑色层 */
    border-radius: 30px;
    font-size: 15px;
    color: black;
    /* font-weight: bolder; */
  }
  img {
    /* 设置图片的宽高 */
    width: 400px;
    height: 220px;
    object-fit: cover;
    margin-left: 10px; /* 如果你想文本在左侧，使用这个margin */
    /* 如果你想文本在右侧，移除这个margin, 并且将text-block移至img之后 */
    border-radius: 30px;
  }
  </style>
  
