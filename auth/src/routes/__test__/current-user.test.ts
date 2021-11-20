import request from 'supertest';
import { app } from '../../app';

it('a valid user gets current user data', async () => {
    const cookie = await signin();
    const response = await request(app)
        .get('/api/users/currentuser')
        .set('Cookie', cookie)
        .send()
        .expect(200);

    expect(response.body.currentUser.email).toEqual('test@test.com');
});

it('responds with null user data for unauthentication user', async () => {
    await request(app)
        .get('/api/users/currentuser')
        .send()
        .expect(401);
});