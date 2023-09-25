import { test, expect } from '@playwright/test';

test.describe('Testy API', () => {
    test('Test requesta get', async ({ request }) => {
    const response = await request.get('/endpoint')
    expect(response.status()).toBe(200);
    });
})
