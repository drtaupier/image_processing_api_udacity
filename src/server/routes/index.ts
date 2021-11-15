import express from 'express';
import images from './api/image';
const routes = express.Router();

routes.get('/', (req, res) => {
	res.json({
		msg:
			'Remember, you need enter the filename value, then the width value and the height value',
	});
});

routes.use('/images', images);

export default routes;
