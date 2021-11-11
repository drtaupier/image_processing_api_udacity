import { config as dotenv } from 'dotenv';
import express, { NextFunction } from 'express';
import routes from './routes/index';
import path from 'path';
import morgan from 'morgan';
dotenv();
const app = express();
const port = process.env.PORT || 3000;

//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static('dist'));
app.use('/public', express.static('public'));
app.use('/api', routes);

app.set('views', path.resolve(__dirname, '../../src/client/views'));

app.listen(port, () => {
	console.log(`Server started at localhost ${port}`);
});
