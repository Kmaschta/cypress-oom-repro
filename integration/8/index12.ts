describe('Common test', () => {
    Array.from({ length: 100 }).forEach((_, i) => {
        it(`test ${i}`, () => {
            cy.visit('https://marmelab.com/react-admin-demo/');
            cy.get('input[name="username"]').type('demo');
            cy.get('input[name="password"]').type('demo');
            cy.contains('Sign in').click();

            cy.contains('Catalog').should('be.visible');
            cy.contains('Catalog').click();
            cy.contains('Posters').click();

            cy.contains('Create').should('be.visible');
            cy.contains('Create').click();

            cy.getByLabelText('Image *').type('https://images.unsplash.com/photo-1575279355017-5afe464a4fa1');
            cy.getByLabelText('Thumbnail *').type('https://images.unsplash.com/photo-1575279355017-5afe464a4fa1');

            cy.contains('Details').click();
            cy.getByLabelText('Reference *').type('Reference');
            cy.getByLabelText('Price *').type('10');
            cy.getByLabelText('Width *').type('1920');
            cy.getByLabelText('Height *').type('720');
            cy.getByLabelText('Stock *').type('100');

            cy.contains('Save').click();
        });
    });
});
