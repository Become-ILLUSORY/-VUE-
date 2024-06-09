<!-- Comment.vue -->
<template>
  <div class="comment">
    <p class="username">{{ comment.username }}:</p>
    <p class="content">{{ comment.content }}</p>
    <button v-if="showDeleteButton" @click="deleteComment" class="delete-button">删除</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 假设comment是从父组件传入的
const props = defineProps({
  comment: {
    type: Object,
    required: true
  },
  onDelete: {
    type: Function,
    required: true
  },
  showDeleteButton: {
    type: Boolean,
    default: false
  }
});

const deleteComment = () => {
  props.onDelete(props.comment.id);
};
</script>

<style scoped>
.comment {
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  margin-top: 20px;
  margin-left: 150px;
  margin-right: 170px;

  background-color: rgba(235, 235, 235, 0.425);
    /* 半透明黑色层 */
    /* padding: 5px; */
    border-radius: 30px;
}

.username {
  font-weight: bold;
  color:#4b4b4b;


}
.content{
  font-weight: bold;
  color:#4b4b4b;

}

.delete-button {
  background-color: tomato;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 3px;
}
</style>