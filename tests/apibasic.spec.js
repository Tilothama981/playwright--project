import { test, expect } from '@playwright/test';

let placeId;

test.describe('End-to-End Add Place API Test', () => {

  // ======================
  // 1️⃣ ADD PLACE (POST)
  // ======================
  test('POST - Add a new place', async ({ request }) => {

    const requestBody = {
      location: {
        lat: -38.383494,
        lng: 33.427362
      },
      accuracy: 50,
      name: "Mohan Location",
      phone_number: "(+91) 983 893 3937",
      address: "Karnataka,Bengaluru",
      types: ["shoe park", "shop"],
      website: "http://google.com",
      language: "French-IN"
    };

    const response = await request.post('/maps/api/place/add/json?key=qaclick123', {
      data: requestBody
    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody.scope).toBe("APP");

    placeId = responseBody.place_id;
    console.log("Created Place ID:", placeId);
  });


  // ======================
  // 2️⃣ GET PLACE DETAILS
  // ======================
  test('GET - Fetch place details', async ({ request }) => {

    const response = await request.get(
      `/maps/api/place/get/json?key=qaclick123&place_id=${placeId}`
    );

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody.address).toContain("Bengaluru");

    console.log("Fetched details:", responseBody);
  });


  // ======================
  // 3️⃣ UPDATE PLACE (PUT)
  // ======================
  test('PUT - Update place address', async ({ request }) => {

    const updateBody = {
      place_id: placeId,
      address: "Hyderabad, Telangana",
      key: "qaclick123"
    };

    const response = await request.put(
      '/maps/api/place/update/json',
      { data: updateBody }
    );

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody.msg).toBe("Address successfully updated");

    console.log("Updated Address Successfully");
  });


  // ======================
  // 4️⃣ DELETE PLACE (Optional)
  // ======================
  /*
  test('DELETE - Remove place', async ({ request }) => {

    const deleteBody = {
      place_id: placeId
    };

    const response = await request.post(
      '/maps/api/place/delete/json?key=qaclick123',
      { data: deleteBody }
    );

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody.status).toBe("OK");

    console.log("Place deleted successfully");
  });
  */


  // ======================
  // 5️⃣ GET After Delete (Optional)
  // ======================
  /*
  test('GET - Validate deleted place returns error', async ({ request }) => {

    const response = await request.get(
      `/maps/api/place/get/json?key=qaclick123&place_id=${placeId}`
    );

    expect(response.status()).toBe(404);

    const responseBody = await response.json();
    expect(responseBody.msg)
      .toContain("Get operation failed");

    console.log("Verified Place is Deleted");
  });
  */

});
