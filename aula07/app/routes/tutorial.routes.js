import { Router } from 'express';
import * as tutorials from '../controllers/tutorial.controller.js';

const router = Router();

// Cria um novo tutorial
router.post('/', tutorials.create);

// Busca todos os tutoriais
router.get('/', tutorials.findAll);

// Busca todos os tutoriais publicados
router.get('/published', tutorials.findAllPublished);

// Busca todos os tutoriais que não foram publicados (corrigir com erro)
router.get('/notpublished', tutorials.findAllNotPublished);

// Busca um tutorial pelo id
router.get('/:id', tutorials.findOne);

// Atualiza um tutorial pelo id
router.put('/:id', tutorials.update);

// Deleta um tutorial pelo id
router.delete('/:id', tutorials.deleteTutorial);

// Deleta todos os tutoriais
router.delete('/', tutorials.deleteAll);

export default router;
