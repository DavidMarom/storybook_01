# storybook_01

🚀 [Live Storybook](https://6346c29f12cb3212588eb719-kysdmcdpcq.chromatic.com/?path=/story/card01--regular)

import React, { useState } from 'react';
import { Grid, GridColumn, GridFilterCell } from '@progress/kendo-react-grid';
import { process } from '@progress/kendo-data-query';

// Sample data for the grid
const data = [
  { ProductName: 'Product A', Category: 'Category 1' },
  { ProductName: 'Product B', Category: 'Category 2' },
  { ProductName: 'Product C', Category: 'Category 1' },
  { ProductName: 'Product D', Category: 'Category 3' },
];

const GridWithFilter: React.FC = () => {
  const [filter, setFilter] = useState({
    logic: 'and',
    filters: [],
  });

  const handleFilterChange = (event: any) => {
    setFilter({
      ...filter,
      filters: {
        ...filter.filters,
        [event.filter.field]: event.filter,
      },
    });
  };

  const filteredData = process(data, filter);

  return (
    <Grid
      data={filteredData}
      filterable
      filter={filter}
      onFilterChange={handleFilterChange}
    >
      <GridColumn field="ProductName" title="Product Name" filterCell={GridFilterCell} />
      <GridColumn field="Category" title="Category" filterCell={GridFilterCell} />
    </Grid>
  );
};

export default GridWithFilter;
