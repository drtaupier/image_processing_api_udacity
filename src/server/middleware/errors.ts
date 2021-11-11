import fs from 'fs';
const imgValidations = (data: any) => {
	const width: any = data;
	const height: any = data;
	const filename: any = data;
	const widthImg: number = parseInt(width, 10);
	const heightImg: number = parseInt(height, 10);
	const directory = './public/images';
	const files = fs.readdirSync(directory);
	const image = `${filename}.jpg`;
	if (typeof filename != 'string') {
		throw new SyntaxError('The file name is wrong, please try again.');
	}
	if (Number.isNaN(widthImg)) {
		throw new SyntaxError('The width value is wrong, please try again');
	}
	if (Number.isNaN(heightImg)) {
		throw new SyntaxError('The height value is wrong, please try again!.');
	}
	if (files.indexOf(image) === -1) {
		throw new SyntaxError(
			'The file name does not exist in our directory, please try again!.'
		);
	}
};

export default imgValidations;
