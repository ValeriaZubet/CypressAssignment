class ModelRequestInfoFrom {
  /**
   * This function is fill In Request Info Form
   */
  fillInRequestInfoForm(name, email, phone, message) {
    cy.wait(500);
    cy.getElementByTestId("text").should("be.visible").click().realType(name);
    cy.getElementByTestId("email").should("be.visible").click().realType(email);
    cy.get('[aria-label="Phone Number"]')
      .should("be.visible")
      .click()
      .realType(phone);
    cy.get("#location").should("be.visible").click();
    cy.contains("div", "Colorado").should("be.visible").click();
    cy.get('[name="message"]').should("be.visible").click().realType(message);
  }

  /**
   * This function is to click On Submit Form Button
   */
  clickOnSubmitForm(isEnabled) {
    cy.getElementByTestId("form-submit-button").should("be.enabled").click();
  }

  /**
   * This function is to Verify Submitted Form
   */
  verifySubmittedForm() {
    cy.getElementByTestId("contact-form-success-title")
      .contains("Thank you!")
      .should("be.visible");
    cy.contains(
      "p",
      "A Lennar consultant will be in touch with you shortly. In the meantime, you can checkout the brochure for Cottage Collection to view highlights of the community or continue browsing."
    ).should("be.visible");
    cy.getElementByTestId("contact-continue-browsing-button").should(
      "be.visible"
    );
  }
}

export const modelRequestInfoFrom = new ModelRequestInfoFrom();
