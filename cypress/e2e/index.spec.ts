describe('Basic flow', () => {
	beforeEach(() => {
		cy.viewport('macbook-13')
	})

	it('Should render correctly', () => {
		cy.visit('/')
	})
})
