import { IProfileField } from "../../atoms/ProfileField/IProfileField";
import ProfileField from "../../atoms/ProfileField/ProfileField";
import "./ProfileSideInfo.scss";

interface IProfileSideInfo {
  data: IProfileField[];
}

const ProfileSideInfo = ({ data }: IProfileSideInfo) => {
  return (
    <div className="profileSideInfo">
      {data.map((i, index) => (
        <ProfileField field={i.field} value={i.value} link={i.link} key={index} />
      ))}
    </div>
  );
};

export default ProfileSideInfo;
