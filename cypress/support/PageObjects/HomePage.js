class HomePage {
  /**
   * This function is to Search for a home by typing the city
   */
  searchHomeByCity(city, state) {
    cy.getElementByTestId("search-bar-homepage")
      .should("be.visible")
      .type(city)
      .type("{enter}");
    // Select the location based on City and State
    cy.contains("span", `${city}, ${state}`).should("be.visible").click();
  }
}

export const homePage = new HomePage();
