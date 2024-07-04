import { tableColumnHeaders } from "../helpers/constants";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th />
        {tableColumnHeaders.map((tableHeader, index) => (
          <th key={index}>{tableHeader}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
