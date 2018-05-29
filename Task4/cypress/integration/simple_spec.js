describe('e2e Test of Movie DB', function() {
    it('Test No films found', () => {
        cy.visit('/');

        cy.wait(3000);

        cy.get('.header-search-control_input-search').type('not such film');

        cy.get('.search-button').click();

        cy.get('.no-films-found').contains('No films found');
    });
});