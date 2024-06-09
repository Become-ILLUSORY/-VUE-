<template>
    <div class="position">
            <div class="swiper-container">
                  <swiper :modules="modules" :loop="true" :autoplay="autoplayOptions" :pagination="paginationOptions">
                        <swiper-slide v-for="(item, index) in images" :key="index">
                              <img :src="item.src" :alt="item.alt" />
                            </swiper-slide>
                        <!-- 如果需要分页器 -->
                        <swiper-pagination v-if="showPagination" />
                      </swiper>
                </div>
    </div>
</template>
 
 
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const modules = [Autoplay, Pagination];
const autoplayOptions = {
    delay: 3000, // 每隔3秒自动切换
    disableOnInteraction: false, // 用户操作后是否停止自动播放
};
const paginationOptions = {
    clickable: true,
};
const images = [
    { src: '/img/轮番图/白马寺.jpg', alt: '白马寺' },
    { src: '/img/轮番图/老君山.jpg', alt: '老君山' },
    { src: '/img/轮番图/丽景门.jpg', alt: '丽景门' },
    { src: '/img/轮番图/龙门石窟.jpg', alt: '龙门石窟' },
    // 更多图片...
];
const showPagination = true; // 是否显示分页器
</script>
 
 
<style scoped>
.swiper-container {
    position: relative;
    width: 700px;
    overflow: hidden;
    margin-top: 25px;
    border-radius: 120px;
    margin-left: 500px;
}

.position {
    margin-top: 5px;
    margin-left: 300px;
    margin-right: 300px;
    /* margin-bottom: 300px; */
    /* padding-bottom: 200px; */
    width: 500px;
}

.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: hidden;


}

.swiper-slide img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    margin-top: 15px;
    


    /* 保持图片的宽高比并填充容器 */
}

img:hover {

    /* 设置基础圆角 */
    /* animation: zoomIn 6s ease-in-out infinite; */
    /* 应用动画，持续时间6秒，缓入缓出，无限循环 */
    transform: scale(1.2);
}

::v-deep .swiper-pagination-bullet {
    width: 16px;
    /* 增大宽度 */
    height: 16px;
    /* 增大高度 */
    opacity: 0.5;
    /* 可选：调整透明度，以改变视觉效果 */
}

::v-deep .swiper-pagination-bullet-active {
    width: 20px;
    /* 分页器激活状态时的宽度，可调整以突出显示 */
    height: 20px;
    /* 分页器激活状态时的高度 */
    opacity: 1;
    /* 激活状态下的透明度，确保可见 */
}
</style>