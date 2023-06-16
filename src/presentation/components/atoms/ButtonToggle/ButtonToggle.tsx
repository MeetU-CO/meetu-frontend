import { Field } from "formik";

import "./ButtonToggle.scss";

interface IButtonToggle {
  name: string;
  label: string;
}

const ButtonToggle = ({ name, label }: IButtonToggle) => {
  return (
    <label className="buttonToggle">
      <Field type="checkbox" name={name} id={name} value={name} />
      <div className="buttonToggle__container">
        <div className="buttonToggle__bullet"></div>
      </div>
      {label}
    </label>
  );
};

export default ButtonToggle;
