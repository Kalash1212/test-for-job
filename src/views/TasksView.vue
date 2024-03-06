<template>
  <div class="tasks">
    <h1>Страница с задачами</h1>
  <nav>
    <router-link to="/">Главная</router-link> |
    <router-link to="/tasks">Задачи</router-link>
  </nav>
  <NewTaskForm/>
  <TasksTable/>
  </div>
</template>

<script setup>
  import NewTaskForm from "@/components/NewTaskForm.vue";
  import TasksTable from "@/components/TasksTable.vue";

</script>
<style>
  
</style>
