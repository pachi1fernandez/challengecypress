describe('API Testing with Cypress', () => {
    const apiUrl = 'https://echo-serv.tbxnet.com'; // Example API endpoint
  
    it('should fetch a list of posts successfully', () => {
      cy.request('GET', `${apiUrl}/v1/qa/test1`).then((response) => {
        // Assertions
        expect(response.status).to.eq(200); // Check status code
        expect(response.duration).to.be.lessThan(3000); 

        const currentDate = new Date();
        const expectedDate = currentDate.toISOString().slice(0, 16); // "YYYY-MM-DDTHH:mm"
  const responseDate = response.body.date.slice(0, 16); // "YYYY-MM-DDTHH:mm"

  // Comparar solo hasta segundos
  expect(responseDate).to.equal(expectedDate);
        // expect(response.body).to.deep.equal({"ok": true,"date": new Date().toISOString()})
        // expect(response.body.length).to.be.greaterThan(0); // Ensure the array is not empt

        expect(response.headers).to.have.property('content-type').and.include('application/json'); // Verifica que el header 'content-type' sea JSON
        expect(response.headers).to.have.property('date'); // Asegura que la respuesta incluye un header 'date'
        expect(response.body.ok).to.be.true; 
    });
});
});
  