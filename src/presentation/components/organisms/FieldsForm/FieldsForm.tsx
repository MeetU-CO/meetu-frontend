import { useState } from "react";
import { useDrop } from "react-dnd";

import TextLight from "../../atoms/TextLight/TextLight";

import { FieldTypes } from "./FieldTypes";
import "./FieldsForm.scss";

interface IFieldsForm {}

const FieldsForm = ({}: IFieldsForm) => {
  const [fields, setFields] = useState<{ name: string; available: boolean }[]>(
    []
  );
  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: FieldTypes.fieldCard,
      drop: (item: { name: string; available: boolean }) => {
        console.log(item);
        setFields([...fields, item]);
        return undefined;
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }),
    [fields]
  );
  return (
    <div className="fieldsForm">
      {fields.map((i: any, index: number) => (
        <div key={index}>
          <h2>{i.name}</h2>
        </div>
      ))}
      <div
        className={
          isOver ? "fieldsForm__dropArea--isOver" : "fieldsForm__dropArea"
        }
        ref={drop}
      >
        <TextLight
          text={"Arrastra y suelta tu campo aquí"}
          textAlign={"center"}
        />
      </div>
    </div>
  );
};

export default FieldsForm;
