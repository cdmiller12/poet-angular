import {HomeComponent} from "./home.component";

describe('HomeComponent', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('should render', () => {
        cy.get('app-home').should('exist');
    })
})
