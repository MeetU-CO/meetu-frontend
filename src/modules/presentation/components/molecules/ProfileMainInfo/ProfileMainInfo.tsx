import SpanPoppins from "../../atoms/SpanPoppins/SpanPoppins";
import SpanPoppinsLight from "../../atoms/SpanPoppinsLight/SpanPoppinsLight";
import TitleH3Bold from "../../atoms/TitleH3Bold/TitleH3Bold";

import { IProfileMainInfo } from "./IProfileMainInfo";

import "./ProfileMainInfo.scss";

const ProfileMainInfo = ({
  name,
  carreer,
  university,
  profileImg,
}: IProfileMainInfo) => {
  return (
    <div className="profileMainInfo">
      <img src={profileImg} alt="" srcSet="" className="profileMainInfo__img" />
      <div className="profileMainInfo__details">
        <TitleH3Bold
          title={name}
          color={"var(--black-full-color)"}
          textAlign={"left"}
        />
        <SpanPoppins text={carreer} />
        <SpanPoppinsLight text={university} />
      </div>
    </div>
  );
};

export default ProfileMainInfo;
