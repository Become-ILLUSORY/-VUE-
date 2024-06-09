<template>
    <div ref="imageWrapper" @click="handleClick">
        <img :src="imageUrl" alt="Clickable Image">
    </div>
</template>

<script>
export default {
    props: {
        imageUrl: {
            type: String,
            required: true,
        },
        topUrl: {
            type: String,
            required: true,
        },
        bottomUrl: {
            type: String,
            required: true,
        },
    },
    methods: {
        handleClick(event) {
            const imageRect = this.$refs.imageWrapper.getBoundingClientRect();
            const clickY = event.clientY - imageRect.top;

            if (clickY < imageRect.height / 2) {
                window.open(this.topUrl, '_blank'); // 在新标签页中打开顶部链接
            } else {
                window.open(this.bottomUrl, '_blank'); // 在新标签页中打开底部链接
            }
        },
    },
};
</script>

<style scoped>
img {
    width: 93%;
    height: 100%;
    /* 删除或调整padding-left，具体依据设计需求 */
    /* padding-left: 130px; */
    margin-left: 10px;
    margin-top: 30px;
    /* border-radius: 30px; */
    border-radius: 30px;

}
</style>