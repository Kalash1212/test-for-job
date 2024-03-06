<template>
  <div class = 'addBlock'>
    <p class="text__big">Добавить новую задачу</p>
    <input v-model="taskText" type="text" placeholder = "Введите задачу">
    <button class="button__big" @click="addTaskByClick(id)">Добавить</button>
  </div>
</template>
<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const taskText = ref('')
    const store = useStore();
    return {
      taskText,
      id: computed(() => store.getters.getTasks.length+1),
      addTaskByClick: (id) => store.commit('addTask', {id:id,task:taskText.value})
    }
  }
}
</script>
<style>
.text__big{
  margin-bottom: 10px;
}
.addBlock{
  margin-top: 15px;
  margin-bottom: 10px;
  max-width: 40vw;
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
}
.button__big{
  margin-left: 10px;
}
</style>
