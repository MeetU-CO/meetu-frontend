import { MutatingDots } from "react-loader-spinner";

import "./Loader.scss";

interface ILoader {}

const Loader = ({}: ILoader) => {
  return (
    <div className="loader">
      <MutatingDots
        height="100"
        width="100"
        color="var(--soft-orange-color)"
        secondaryColor="var(--clear-orange-color)"
        radius="15"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
