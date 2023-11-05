class SearchResultsPage {
  /**
   * This function is to  apply Move In Ready Filter
   */
  applyMoveInReadyFilter() {
    // Click on the availability filter
    cy.getElementByTestId("search-results-filter-availability")
      .should("be.visible")
      .click();

    // Check the Move-In Homes
    cy.get('[type="checkbox"]')
      .first()
      .check({ force: true })
      .should("be.checked")
      .and("have.value", "QuickMoveInHomes")
      .realPress("{enter}");

    // Click on the website body to close dropdown box
    cy.get(".SearchResultsHeaderV2_root__AcGbr > .GridRow_container__cY5_x")
      .should("be.visible")
      .click();
  }

  /**
   * This function is to Verify Move In Ready Filter Results
   */
  verifyMoveInReadyFilterResults() {
    // Locate and assert the visibility of the element
    cy.getElementByTestId("search-results-tab-count-index-available")
      .should("be.visible")
      .invoke("text")
      .then((resultCount) => {
        // Parse the resultCount as an integer and store the result in displayedCount
        const displayedCount = parseInt(resultCount, 10);

        // Select the elements representing the search results and assert that it should have the correct length
        cy.getElementByTestId(
          "search-results-item-status-move-in-ready"
        ).should("have.length", displayedCount);
      });
  }
}

export const searchResultsPage = new SearchResultsPage();
