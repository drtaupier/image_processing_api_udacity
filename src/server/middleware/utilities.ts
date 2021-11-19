import sharp from 'sharp';
const imageResize = async (name: string, width: number, height: number) => {
	const imgComplete: string = `${name}${width}x${height}.jpg`.toString();
	const newFile = `./public/output/${imgComplete}`;
	await sharp(`./public/images/${name}.jpg`)
		.resize(width, height, {
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
