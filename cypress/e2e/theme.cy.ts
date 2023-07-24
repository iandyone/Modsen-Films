import chaiColors from 'chai-colors';
chai.use(chaiColors);

describe('Theme switcher module', () => {
  const colors = {
    dark: '#141414',
    dark3: '#272727',
    dark4: '#383838',
    black: '#000000',
    white: '#fff',
    gray: '#c4c4c4',
    gray5: '#ededed',
    gray6: '#7d7d7d',
    orange: '#ff8a00',
    'gray-svg': '#6d6e76',
  };

  it('should be visible', () => {
    cy.visit('http://localhost:5000');

    cy.get('[data-testid=navbar-element]').should('be.visible');
  });

  it('should switch element colors across app theme', () => {
    cy.get('[data-testid=genre-button]').as('genre-button');
    cy.get('[data-testid=theme-switcher]').as('switcher');
    cy.get('[data-testid=logo-text]').as('logo-text');
    cy.get('[data-testid=search-input]').as('input');
    cy.get('[data-testid=search-button]').as('search-button');
    cy.get('[data-testid=movie-title]').as('movie-title');
    cy.get('[data-testid=movie-text]').as('movie-text');
    cy.get('[data-testid=footer-link]').as('footer-link');
    cy.get('[data-testid=footer-media]').as('footer-media');
    cy.get('[data-testid=footer-about]').as('footer-about');

    // switch to the dark theme
    cy.get('@switcher').first().should('be.visible').click();

    // check the switcher colors
    cy.get('@switcher').first().should('have.css', 'background-color').and('be.colored', `${colors.dark}`);
    cy.get('@switcher').first().should('have.css', 'border-color').and('be.colored', `${colors.white}`);

    // check app bg color
    cy.get('.app').should('have.css', 'background-color').and('be.colored', `${colors.dark}`);
    cy.get('@logo-text').should('have.css', 'color').and('be.colored', `${colors.white}`);

    // search-input
    cy.get('@input').should('have.css', 'background-color').and('be.colored', `${colors.dark}`);
    cy.get('@input').should('have.css', 'border-color').and('be.colored', `${colors.dark4}`);

    // search button
    cy.get('@search-button').should('have.css', 'background-color').and('be.colored', `${colors.dark}`);

    // genre buttons
    cy.get('@genre-button').first().should('have.css', 'background-color').and('be.colored', `${colors.white}`);
    cy.get('[data-testid=genre-button]:nth-child(2)').should('have.css', 'background-color').and('be.colored', `${colors.dark3}`);
    cy.get('@genre-button').should('have.css', 'color').and('be.colored', `${colors.black}`);

    //movie card
    cy.get('@movie-title').should('have.css', 'color').and('be.colored', `${colors.white}`);
    cy.get('@movie-text').should('have.css', 'color').and('be.colored', `${colors.white}`);

    // footer links
    cy.get('@footer-link').should('have.css', 'color').and('be.colored', `${colors.gray5}`);
    cy.get('@footer-media').should('have.css', 'fill').and('be.colored', `${colors['gray-svg']}`);
    cy.get('[data-testid=footer-about]').should('have.css', 'color').and('be.colored', `${colors.gray6}`);

    // switch to the light theme
    cy.get('@switcher').first().click();

    // check the switcher colors
    cy.get('@switcher').first().should('have.css', 'background-color').and('be.colored', `${colors.white}`);
    cy.get('@switcher').first().should('have.css', 'border-color').and('be.colored', `${colors.orange}`);

    // check app bg color
    cy.get('.app').should('have.css', 'background-color').and('be.colored', `${colors.white}`);
    cy.get('@logo-text').should('have.css', 'color').and('be.colored', `${colors.black}`);

    // search-input
    cy.get('@input').should('have.css', 'background-color').and('be.colored', `${colors.white}`);
    cy.get('@input').should('have.css', 'border-color').and('be.colored', `${colors.gray}`);

    // search button
    cy.get('@search-button').should('have.css', 'background-color').and('be.colored', `${colors.white}`);

    // genre buttons
    cy.get('@genre-button').first().should('have.css', 'background-color').and('be.colored', `${colors.black}`);
    cy.get('@genre-button').should('have.css', 'color').and('be.colored', `${colors.white}`);

    //movie card
    cy.get('@movie-title').should('have.css', 'color').and('be.colored', `${colors.black}`);
    cy.get('@movie-text').should('have.css', 'color').and('be.colored', `${colors.black}`);

    // footer links
    cy.get('@footer-media').should('have.css', 'fill').and('be.colored', `${colors['gray-svg']}`);
    cy.get('@footer-about').should('have.css', 'color').and('be.colored', `${colors.gray}`);
  });
});
