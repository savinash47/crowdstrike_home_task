import { FC } from "react";
import classNames from "classnames";
import { tableBodyRowsData } from "../helpers/constants";
import Checkbox from "./Checkbox";
import { TableRowPropsType, TableRowType } from "../typings";
import "./TableRow.css";

const TableRow: FC<TableRowType> = ({
  data,
  selectedFiles,
  onChangeTableRow,
}) => {
  const rowClassNames = classNames("row-base", {
    "selected-row": selectedFiles.includes(data.name),
  });
  return (
    <tr className={rowClassNames} onClick={() => onChangeTableRow(data.name)}>
      <td>
        <Checkbox
          checked={selectedFiles.indexOf(data.name) > -1}
          onChange={() => onChangeTableRow(data.name)}
        />
      </td>
      <td>{data.name}</td>
      <td className="text-capitalized">{data.device}</td>
      <td className="text-capitalized">{data.path}</td>
      <td className="text-capitalized">
        {data.status === "available" && <span className="green-disc"></span>}
        {data.status}
      </td>
    </tr>
  );
};

const TableRows: FC<TableRowPropsType> = ({
  onChangeTableRow,
  selectedFiles,
}): JSX.Element => {
  return (
    <>
      {tableBodyRowsData.map((data, index) => (
        <TableRow
          data={data}
          onChangeTableRow={onChangeTableRow}
          selectedFiles={selectedFiles}
          key={index}
        />
      ))}
    </>
  );
};

export default TableRows;
