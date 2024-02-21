describe("resume-index", () => {
    beforeEach(() => {
        cy.visit("./index.html");
    });

    it("attached link is correct", () => {
        if (cy.getByHref('"https://github.com/kamvitae"'))
            cy.visit("https://github.com/kamvitae");
    });
});
