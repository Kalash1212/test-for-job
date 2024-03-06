<template>
    <div v-if = 'modalSwitch' class = "modalWindow">
      <button @click="closeModal">Закрыть</button>
      <button @click="modalSwitch = !modalSwitch">Редактировать текст</button>
      <button @click="deleateTask(ModalWindoWId)">Удалить</button>
    </div>
    <div v-else class = "modalWindowchangeText">
      <input v-model="changedText" type="text" placeholder = "Введите измененный текст">
      <button class="button__big" @click="changeTaskByClick(changedText)">Добавить</button>
      <button class="button__big" @click="modalSwitch = !modalSwitch">Назад</button>
    </div>
  </template>
  
  <script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const modalSwitch = ref(true);
    const changedText = ref('');
    const store = useStore();
    return {
      modalSwitch,
      changedText,
      ModalWindoWId: computed(() => store.getters.getModalId),
      changeTaskByClick: (changedText) => store.commit('changeTask', changedText),
      deleateTask: (ModalWindoWId) => store.commit('deleateTask', ModalWindoWId),
      closeModal: () => store.commit('closeModal'),
      
    }
  }
}
  </script>
  <style scoped>
  .modalWindow{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 8vh;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: white;
  }
  .modalWindowchangeText{
    display: flex;
    justify-content: space-between;
    width: 35vw;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: white;
  }
  </style>
  