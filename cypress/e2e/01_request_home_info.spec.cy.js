import { houseDescriptionPage } from "../support/PageObjects/HouseDescriptionPage.js";
import { modelRequestInfoFrom } from "../support/PageObjects/ModelRequestInfoForm.js"
import house_url from '../fixtures/url.json'
const url = house_url.house_url

describe("Request information about a home", () => {
  before(() => {
    cy.visit(url);
    cy.url().should("eq", url);
    cy.acceptCookies();
    cy.closePromotionPanel();
  });

  it("Verify that you are able to open and submit Request Info Form", () => {
    houseDescriptionPage.openRequestInfoForm();
    cy.getElementByTestId("message-us").contains('Message us').should('be.visible')
    cy.getElementByTestId("form-submit-button").should('be.disabled')
    modelRequestInfoFrom.fillInRequestInfoForm("Test User", "test@test.test", "4156127763", "Test Request Info");
    modelRequestInfoFrom.clickOnSubmitForm()
    modelRequestInfoFrom.verifySubmittedForm()
  });
});