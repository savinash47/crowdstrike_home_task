import { ChangeEvent, RefObject } from "react";

export type TableBodyRowsDataType = {
  name: string;
  device: string;
  path: string;
  status: string;
};

export type CheckboxType = {
  checked: boolean;
  ref?: RefObject<HTMLInputElement>;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type TableRowPropsType = {
  onChangeTableRow: (fileName: string) => void;
  selectedFiles: string[];
};

export type TableRowType = {
  data: TableBodyRowsDataType;
  selectedFiles: string[];
  onChangeTableRow: (fileName: string) => void;
};
