import { ITextField } from "../../atoms/TextField/ITextField";
import TextField from "../../atoms/TextField/TextField";

import "./ProfileBottomInfo.scss";

interface IProfileBottomInfo {
  data: ITextField[];
}

const ProfileBottomInfo = ({ data }: IProfileBottomInfo) => {
  return (
    <div className="profileBottomInfo">
      {data.map((i, index) => (
        <TextField field={i.field} value={i.value} link={i.link} key={index} />
      ))}
    </div>
  );
};

export default ProfileBottomInfo;
