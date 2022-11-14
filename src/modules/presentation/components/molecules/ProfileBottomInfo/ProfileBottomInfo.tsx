import { IProfileField } from "../../atoms/ProfileField/IProfileField";
import ProfileField from "../../atoms/ProfileField/ProfileField";
import "./ProfileBottomInfo.scss";

interface IProfileBottomInfo {
  data: IProfileField[];
}

const ProfileBottomInfo = ({ data }: IProfileBottomInfo) => {
  return (
    <div className="profileBottomInfo">
      {data.map((i, index) => (
        <ProfileField field={i.field} value={i.value} link={i.link} key={index} />
      ))}
    </div>
  );
};

export default ProfileBottomInfo;
