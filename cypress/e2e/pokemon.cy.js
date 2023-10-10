describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:4000')
    cy.contains('ivysaur')
  })
})
describe('Individual pokemon test', function() {
  it('Navigates to the Charizard page', function() {
    cy.visit('http://localhost:4000/')
    cy.contains('charizard').click()
    cy.contains('solar power')
  })
})