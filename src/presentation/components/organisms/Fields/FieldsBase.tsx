import "./FieldsBase.scss";
import "./FieldsBase.scss";

interface IFieldsBase {
  children: JSX.Element;
}

const FieldsBase = ({ children }: IFieldsBase) => {
  return <div className="fieldsBase">{children}</div>;
};

export default FieldsBase;
