describe('User Login via API and Create Note', () => {
   it('Logs in and creates a note', () => {
    const loginData = {
      email: 'Rob2@gmail.com',
      password: 'Tobia2123!'
    };

    cy.request({
      method: 'POST',
      url: 'https://practice.expandtesting.com/notes/api/users/login',
      body:loginData
     }).then((response) => {
      expect(response.status).to.eq(200);
      let accessToken=response.body.data.token;
                  cy.request({
        method: 'POST',

                url: 'https://practice.expandtesting.com/notes/api/notes',
              body: {
          title: 'Test Note',
          description: 'content of the test note.',
          category :'Home'
        },
        headers:{
            'x-auth-token':accessToken
        }
      }).then((noteRes) => {
        expect(noteRes.status).to.eq(200);
             expect(noteRes.body.message).to.eq('Note successfully created');
        cy.log(response.body.data.id)
      });
    });
  });
});
