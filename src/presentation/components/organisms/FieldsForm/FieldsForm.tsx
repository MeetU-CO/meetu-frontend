import { useDrop } from "react-dnd";

import "./FieldsForm.scss";

interface IFieldsForm {}

const FieldsForm = ({}: IFieldsForm) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "test",
    drop: () => ({ name: "dropBox" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  return (
    <div className="fieldsForm" ref={drop}>
      {canDrop && isOver ? "Si" : "No"}
    </div>
  );
};

export default FieldsForm;
