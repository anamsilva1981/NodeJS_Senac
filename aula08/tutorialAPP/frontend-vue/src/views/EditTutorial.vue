<template>
  <div v-if="tutorial">
    <h3>Editar Tutorial</h3>
    <form @submit.prevent="updateTutorial">
      <div class="mb-3">
        <label class="form-label">Título</label>
        <input v-model="tutorial.title" class="form-control" required />
      </div>
      <div class="mb-3">
        <label class="form-label">Descrição</label>
        <textarea v-model="tutorial.description" class="form-control" required></textarea>
      </div>
      <div class="form-check mb-3">
        <input type="checkbox" v-model="tutorial.published" class="form-check-input" />
        <label class="form-check-label">Publicado</label>
      </div>
      <button class="btn btn-primary">Atualizar</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import api from '../services/api'

const route = useRoute()
const router = useRouter()
const tutorial = ref(null)

onMounted(async () => {
  const res = await api.get(`/tutorials/${route.params.id}`)
  tutorial.value = res.data
})

const updateTutorial = async () => {
  await api.put(`/tutorials/${route.params.id}`, tutorial.value)
  router.push('/')
}
</script>