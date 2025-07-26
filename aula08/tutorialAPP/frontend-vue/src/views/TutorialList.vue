<template>
  <div>
    <router-link to="/add" class="btn btn-success mb-3">Adicionar Tutorial</router-link>
    <table class="table table-bordered">
      <thead>
        <tr><th>Título</th><th>Descrição</th><th>Status</th><th>Ações</th></tr>
      </thead>
      <tbody>
        <tr v-for="t in tutorials" :key="t.id">
          <td>{{ t.title }}</td>
          <td>{{ t.description }}</td>
          <td>{{ t.published ? 'Publicado' : 'Pendente' }}</td>
          <td>
            <router-link :to="'/edit/' + t.id" class="btn btn-sm btn-primary me-1">Editar</router-link>
            <button @click="removeTutorial(t.id)" class="btn btn-sm btn-danger">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import api from '../services/api'

const tutorials = ref([])

const fetchTutorials = async () => {
  const res = await api.get('/tutorials')
  tutorials.value = res.data
}

const removeTutorial = async (id) => {
  await api.delete(`/tutorials/${id}`)
  fetchTutorials()
}

onMounted(fetchTutorials)
</script>