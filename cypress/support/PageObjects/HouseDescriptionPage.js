class HouseDescriptionPage {
  /**
   * This function is to Open the View Model Photos
   */
  openViewModelPhotos() {
    cy.getElementByTestId("homesite-details-hero-image-button")
      .contains("View model photos")
      .should("be.visible")
      .realClick();
  }

  /**
   * This function is to Open Request Info Form on the house description page
   */
  openRequestInfoForm() {
    cy.getElementByTestId("walkthrough-contact")
      .contains("Request info")
      .should("be.visible")
      .click();
  }
}

export const houseDescriptionPage = new HouseDescriptionPage();
