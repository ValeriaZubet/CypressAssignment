class HousePicturesPage {
  /**
   * This function is to Select Owners Suite Photos
   */
  selectOwnersSuitePhotos() {
    cy.get("#walkthrough-room-selector").should("be.visible").click();
    cy.get('[id="react-select-walkthrough-room-selector-option-3"]')
      .should("be.visible")
      .realClick();
    cy.contains("div", "Owner's Suite").should("have.text", "Owner's Suite");
    cy.getElementByTestId("room-heading-owner's-suite")
      .contains("Owner's Suite")
      .should("be.visible");
  }

  /**
   * This function is to Verify that Owner's suite picture is visible
   */
  verifyOwnersSuitePhotosAreVisible() {
    cy.get('[alt="Owners Suite"]')
      .scrollIntoView()
      .should("be.visible")
      .and(
        "has.attr",
        "src",
        "/api/images/-/media/Com/Images/New-Homes/18/64/5751/43250/room/SAN_Cottage_CardinalRidge_Pic_OwnersBed.ashx?w=2100"
      );
  }
}

export const housePicturesPage = new HousePicturesPage();
