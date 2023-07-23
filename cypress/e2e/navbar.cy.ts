import chaiColors from 'chai-colors';
chai.use(chaiColors);

describe('Navbar module', () => {
  const colors = {
    black: '#000000',
    white: '#fff',
  };

  it('should be visible', () => {
    cy.visit('http://localhost:5000');

    cy.get('[data-testid=navbar-element]').should('be.visible');
  });

  it('default tag should be activated', () => {
    cy.get('[data-testid=genre-button]').first().as('active-tag');
    cy.get('[data-testid=theme-switcher]').as('switcher');

    cy.get('[data-testid=genre-button]').should('be.visible');
    cy.get('@active-tag').should('have.text', 'all').should('have.css', 'background-color').and('be.colored', `${colors.black}`);
    cy.get('@active-tag').should('have.css', 'color').and('be.colored', `${colors.white}`);
  });

  it('should find movies by genre', () => {
    cy.get('[data-testid=movie-text]').as('movie-genres');

    cy.contains('[data-testid=genre-button]', 'crime').click();
    cy.wait(1000);
    cy.get('@movie-genres').each(($genreList) => {
      cy.wrap($genreList).contains('crime');
    });

    cy.contains('[data-testid=genre-button]', 'romance').click();
    cy.wait(1000);
    cy.get('@movie-genres').each(($genreList) => {
      cy.wrap($genreList).contains('romance');
    });
  });
});
