import chaiColors from 'chai-colors';
chai.use(chaiColors);

describe('Search module', () => {
  const colors = {
    orange: '#ff8a00',
  };

  it('should be visible', () => {
    cy.visit('http://localhost:5000');

    cy.get('[data-testid=search-component]').should('be.visible');
  });

  it('should change the border color when it was activated', () => {
    cy.get('[data-testid=search-input]').as('input');
    cy.get('[data-testid=theme-switcher]').first().as('switcher');

    cy.get('@input').click().should('have.css', 'border-color').and('be.colored', `${colors.orange}`);
    cy.get('@switcher').click();
    cy.get('@input').click().should('have.css', 'border-color').and('be.colored', `${colors.orange}`);
    cy.get('@switcher').click();
  });

  it('should change the input value after typing', () => {
    cy.get('[data-testid=search-input]').click().type('Interstellar').should('have.value', 'Interstellar');
  });

  it('should show search menu when input value is valid', () => {
    cy.get('[data-testid=search-menu]').as('search-menu');

    cy.get('@search-menu').should('not.be.visible');
    cy.wait(1000);
    cy.get('@search-menu').should('be.visible');
  });

  it('should hide search menu when input is blured', () => {
    cy.get('[data-testid=search-menu]').as('search-menu');

    cy.get('[data-testid=navbar-element]').click({ force: true });
    cy.get('@search-menu').should('not.be.visible');
    cy.get('[data-testid=search-input]').click();
    cy.get('@search-menu').should('be.visible');
  });

  it('search menu should have results', () => {
    // checking of first 3 results only
    cy.get('[data-testid=search-movie-title]')
      .its('length')
      .then((length) => {
        const elementsToCheck = Math.min(length, 3);
        for (let resultID = 0; resultID < elementsToCheck; resultID++) {
          cy.get('[data-testid=search-movie-title]').eq(resultID).should('contain', 'Interstellar');
        }
      });
  });

  it('should open the modal with movie trailer after clicking on movie search result', () => {
    cy.get('[data-testid=search-movie-title]').first().click();
    cy.get('[data-testid=search-menu]').should('not.be.visible');
    cy.get('[data-testid=modal]').should('be.visible');
    cy.get('[data-testid=modal-button]').click();
  });

  it('should search movie by title', () => {
    cy.get('[data-testid=search-button]').click();
    cy.wait(500);
    cy.get('[data-testid=movie-card]').should('be.visible');
    cy.get('[data-testid=movie-title]').first().should('have.text', 'Interstellar');
  });
});
