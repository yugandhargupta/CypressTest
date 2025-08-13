describe('Create and Delete a Note', () => {
  let token;
  let createdNoteId;

  
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
      expect(response.status).to.eq(200);
      token = response.body.data.token;
      expect(token).to.exist;
    });
  });

  
  it('should create a new note and store the ID', () => {
    cy.request({
      method: 'POST',
      url: 'https://practice.expandtesting.com/notes/api/notes',
      headers: {
        'x-auth-token': token,
        'Content-Type': 'application/json'
      },
      body: {
        title: 'Note to Delete',
        description: 'This note will be deleted as part of the test.',
        category: 'Test'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data).to.have.property('id');
      createdNoteId = response.body.data.id;
      expect(createdNoteId).to.exist;
    });
  });

  // Step 3: Delete the created note
  it('should delete the created note', () => {
    cy.request({
      method: 'DELETE',
      url: `https://practice.expandtesting.com/notes/api/notes/${createdNoteId}`,
      headers: {
        'x-auth-token': token
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq('Note successfully deleted');
    });
  });

});
