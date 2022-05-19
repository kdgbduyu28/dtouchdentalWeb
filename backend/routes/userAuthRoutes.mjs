import express from 'express';
export const router = express.Router();
import signin from '../controllers/controlEmailAuth.mjs';



router.post('/api/signin', signin);