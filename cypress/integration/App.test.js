describe('Pad Bank:', function() {
  before(()=>{
    cy.server()
    cy.route('GET', '/samples', "fixture:samples")
  })
  it('successfully loads', function() {
    cy.visit('/')
  })


  it('pad config green thread', ()=>{

    cy.get('.pad')
      .first()
      .click()
      .should('have.class','pad--active')

    cy.get('.pad-config').within(()=>{
      cy.contains('Submit')
      .should('be.disabled')

      cy.contains('Loop').click()

      cy.contains('Submit')
      .should('not.be.disabled')

      cy.get('.pad-config--directory-selector-enabled').within(()=>{
        cy.get('select').select('synth')
      })

      cy.get('.pad-config--file-selector-enabled').within(()=>{
        cy.get('select').select('square.wav')
      })

      cy.contains('Submit')
      .should('not.be.disabled')
      .click()

      cy.contains('Submit')
      .should('be.disabled')

    })

  })
})
