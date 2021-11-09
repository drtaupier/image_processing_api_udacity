import { promises } from 'dns';
import express from 'express';
import { truncate } from 'lodash';
import sharp from 'sharp';
import path from 'path';
import { nextTick } from 'process';
const images = express.Router();
const app = express();

images.get('/', async (req, res) => {
	const query = req.query;
	const filename = query.filename;
	const width: any = query.width;
	const height: any = query.height;
	const widthImg: number = parseInt(width, 10);
	const heightImg: number = parseInt(height, 10);

	if (isNaN(widthImg)) {
		res.status(400).send('The width parameter is invalid, please try again');
	} else if (isNaN(heightImg)) {
		res.status(400).send('The height parameter is invalid, please try again');
	} else {
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
	}
});

export default images;
