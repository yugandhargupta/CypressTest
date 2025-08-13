describe('Create a Note', () => {
  let token;

  before(() => {
    cy.request({
      method: 'POST',
      url: 'https://practice.expandtesting.com/notes/api/users/login',
      body: {
         name: "Rob2",
        email: 'Rob2@gmail.com',
        password: 'Tobia2123!'
      }
    }).then((response) => {
      console.log('Login response:', response.body);
      expect(response.status).to.eq(200);
      console.log('Note Creation Response:', response.body);
      token = response.body.data.token; // Adjust based on actual response shape
      expect(token).to.exist;
    });
  });
it('create a note and return an ID', () => {
  cy.request({
    method: 'POST',
    url: 'https://practice.expandtesting.com/notes/api/notes',
    headers: {
      'x-auth-token': token,
      'Content-Type': 'application/json'
    },
    body: {
      title: 'Test Note',
      description: 'This is a test note created through API testing.',
      category: 'Work'
    }
  }).then((response) => {
    console.log('Response Body:', response.body);
    cy.log(JSON.stringify(response.body));

    // Basic response check
    expect(response.status).to.eq(200);

    // Adjust according to the actual structure
    expect(response.body).to.have.property('data');
    expect(response.body.data).to.have.property('id');
    expect(response.body.data.title).to.eq('Test Note');
  });
});

}
)