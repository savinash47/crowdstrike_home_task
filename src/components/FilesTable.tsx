import { ChangeEvent, FC, createRef, useEffect, useState } from "react";
import TableHeader from "./TableHeader";
import TableRows from "./TableRows";
import Checkbox from "./Checkbox";
import { tableBodyRowsData } from "../helpers/constants";
import "./FilesTable.css";

const FilesTable: FC = (): JSX.Element => {
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);

  const allFilesSelectorRef = createRef<HTMLInputElement>();

  const onClickDownloadBtn = () => {
    const filesData = tableBodyRowsData.filter(
      (data) =>
        selectedFiles.includes(data.name) && data.status === "available",
    );
    if (filesData.length === 0) {
      alert("No files available to download");
    } else {
      const downloadDataStr = filesData.reduce(
        (prev, curr) => prev + `~Path:${curr.path}:: Device:${curr.device}`,
        "",
      );
      alert(downloadDataStr);
    }
  };

  const onChangeAllFilesSelection = (
    e: ChangeEvent<HTMLInputElement>,
  ): void => {
    if (!e.target.checked) {
      setSelectedFiles([]);
    } else {
      setSelectedFiles(tableBodyRowsData.map((data) => data.name));
    }
  };

  useEffect(() => {
    if (selectedFiles.length > 0) {
      if (selectedFiles.length !== tableBodyRowsData.length) {
        if (allFilesSelectorRef.current) {
          allFilesSelectorRef.current.indeterminate = true;
        }
      } else {
        if (allFilesSelectorRef.current) {
          allFilesSelectorRef.current.indeterminate = false;
        }
      }
    }
  }, [selectedFiles.length, allFilesSelectorRef]);

  const onChangeTableRow = (fileName: string) => {
    if (selectedFiles.indexOf(fileName) > -1) {
      setSelectedFiles((files) => files.filter((name) => name !== fileName));
    } else {
      setSelectedFiles([...selectedFiles, fileName]);
    }
  };

  return (
    <div className="files-table-container">
      <div className="page-top-container">
        <Checkbox
          checked={selectedFiles.length === tableBodyRowsData.length}
          onChange={onChangeAllFilesSelection}
          ref={allFilesSelectorRef}
        />
        {selectedFiles.length > 0 ? (
          <>Selected {selectedFiles.length}</>
        ) : (
          <>None Selected</>
        )}
        <button onClick={onClickDownloadBtn}>Download Selected</button>
        (Only the files with status available can be downloaded)
      </div>
      <table>
        <TableHeader />
        <tbody>
          <TableRows
            onChangeTableRow={onChangeTableRow}
            selectedFiles={selectedFiles}
          />
        </tbody>
      </table>
    </div>
  );
};

export default FilesTable;
