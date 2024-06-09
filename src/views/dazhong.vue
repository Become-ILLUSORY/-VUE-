<!-- App.vue -->
<template>
    <div id="app">
        <Comment v-for="(comment, index) in comments" :key="index" :comment="comment" :onDelete="deleteComment"
            :showDeleteButton="true" />
        <form @submit.prevent="addComment" class="comment-form">
            <div class="input-group">
                <label for="username">用户名</label>
                <input id="username" v-model="newComment.username" placeholder="您的昵称" required />
            </div>
            <div class="input-group">
                <label for="comment">您的评论</label>
                <textarea id="comment" v-model="newComment.content" placeholder="分享您的想法..." rows="4"
                    required></textarea>
            </div>
            <button type="submit" class="submit-comment">发表评论</button>
        </form>
    </div>
</template>

<script setup>
import Comment from '../components/Comment.vue';
import { ref } from 'vue';

let comments = ref([
    { id: 1, username: '李海涛', content: '郭智鹏求求你，别打呼噜了！' },
    { id: 2, username: '郭志鹏', content: '张艺豪你在看什么？' }
]);

const newComment = ref({ username: '', content: '' });

const addComment = () => {
    if (newComment.value.username && newComment.value.content) {
        comments.value.push({ id: Date.now(), ...newComment.value });
        newComment.value = { username: '', content: '' };
    }
};

const deleteComment = (id) => {
    comments.value = comments.value.filter(comment => comment.id !== id);
};
</script>

<style>
#app {
    /* text-align: center; */
    /* padding: 20px; */
    /* margin: 20px; */
    position: relative; 
}

.comment-form {
    position: absolute; /* 使用绝对定位使表单脱离正常文档流 */
    bottom: -400px; /* 距离底部20px */
    right: 20px; /* 距离右边20px */
    /* width: 30%; 或根据需要调整宽度 */
}

.comment-form input,
.comment-form textarea {
    display: block;
    width: 20%;
    margin-bottom: 10px;
    padding: 10px;
    padding-left: 10px;
    box-sizing: border-box;
    
}

.comment-form button {
    background-color: lightblue;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;


}

.comment-form {
    margin-top: 20px;
}

.input-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    padding-left: 250px;


}

.input-group label {
    font-size: 16px;
    color: #4b4b4b;
    margin-bottom: 5px;
    font-weight: bolder;

}

input,
textarea {
    padding: 10px;
    border: 1px solid #700e0e;
    border-radius: 5px;
    font-size: 14px;
}

textarea {
    resize: vertical;
}

.submit-comment {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
    transition: background-color 0.3s ease;
    margin-left: 475px;
    margin-right: 625px;
    margin-top: 50px;
}

.submit-comment:hover {
    background-color: #0056b3;
}
</style>