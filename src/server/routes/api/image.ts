import sharp from 'sharp';
import express from 'express';
import imgValidations from '../../middleware/errors';
import path from 'path';
import fs from 'fs';
const images = express.Router();

images.get('/', async (req, res) => {
	const query = req.query;
	const width: any = query.width;
	const height: any = query.height;
	const filename: any = query.filename;
	const filenameImg: string = filename.toString();
	const widthImg: number = parseInt(width, 10);
	const heightImg: number = parseInt(height, 10);
	const directory = './public/output';
	const files = fs.readdirSync(directory);
	const imgComplete: string = `${filename}${width}x${height}.jpg`.toString();
	try {
		imgValidations(query);
		const newFile = `./public/output/${imgComplete}`;
		const newFileUrl: string = newFile.slice(1); //Quitamos el punto con el que inicia el string
		const url = path.join(__dirname, `../../../..${newFileUrl}`);
		if (files.includes(imgComplete) === true) {
			console.log(files.indexOf(imgComplete));
			console.log('Archivos: ', files);
			console.log('File enviado: ', imgComplete);
			res.status(200).sendFile(url);
		} else {
			await sharp(`./public/images/${filenameImg}.jpg`)
				.resize(widthImg, heightImg, {
					fit: 'contain',
					background: {
						r: 0,
						b: 0,
						g: 0,
					},
				})
				.toFile(newFile);
			res.status(201).sendFile(url);
		}
	} catch (error: any) {
		res.status(400).json({
			status: 'error',
			msg: error.message,
		});
	}
});

export default images;
