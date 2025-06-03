import express from 'express';
import candidateController from '../controllers/candidat.controller.js';
import upload from '../config/multer.config.js';


const candidateRoutes = express.Router();
candidateRoutes.get('/list', candidateController.list);

candidateRoutes.post('/create', upload.single('document'), candidateController.create);
candidateRoutes.put('/:id', candidateController.update);
candidateRoutes.get('/:id', candidateController.getById);





export default candidateRoutes;

