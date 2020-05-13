export const textIsPresent = (selector, message) => {
    cy.xpath(selector)
        .should("contain", message);
}