const indexData = [
    { index: 'A1', value: 41 },
    { index: 'A2', value: 18 },
    { index: 'A3', value: 21 },
    { index: 'A4', value: 63 },
    { index: 'A5', value: 2 },
    { index: 'A6', value: 53 },
    { index: 'A7', value: 5 },
    { index: 'A8', value: 57 },
    { index: 'A9', value: 60 },
    { index: 'A10', value: 93 },
    { index: 'A11', value: 28 },
    { index: 'A12', value: 3 },
    { index: 'A13', value: 90 },
    { index: 'A14', value: 39 },
    { index: 'A15', value: 80 },
    { index: 'A16', value: 88 },
    { index: 'A17', value: 49 },
    { index: 'A18', value: 60 },
    { index: 'A19', value: 26 },
    { index: 'A20', value: 28 }
  ];
  
  const categoryData = [
    { category: 'Alpha', formula: 'A5 + A20' },
    { category: 'Beta', formula: 'A15 / A7' },
    { category: 'Charlie', formula: 'A13 * A12' }
  ];
  
  const indexTableBody = document.querySelector('#indexTable tbody');
  const categoryTableBody = document.querySelector('#categoryTable tbody');
  
  // Populate index table
  indexData.forEach(item => {
    const row = document.createElement('tr');
    const indexCell = document.createElement('td');
    const valueCell = document.createElement('td');
    indexCell.textContent = item.index;
    valueCell.textContent = item.value;
    row.appendChild(indexCell);
    row.appendChild(valueCell);
    indexTableBody.appendChild(row);
  });
  
  // Populate category table and calculate values
  categoryData.forEach(item => {
    const row = document.createElement('tr');
    const categoryCell = document.createElement('td');
    const valueCell = document.createElement('td');
    categoryCell.textContent = item.category;
    const formula = item.formula.replace(/A(\d+)/g, (_, index) => indexData[parseInt(index) - 1].value);
    try {
      const result = eval(formula);
      valueCell.textContent = result;
    } catch (error) {
      valueCell.textContent = 'Error';
      console.error(`Error evaluating formula '${formula}': ${error}`);
    }
    row.appendChild(categoryCell);
    row.appendChild(valueCell);
    categoryTableBody.appendChild(row);
  });
  