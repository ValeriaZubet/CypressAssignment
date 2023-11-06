import { houseDescriptionPage } from "../support/PageObjects/HouseDescriptionPage.js";
import { housePicturesPage } from "../support/PageObjects/HousePicturesPage.js";
import house_url from "../fixtures/url.json";
const url = house_url.house_url;

describe("Model Photos", () => {
  before(() => {
    cy.visit(url);
    cy.url().should("eq", url);
    cy.acceptCookies();
    cy.closePromotionPanel();
  });

  it("Verify that images are present on the page for the Owners Suite using the interactive floor plan", () => {
    houseDescriptionPage.openViewModelPhotos();
    housePicturesPage.selectOwnersSuitePhotos();
    housePicturesPage.verifyOwnersSuitePhotosAreVisible();
  });
});
