import fs from 'fs';
const imgValidations = (data: any) => {
	const width: number = data.width;
	const height: number = data.height;
	const filename: string = data.filename;
	const directory = './public/images';
	const files = fs.readdirSync(directory);
	const image = `${filename}.jpg`;

	if (filename.length === 0 ?? undefined) {
		throw new SyntaxError('Please, give us the file name');
	}

	if (width === 0 ?? undefined) {
		throw new SyntaxError('Please, give us the image width');
	}

	if (height === 0 ?? undefined) {
		throw new SyntaxError('Please, give us the image height');
	}

	if (typeof filename != 'string') {
		throw new SyntaxError('The file name is wrong, please try again.');
	}

	if (files.includes(image) === false) {
		throw new SyntaxError(
			'The file name does not exist in our directory, please try again!.'
		);
	}

	if (Number.isNaN(width)) {
		throw new SyntaxError('The width value is wrong, please try again');
	}

	if (Number.isNaN(height)) {
		throw new SyntaxError('The height value is wrong, please try again!.');
	}
};

export default imgValidations;
