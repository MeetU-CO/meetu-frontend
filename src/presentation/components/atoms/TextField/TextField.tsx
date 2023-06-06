import { ITextField } from "./ITextField";

import "./TextField.scss";

const TextField = ({ field, value, link }: ITextField) => {
  return (
    <p className="textField">
      <strong>{field}: </strong>
      {link ? (
        <a href={link} target="blank">
          {value}
        </a>
      ) : (
        value
      )}
    </p>
  );
};

export default TextField;
