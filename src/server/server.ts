import express from 'express';
import routes from './routes/index';
import path, { dirname } from 'path';
import morgan from 'morgan';

const app = express();
const port = 3000;

//Middlewares
app.use(morgan('dev'));
app.use(express.static('dist'));
app.use('/public', express.static('public'));
app.use('/api', routes);

app.set('views', path.resolve(__dirname, '../../src/client/views'));

app.listen(port, () => {
	console.log(`Server started at localhost ${port}`);
});
