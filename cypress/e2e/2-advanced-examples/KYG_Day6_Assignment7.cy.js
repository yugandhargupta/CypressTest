describe('Extracting and Asserting Table Data', () => { 

it('column index for "Memory" and browser and corresponding memory usage', () => {
       cy.visit("https://practice.expandtesting.com/dynamic-table") 

  let cpuAbove15Found = false;

  cy.get("table.table-striped tbody tr").each(($row, rowIndex, $rows) => {
    const $cells = $row.find('td');
   
    const browserName = $cells.eq(0).text().trim();
    expect(browserName).to.not.be.empty;

  
    $cells.each((i, td) => {
      const cellText = td.innerText;
      expect(cellText).to.not.be.empty; 
    });

   
    const cpuCell = [...$cells].find(td => td.innerText.includes('%'));
    if (cpuCell) {
      const cpuValue = parseFloat(cpuCell.innerText.replace('%', ''));
      if (cpuValue > 15) {
        cpuAbove15Found = true;
      }
    }
  }).then(() => {
    
    expect(cpuAbove15Found,"CPU Usage above 15 not found").to.be.true;
  });
})

})