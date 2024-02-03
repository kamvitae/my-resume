describe("resume-index", () => {
    beforeEach(() => {
        cy.visit("./index.html");
    });

    it("attached link is correct", () => {
        if (cy.get('[href="https://github.com/kamvitae"]'))
            cy.visit("https://github.com/kamvitae");
    });
});
