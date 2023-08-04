const handleLoginGooogle = async () => {
  window.open(
    `${process.env.REACT_APP_AUTHENTICATION_SERVICE_URI}/google`,
    "_self"
  );
};

const handleLoginMicrosoft = async () => {
  window.open(
    `${process.env.REACT_APP_AUTHENTICATION_SERVICE_URI}/microsoft`,
    "_self"
  );
};

export { handleLoginGooogle, handleLoginMicrosoft };
