import express from 'express';
import images from './api/image';
const routes = express.Router();

routes.get('/', (req, res) => {
	res.send('Main API route!');
});

routes.use('/images', images);

export default routes;
