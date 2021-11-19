import imageResize from '../../middleware/utilities';
import imgValidations from '../../middleware/errors';
import express from 'express';
import path from 'path';
import fs from 'fs';
const images = express.Router();
const directory = './public/output';
const files: string[] = fs.readdirSync(directory);

images.get('/', async (req, res) => {
	const query = req.query;
	const filename = query.filename as string;
	const width: any = query.width;
	const height: any = query.height;
	const existingImage: string = path.join(
		__dirname,
		`../../../../public/images/${filename}.jpg`
	);
	const imgName: string = `${filename}${width}x${height}.jpg`.toString();
	const outputFile = path.join(__dirname, `../../../../public/output/${imgName}`);

	try {
		imgValidations(query);
		if (files.includes(imgName) === true) {
			res.status(200).sendFile(existingImage);
		} else {
			await imageResize(filename, width, height);
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
