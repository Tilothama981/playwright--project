import { test, expect } from '@playwright/test';

test('API Request Validation', async ({ request }) => {

  const response = await request.get('https://api.demoblaze.com/entries');

  // ✅ Validate status
  expect(response.status()).toBe(200);

  const body = await response.json();

  // ✅ Validate data exists
  expect(body.Items.length).toBeGreaterThan(0);

  // ✅ Validate specific field
  expect(body.Items[0]).toHaveProperty('title');
  expect(body.Items[0]).toHaveProperty('price');

  // ✅ Example validation
  expect(body.Items[0].cat).toBe('phone');

});