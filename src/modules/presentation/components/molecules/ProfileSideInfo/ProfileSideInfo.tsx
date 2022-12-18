import { ITextField } from "../../atoms/TextField/ITextField";
import TextField from "../../atoms/TextField/TextField";

import "./ProfileSideInfo.scss";

interface IProfileSideInfo {
  data: ITextField[];
}

const ProfileSideInfo = ({ data }: IProfileSideInfo) => {
  return (
    <div className="profileSideInfo">
      {data.map((i, index) => (
        <TextField field={i.field} value={i.value} link={i.link} key={index} />
      ))}
    </div>
  );
};

export default ProfileSideInfo;
