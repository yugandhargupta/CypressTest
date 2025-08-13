describe('. Looping through rows with .each()', () => {

  beforeEach(() => {
    cy.visit("https://practice.expandtesting.com/dynamic-table");
  });

  it('logs each browser name and its CPU usage', () => {
    cy.get('table.table-striped tbody tr').each(($tr) => {
      const $td = $tr.find('td');
      const browserName = $td.eq(0).text();
      const cpuUsage = [...$td].find(td => td.innerText.includes('%'))?.innerText;

      cy.log(`Browser Name: ${browserName}, CPU Usage: ${cpuUsage}`);
    });
  });

  it('counts browsers with CPU usage over 20%', () => {
    let count = 0;

    cy.get('table.table-striped tbody tr').each(($tr) => {
      const $td = $tr.find('td');
      const cpuUsageText = [...$td].find(td => td.innerText.includes('%'))?.innerText;

      if (cpuUsageText) {
        const cpuValue = parseFloat(cpuUsageText.replace('%', ''));
        if (cpuValue > 20) {
          count++;
        }
      }
    }).then(() => {
      cy.log(`Total browsers with CPU usage over 20%: ${count}`);
    });
  });

})