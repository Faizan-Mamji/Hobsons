export const config = require('../../fixtures/staticData.json');

export const visitHobsons = () => {
    cy.fixture('staticData').as('myFixtureFile');
    cy.get('@myFixtureFile').then($data => {
        cy.visit($data.webUrl);
    })
}

export const click = (selector) => {
    cy.xpath(selector).click({ force: true })
}