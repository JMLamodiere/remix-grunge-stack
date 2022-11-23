describe("HTTP API", () => {
  it("should return a 401 in case authent has failed", () => {
    cy.request({ url: "/api/notes", failOnStatusCode: false }).should(
      (response) => expect(response.status).to.eq(401)
    );
  });

  it("should return your notes when authenticated", () => {
    cy.login();

    cy.request("/api/notes").should(
      (response) => expect(response.status).to.eq(200)

      //Todo: check json content
    );
  });
});
