const Error = ({ children }) => {
  return (
    <div className="error" style={{ color: "red" }}>
      {children}
    </div>
  );
};

export default Error;
