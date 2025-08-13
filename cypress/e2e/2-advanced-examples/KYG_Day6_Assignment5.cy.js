describe('Validating Dynamic Content in Tables', () => {

  it('CPU value in the table with the yellow label', () => {

    cy.visit("https://practice.expandtesting.com/dynamic-table") 

    cy.get("table.table-striped tbody tr").each(($tr) => {
    const $td = $tr.find('td');
    const browserName = $td.eq(0).text().trim();

    if (browserName == 'Chrome') {
      
      const cpuUsageFromTable = [...$td].find(td => td.innerText.includes('%'))?.innerText.trim();    
      cy.get('#chrome-cpu').invoke('text').then((fullText) => {
        // Example fullText: "Chrome CPU: 4.4%"
        const match = fullText.match(/(\d+(\.\d+)?%)/); // Matches a number like 4.4%
        const cpuUsageFromCard = match ? match[0] : null;      
        
        expect(cpuUsageFromCard).to.eq(cpuUsageFromTable);
      });
    }
  });

})

})