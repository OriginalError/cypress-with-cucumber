function getElementByTagAndId(tag, id) {
    return cy.get(`[${tag}="${id}"]`)
}

module.exports = { getElementByTagAndId }