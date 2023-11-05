Cypress.Commands.add("getElementByTestId", (testId) => {
  return cy.get(`[data-testid="${testId}"]`);
});

Cypress.Commands.add("acceptCookies", () => {
  cy.contains("h2", "This website uses cookies").should("be.visible");
  cy.get("#onetrust-accept-btn-handler").should("be.visible").click();
});

Cypress.Commands.add("closePromotionPanel", () => {
  cy.get('[aria-label="Close promotion panel"]').should("be.visible").click();
});
