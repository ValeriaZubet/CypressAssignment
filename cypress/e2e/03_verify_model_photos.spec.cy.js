import { homePage } from "../support/PageObjects/HomePage.js";
import { searchResultsPage } from "../support/PageObjects/SearchResultsPage.js";

describe("Search for homes", () => {
  before(() => {
    cy.visit("/");
    cy.url().should("eq", Cypress.config("baseUrl"));
    cy.acceptCookies();
  });

  it("Search for Move in Ready homes in Dallas, TX and verify that availability filter used matches the results", () => {
    cy.getElementByTestId("market-selector-title")
      .contains("Find a home you’ll love")
      .should("be.visible");
    homePage.searchHomeByCity("Dallas", "TX");
    searchResultsPage.applyMoveInReadyFilter();
    searchResultsPage.verifyMoveInReadyFilterResults();
  });
});
