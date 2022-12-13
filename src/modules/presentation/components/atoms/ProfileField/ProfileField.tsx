import { IProfileField } from "./IProfileField";
import "./ProfileField.scss";

const ProfileField = ({ field, value, link }: IProfileField) => {
  return (
    <p className="profileField">
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

export default ProfileField;
