import { ITextField } from "../../atoms/TextField/ITextField";

import ProfileBottomInfo from "../../molecules/ProfileBottomInfo/ProfileBottomInfo";
import { IProfileMainInfo } from "../../molecules/ProfileMainInfo/IProfileMainInfo";
import ProfileMainInfo from "../../molecules/ProfileMainInfo/ProfileMainInfo";
import ProfileSideInfo from "../../molecules/ProfileSideInfo/ProfileSideInfo";

import "./ProfileSection.scss";

interface IProfileSection {
  sideInfo: ITextField[];
  bottomInfo: ITextField[];
  mainInfo: IProfileMainInfo;
}

const ProfileSection = ({
  mainInfo,
  sideInfo,
  bottomInfo,
}: IProfileSection) => {
  return (
    <div className="profileSection">
      <div className="profileSection__header">
        <ProfileMainInfo
          name={mainInfo.name}
          carreer={mainInfo.carreer}
          university={mainInfo.university}
          profileImg={mainInfo.profileImg}
        />
        <div className="profileSection__header__divisor-line-vertical"></div>
        <div className="profileSection__header__divisor-line-horizontal"></div>
        <ProfileSideInfo data={sideInfo} />
      </div>
      <div className="profileSection__divisor-line"></div>
      <ProfileBottomInfo data={bottomInfo} />
    </div>
  );
};

export default ProfileSection;
