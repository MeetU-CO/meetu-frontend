import { ITextField } from "../../components/atoms/TextField/ITextField";

import { IProfileMainInfo } from "../../components/molecules/ProfileMainInfo/IProfileMainInfo";

import { IOffer } from "../../components/organisms/OfferCard/IOffer";
import ProfileRecord from "../../components/organisms/ProfileRecord/ProfileRecord";
import ProfileSection from "../../components/organisms/ProfileSection/ProfileSection";

import "./Profile.scss";

interface IProfileSection {
  sideInfo: ITextField[];
  bottomInfo: ITextField[];
  mainInfo: IProfileMainInfo;
  currentJobs: IOffer[];
  pastJobs: IOffer[];
}

const Profile = ({
  mainInfo,
  sideInfo,
  bottomInfo,
  currentJobs,
  pastJobs,
}: IProfileSection) => {
  return (
    <div className="profile-template">
      <ProfileSection
        mainInfo={mainInfo}
        sideInfo={sideInfo}
        bottomInfo={bottomInfo}
      />
      <ProfileRecord currentJobs={currentJobs} pastJobs={pastJobs} />
    </div>
  );
};

export default Profile;
