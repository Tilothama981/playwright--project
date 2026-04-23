// 👉 “I used Playwright request fixture to perform API testing”
// 👉 “Implemented GET request to fetch data and validate status code”
// 👉 “Implemented POST request with headers and payload to create data”
// 👉 “Validated response using assertions like status code and body”
// 👉 “Used dynamic data (Date.now) to avoid duplicate entries”
import { test, expect } from '@playwright/test';

test('GET API Request', async ({ request }) => {
  const response = await request.get('https://gorest.co.in/public/v2/users');

  expect(response.status()).toBe(200);

  const body = await response.json();
  console.log(body);
});

test('POST API Request', async ({ request }) => {
  const response = await request.post('https://gorest.co.in/public/v2/users', {
    headers: {
      Authorization: 'Bearer YOUR_TOKEN',
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    data: {

      email: `test${Date.now()}@mail.com`,
      gender: 'male',
      status: 'active'
    }
  });

  expect(response.status()).toBe(201);

  const body = await response.json();
  console.log(body);

  expect(body.gender).toBe('male');
});