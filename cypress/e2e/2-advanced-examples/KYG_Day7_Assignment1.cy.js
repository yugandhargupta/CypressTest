describe('Register New User using API', () => {
  it('create a new user', () => {
    
    const apidata = {
      name: "Rob2",
      email: "Rob2@gmail.com",
      password: "Tobia2123!"
    }

    cy.request({
      method: 'POST',
      url: 'https://practice.expandtesting.com/notes/api/Users/register',
      body: apidata,
      
    }).then((res) => {
      
      expect(res.status).to.eq(201);

      
      expect(res.body.message).to.eq('User account created successfully');
    });
  });
});
