// Requisitos
// Pruebas de Endpoints Seleccionados:
// Escoge dos endpoints de la API de Echo Server.
// Implementa pruebas para validar los siguientes aspectos en cada endpoint:
// Status Code: Verifica que el status code sea el esperado.
// Response Time: Asegúrate de que el tiempo de respuesta sea razonable (menor a 3 segundos).
// Response Body: Si el endpoint devuelve datos, valida la estructura y el contenido del response body, asegurándote de que contiene los datos esperados.
// Headers: Verifica los headers de la respuesta. Puedes validar la presencia de alguno de ellos. Realiza las validaciones que consideres que aportan valor desde la perspectiva de un QA.
// Consideraciones para los tests de API
// Asegúrate de manejar los errores de forma adecuada (por ejemplo, casos en los que la respuesta no sea la esperada).
// Puedes realizar aserciones adicionales si encuentras comportamientos que consideras relevantes para probar.
// Documenta cualquier error detectado o mejora posible en la API en una carpeta llamada results (opcional).


describe("API Testing with Cypress", () => {
  const apiUrl = "https://echo-serv.tbxnet.com"; // API endpoint

  it("Simple QA test path 1", () => {
    cy.request("GET", `${apiUrl}/v1/qa/test1`).then((response) => {
      
      // Check status code
      expect(response.status).to.eq(200); 

      // Response Time
      expect(response.duration).to.be.lessThan(3000); 

      // Response Body
      const currentDate = new Date();
      const expectedDate = currentDate.toISOString().slice(0, 16); // "YYYY-MM-DDTHH:mm"
      const responseDate = response.body.date.slice(0, 16); // "YYYY-MM-DDTHH:mm"

      // Headers
      expect(responseDate).to.equal(expectedDate);
      expect(response.headers).to.have.property("content-type").and.include("application/json"); 
      expect(response.headers).to.have.property("date"); 
      expect(response.body.ok).to.be.true;
    });
  });

  it("Simple QA test path 3", () => {
    cy.request({
      method: "GET",
      url: `${apiUrl}/v1/qa/test3`,
      headers: { accept: "application/json" },
      failOnStatusCode: false,
    }).then((response) => {
      // Check status code
      expect(response.status).to.eq(401); 

      // Response Time
      expect(response.duration).to.be.lessThan(3000);

      // Response Body
      expect(response.body).to.have.property("code", "BASE-401");
      expect(response.body).to.have.property("message", "API KEY is required");

      // Headers
      expect(response.headers).to.have.property('content-type').and.include('application/json');
      expect(response.headers).to.have.property('date');
    
    });
  });
});
  