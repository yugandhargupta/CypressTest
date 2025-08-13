describe('Extracting and Asserting Table Data', () => { 

it('column index for "Memory" and browser and corresponding memory usage', () => {
       cy.visit("https://practice.expandtesting.com/dynamic-table") 
       cy.get("table.table-striped thead tr th").then(($tr) => {
    let memoryColumnIndex = -1;

    $tr.each((index, th) => {
      const tr = th.innerText;
      if (tr == 'Memory') {
        memoryColumnIndex = index;
      }
    });

    cy.log('Memory column : ',memoryColumnIndex);
   
    cy.get("table.table-striped tbody tr").each(($trow) => {
      const $cells = $trow.find('td');
      const browserName = $cells.eq(0).text().trim();
      const memory = $cells.eq(memoryColumnIndex).text();

      cy.log(browserName ,' Memory:',memory);
    });
  });
})
})