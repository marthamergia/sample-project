const { Client } = require('../models');


test('Creating a new client should return a valid client object', async () => {
  const clientData = {
    name: 'John Doe',
    age: 25,
    gender: 'male',
    additionalInfo: {
      company: 'ABC Corp',
      email: 'john.doe@example.com',
      phone: '1234567890',
      address: '123 Main St',
    },
  };

  const createdClient = await Client.create(clientData);

  expect(createdClient).toBeDefined();
  expect(createdClient.name).toBe(clientData.name);
  // Add more assertions as per your requirements
});

