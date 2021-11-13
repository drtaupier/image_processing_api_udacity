import fs from 'fs';
const imgValidations = (data: any) => {
	const width: any = data.width;
	const height: any = data.height;
	const filename: any = data.filename;
	const filenameImg: string = filename.toString();
	const widthImg: number = parseInt(width, 10);
	const heightImg: number = parseInt(height, 10);
	const directory = './public/images';
	const files = fs.readdirSync(directory);
	const image = `${filenameImg}.jpg`;

	if (filenameImg.length === 0 || undefined) {
		throw new SyntaxError('Please, give us the file name');
	}

	if (widthImg === 0 || undefined) {
		throw new SyntaxError('Please, give us the image width');
	}

	if (heightImg === 0 || undefined) {
		throw new SyntaxError('Please, give us the image height');
	}

	if (typeof filenameImg != 'string') {
		throw new SyntaxError('The file name is wrong, please try again.');
	}

	if (files.indexOf(image) === -1) {
		console.log(files.indexOf(image));

		throw new SyntaxError(
			'The file name does not exist in our directory, please try again!.'
		);
	}

	if (Number.isNaN(widthImg)) {
		throw new SyntaxError('The width value is wrong, please try again');
	}

	if (Number.isNaN(heightImg)) {
		throw new SyntaxError('The height value is wrong, please try again!.');
	}
};

export default imgValidations;
