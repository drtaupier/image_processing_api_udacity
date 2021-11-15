import images from '../server/routes/api/image';
import routes from '../server/routes/index';
import request from 'supertest';

describe('GET /api', function () {
	it('respond with json format the next steps', function () {
		request(routes)
			.get('/api')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200);
	});
});

describe('GET /api/images/:filename/:width/:height', () => {
	it('We can check if the filename parameter exists or no', () => {
		request(images)
			.get('/images/filename=santamonica&width=400&height=200')
			.expect(200);
	});
});
