describe('User Login via API', () => {
    let accessToken;
  it('should login and extract token', () => {
    const loginData = {
      email: `Rob2@gmail.com`, 
      password: 'Tobia2123!',
        }
    cy.request({
      method: 'POST',
      url: 'https://practice.expandtesting.com/notes/api/users/login', 
      body: loginData,
         }).then((response) => {
      // Assert the status code
      expect(response.status).to.eq(200)
      expect(response.body.data).to.have.property('token');
         accessToken=response.body.data.token;
        cy.log(accessToken);

        
             })
  })
})
