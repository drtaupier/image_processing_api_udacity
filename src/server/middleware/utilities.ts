import sharp from 'sharp';
const imageResize = async (
	name: string,
	width: string,
	height: string
): Promise<void> => {
	const widthImg: number = parseInt(width, 10);
	const heightImg: number = parseInt(height, 10);
	const imgComplete: string = `${name}${widthImg}x${heightImg}.jpg`.toString();
	const newFile = `./public/output/${imgComplete}`;
	await sharp(`./public/images/${name}.jpg`)
		.resize(widthImg, heightImg, {
			fit: 'contain',
			background: {
				r: 0,
				b: 0,
				g: 0,
			},
		})
		.toFile(newFile);
};

// async (name: string, width: number, height: number) => {};

export default imageResize;
