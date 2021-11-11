import sharp from 'sharp';
import express from 'express';
import imgValidations from '../../middleware/errors';
const images = express.Router();

images.get('/', async (req, res) => {
	const query = req.query;
	const width: any = query.width;
	const height: any = query.height;
	const filename: any = query.filename;
	const widthImg: number = parseInt(width, 10);
	const heightImg: number = parseInt(height, 10);
	try {
		imgValidations(query);
		const newFile = `./public/output/${filename}${widthImg}x${heightImg}.jpg`;
		await sharp(`./public/images/${filename}.jpg`)
			.resize(widthImg, heightImg, {
				fit: 'contain',
				background: {
					r: 0,
					b: 0,
					g: 0,
				},
			})
			.toFile(newFile);
		const newFileUrl: string = newFile.slice(1); //Quitamos el punto con el que inicia el string
		console.log(newFileUrl);
		res.redirect(`http://localhost:3000${newFileUrl}`);
	} catch (error: any) {
		res.status(400).json({
			status: 'error',
			msg: error.message,
		});
	}
});

export default images;
