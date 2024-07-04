import { forwardRef } from "react";
import { CheckboxType } from "../typings";

const Checkbox = forwardRef<HTMLInputElement, CheckboxType>(
  (props, ref): JSX.Element => {
    const { checked, onChange } = props;
    return (
      <input checked={checked} type="checkbox" ref={ref} onChange={onChange} />
    );
  },
);

export default Checkbox;
