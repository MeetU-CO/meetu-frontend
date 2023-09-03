import "./FieldsBase.scss";
import "./FieldsBase.scss";

interface IFieldsBase {
  children: JSX.Element;
  deleteField?: () => void;
}

const FieldsBase = ({ children, deleteField }: IFieldsBase) => {
  const renderDeleteButon = () => {
    if (deleteField) {
      return (
        <div className="fieldsBase__deleteButton">
          <button onClick={deleteField}>
            <i className="bi bi-x"></i>
          </button>
        </div>
      );
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
