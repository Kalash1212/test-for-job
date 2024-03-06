<template>
    <div >
        <h3>Задачи</h3>
        <div class="card__box" v-for="(item, indx) in tasks" v-bind:key="indx">
            <div >{{item.id}}</div>  
            <div >{{item.task}}</div>
            <button @click="changeModalId(item.id)">Редактировать</button>
            <ModalWindow class = "modalWindow__popUp" v-if="ModalWindoWId == item.id"></ModalWindow>
        </div>
    </div>
  </template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import ModalWindow from "./ModalWindow.vue"

export default {
  components: { ModalWindow },
  setup () {
    const store = useStore()

    return {
      ModalWindoWId: computed(() => store.getters.getModalId),
      tasks: computed(() => store.getters.getTasks),
      changeModalId: (id) => store.commit('changeModalId', id)
    }
  }
}
</script>

  <style>
  .card__box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 40vw;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
    margin-bottom: 10px;
    position: relative;
  }
  .modalWindow__popUp{
    z-index: 1;
    position: absolute;
    top: -15px;
    right: 10px;
  }
  </style>