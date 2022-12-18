import HIWStepsContainer from "../../components/organisms/HIWStepsContainer/HIWStepsContainer";

import HowItWorksTemplate from "../../templates/HowItWorks/HowItWorks";

import "./HowItWorks.scss";

const HowItWorks = () => {
  return (
    <div className="howItWorks">
      <HowItWorksTemplate
        mainTitle="Solo 3 pasos para conectarte con ofertas laborales dentro y fuera de tu campus"
        icon={
          <svg
            width="100%"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 123.98V171.574H86.4383L159.814 123.98H0Z"
              fill="#F05600"
            />
            <path
              d="M240.186 123.98L313.562 171.574H400V123.98H240.186Z"
              fill="#F05600"
            />
            <path
              d="M188.108 20.9945V105.628L200 97.9148L211.891 105.628V86.7445L288.965 58.264L188.108 20.9945Z"
              fill="#F05600"
            />
            <path
              d="M286.745 284.58C280.455 284.58 275.339 289.696 275.339 295.986V379.005H298.151V295.985C298.151 289.696 293.034 284.58 286.745 284.58Z"
              fill="#F05600"
            />
            <path
              d="M113.255 284.58C106.965 284.58 101.849 289.696 101.849 295.986V379.005H124.661V295.985C124.662 289.696 119.545 284.58 113.255 284.58Z"
              fill="#F05600"
            />
            <path
              d="M200 284.58C193.711 284.58 188.595 289.696 188.595 295.985V379.005H211.406V295.985C211.406 289.696 206.289 284.58 200 284.58Z"
              fill="#F05600"
            />
            <path
              d="M200 189.855C192.635 189.855 186.643 195.847 186.643 203.212C186.643 210.578 192.635 216.57 200 216.57C207.365 216.57 213.357 210.577 213.357 203.212C213.357 195.848 207.365 189.855 200 189.855Z"
              fill="#F05600"
            />
            <path
              d="M200 126.262L101.849 189.927V262.704C105.429 261.473 109.263 260.795 113.255 260.795C132.658 260.795 148.444 276.581 148.444 295.985V379.004H164.811V295.984C164.811 276.581 180.597 260.795 200 260.795C219.403 260.795 235.189 276.581 235.189 295.984V379.004H251.555V295.985C251.555 276.581 267.341 260.795 286.744 260.795C290.736 260.795 294.571 261.473 298.151 262.704V189.927L200 126.262ZM200 240.352C179.521 240.352 162.86 223.691 162.86 203.212C162.86 182.734 179.521 166.073 200 166.073C220.479 166.073 237.14 182.734 237.14 203.212C237.14 223.691 220.479 240.352 200 240.352Z"
              fill="#F05600"
            />
            <path
              d="M0 195.358V379.005H78.0656V295.985V195.358H0ZM50.9242 344.506H27.1406V318.186H50.9242V344.506ZM50.9242 300.341H27.1406V274.02H50.9242V300.341ZM50.9242 256.176H27.1406V229.855H50.9242V256.176Z"
              fill="#F05600"
            />
            <path
              d="M321.935 195.358V295.985V379.004H400V195.358H321.935ZM372.859 344.506H349.075V318.186H372.859V344.506ZM372.859 300.341H349.075V274.02H372.859V300.341ZM372.859 256.176H349.075V229.855H372.859V256.176Z"
              fill="#F05600"
            />
          </svg>
        }
        steps={<HIWStepsContainer />}
      />
    </div>
  );
};

export default HowItWorks;
