// <reference types="Cypress"/> 
beforeEach (()=>{
    cy.visit ("https://desafio-ensinio.vercel.app/")
    cy.viewport(1920, 1080)
})
describe ("Ensinio Aplicação",function (){
    it("Qual o titulo da aplicação", function(){
        cy.title().should("eq", "Desafio Ensinio")
    })
    it("Testando a linguagem da aplicação", function(){
        cy.get('[data-testid="languageselect-label"]').click() // Click on button
        cy.get('[data-testid="languageselect-item"]').contains('EN').click()
        cy.get('.sc-5a9122b2-0').contains("Start now").should("be.visible")
    })
    it("Testando a usabilidade da aplicação", function(){
        cy.get(':nth-child(1) > [data-testid="hovermenu-wrapper"] > [data-testid="hovermenu-toggle"]').trigger('mouseover')
        cy.get('.sc-4b365575-0').should("be.visible")
        cy.get('[data-testid="languageselect-label"]').trigger('mouseover')
    })
})