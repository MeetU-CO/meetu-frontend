import SmallComplementaryText from "../../atoms/SmallComplementaryText/SmallComplementaryText";
import ThirdTitle from "../../atoms/ThirdTitle/ThirdTitle";
import { IProfileMainInfo } from "./IProfileMainInfo";
import "./ProfileMainInfo.scss";

const ProfileMainInfo = ({ name, carreer, university, profileImg }: IProfileMainInfo) => {
  return (
    <div className="profileMainInfo">
      <img src={profileImg} alt="" srcSet="" className="profileMainInfo__img" />
      <div className="profileMainInfo__details">
        <ThirdTitle title={[name]} fontSize={"20px"} />
        <SmallComplementaryText
          text={carreer}
          style={{
            fontSize: "18px",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "400",
          }}
        />
        <SmallComplementaryText
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
