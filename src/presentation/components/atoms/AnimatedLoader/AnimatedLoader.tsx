import { MutatingDots } from "react-loader-spinner";

import "./AnimatedLoader.scss";

interface IAnimatedLoader {}

const AnimatedLoader = ({}: IAnimatedLoader) => {
  return (
    <MutatingDots
      height="100"
      width="100"
      color="var(--orange-soft-color)"
      secondaryColor="var(--orange-clear-color)"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

export default AnimatedLoader;
