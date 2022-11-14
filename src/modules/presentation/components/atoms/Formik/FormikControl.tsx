import React from "react";
import Input from "./Input";
import Password from "./Password";

interface IFormikControl {
  control: string;
  type: string;
  name: string;
  label: string;
  guideLink: string;
}

const FormikControl = (props: IFormikControl): JSX.Element => {
  const { control, type, name, label, guideLink } = props;
  switch (control) {
    case "input":
      return (
        <Input type={type} name={name} label={label} guideLink={guideLink} />
      );
    case "password":
      return (
        <Password type={type} name={name} label={label} guideLink={guideLink} />
      );
    default:
      return <></>;
  }
};

export default FormikControl;
