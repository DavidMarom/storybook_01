# storybook_01

🚀 [Live Storybook](https://6346c29f12cb3212588eb719-kysdmcdpcq.chromatic.com/?path=/story/card01--regular)

```


import * as React from "react";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { filterBy } from "@progress/kendo-data-query";
import { sampleProducts } from "./sample-products.js";
const initialFilter = {
  logic: "and",
  filters: [
    {
      field: "ProductName",
      operator: "contains",
      value: "Chef",
    },
  ],
};
const App = () => {
  const [filter, setFilter] = React.useState(initialFilter);

  // return <p>saddsas</p>

  return (
    <Grid
      style={{ height: "420px" }}
      data={filterBy(sampleProducts, filter)}
      filterable={true}
      filter={filter}
      onFilterChange={(e) => setFilter(e.filter)}
    >
      <Column field="ProductID" title="ID" filterable={false} width="60px" />
      <Column field="ProductName" title="Product Name" width="240px" />
      <Column
        field="FirstOrderedOn"
        width="240px"
        filter="date"
        format="{0:d}"
      />
      <Column field="UnitPrice" width="180px" filter="numeric" format="{0:c}" />
      <Column field="Discontinued" width="190px" filter="boolean" />
    </Grid>
  );
};

export default App;



```
