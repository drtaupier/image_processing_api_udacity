import imageResize from '../../middleware/utilities';
import imgValidations from '../../middleware/errors';
import express from 'express';
import path from 'path';
import fs from 'fs';
const images = express.Router();
const directory = './public/output';
const files = fs.readdirSync(directory);

images.get('/', async (req, res) => {
	const query = req.query;
	const filename: any = query.filename;
	const width: any = query.width;
	const height: any = query.height;
	const filenameImg: string = filename.toString();
	const widthImg: number = parseInt(width, 10);
	const heightImg: number = parseInt(height, 10);
	const existingImage: string = path.join(
		__dirname,
		`../../../../public/images/${filenameImg}.jpg`
	);
	const imgName: string = `${filenameImg}${width}x${height}.jpg`.toString();
	const outputFile = path.join(__dirname, `../../../../public/output/${imgName}`);

	try {
		imgValidations(query);
		if (files.includes(imgName) === true) {
			console.log('Imagen existente: ', existingImage);
			res.status(200).sendFile(existingImage);
		} else {
			await imageResize(filenameImg, widthImg, heightImg);
			res.status(201).sendFile(outputFile);
		}
	} catch (error: any) {
		res.status(400).json({
			status: 'error',
			msg: error.message,
		});
	}
});

export default images;
