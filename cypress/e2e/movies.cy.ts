describe('Movies Bar module', () => {
  it('should be visible', () => {
    cy.visit('http://localhost:5000');

    cy.get('[data-testid=movies-bar]').should('be.visible');
    cy.get('[data-testid=movie-card').should('be.visible').should('have.length', 20);
    cy.get('[data-testid=show-more-button').should('be.visible');
  });

  it('should display the movie data in movie cards', () => {
    cy.get('[data-testid=movie-poster').should('be.visible').should('have.length', 20);
    cy.get('[data-testid=movie-avatar').should('be.visible').should('have.length', 20);
    cy.get('[data-testid=movie-title').should('be.visible').should('have.length', 20);
    cy.get('[data-testid=movie-text').should('be.visible').should('have.length', 20);
  });

  it('should open modal with trailer after clicking on any movie card', () => {
    cy.get('[data-testid=movie-card').first().click();
    cy.get('[data-testid=modal]').should('be.visible');
    cy.get('[data-testid=modal-trailer]').should('be.visible');
    cy.get('[data-testid=modal-button').click();
  });

  it('should display more movies after clicking on the button', () => {
    cy.get('[data-testid=show-more-button').click();
    cy.wait(1000);
    cy.get('[data-testid=movie-card').should('be.visible').should('have.length', 40);
    cy.get('[data-testid=show-more-button').click();
    cy.wait(1000);
    cy.get('[data-testid=movie-card').should('be.visible').should('have.length', 60);
  });
});
