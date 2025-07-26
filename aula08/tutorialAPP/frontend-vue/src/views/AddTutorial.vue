<template>
  <div>
    <h3>Novo Tutorial</h3>
    <form @submit.prevent="saveTutorial">
      <div class="mb-3">
        <label class="form-label">Título</label>
        <input v-model="tutorial.title" class="form-control" required />
      </div>
      <div class="mb-3">
        <label class="form-label">Descrição</label>
        <textarea v-model="tutorial.description" class="form-control" required></textarea>
      </div>
      <button class="btn btn-success">Salvar</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '../services/api'

const router = useRouter()
const tutorial = ref({ title: '', description: '' })

const saveTutorial = async () => {
  await api.post('/tutorials', tutorial.value)
  router.push('/')
}
</script>