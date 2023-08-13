import "./FieldsBase.scss";
import "./FieldsBase.scss";

interface IFieldsBase {
  children: JSX.Element;
  deleteField?: () => void;
}

const FieldsBase = ({ children, deleteField }: IFieldsBase) => {
  const renderDeleteButon = () => {
    if (deleteField) {
      return <button onClick={deleteField}>x</button>;
    }
  };

  return (
    <div className="fieldsBase">
      {renderDeleteButon()}
      {children}
    </div>
  );
};

export default FieldsBase;
