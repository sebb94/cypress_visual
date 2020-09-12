describe('Visual Regression test', () => {
    it('First visual regression test', () => {
        cy.visit('http://example.com')
        cy.matchImageSnapshot()
    });

});