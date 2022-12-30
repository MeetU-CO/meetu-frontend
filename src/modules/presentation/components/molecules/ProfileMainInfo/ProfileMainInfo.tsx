import SpanCustom from "../../atoms/SpanCustom/SpanCustom";
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
        <SpanCustom
          text={carreer}
          style={{
            fontSize: "18px",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "400",
          }}
        />
        <SpanCustom
          text={university}
          style={{
            fontSize: "16px",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "300",
          }}
        />
      </div>
    </div>
  );
};

export default ProfileMainInfo;
