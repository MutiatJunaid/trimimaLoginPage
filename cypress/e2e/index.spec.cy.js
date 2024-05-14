let data
describe('login page', () => {
  before(function(){
    cy.fixture('identifiers').then (function(sel){
      data=sel
  })
 
  })
  it('Users should be able to log in successfully', () => {
  
    cy.get(data.emailField).should('be.visible').and('exist').type('muti88@yopmail.com')
    cy.get(data.passwordField).should('be.visible').and('exist').type('Muti9999')
    cy.get(data.loginBtn).click()
    cy.get(data.welcomNote).should('contain', 'yinde')
   
   
  })

  it('Users should use invalid email', () => {
    
    cy.get(data.emailField).should('be.visible').and('exist').type('muti88@yopmail')
    cy.get(data.passwordField).should('be.visible').and('exist').type('Muti9999')
    cy.get(data.loginBtn).click()
    cy.get(data.invalidDetailsErrormsge).should('contain.text', 'Enter a valid Email')
  
})
  it('Users enter an empty mail', () => {
   
    cy.get(data.passwordField).should('be.visible').and('exist').type('Muti9999')
    cy.get(data.loginBtn).click()
    
    cy.get(data.emptyDetailError).should('have.text', 'Email Address is required')
  
  })
 
})
