import { useDrop } from "react-dnd";
import { v4 as uuidv4 } from "uuid";

import TextLight from "../../atoms/TextLight/TextLight";

import { fieldData } from "../Fields/FieldData";
import "./DropArea.scss";

interface IDropArea {
  fieldsList: any;
  acceptedFields: any;
}

const DropArea = ({ fieldsList, acceptedFields }: IDropArea) => {
  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: acceptedFields(fieldData),
      drop: (item: { name: string; available: boolean }) => {
        const id: string = uuidv4();
        const newField: any = { ...fieldsList.current };
        newField[id] = fieldData[item.name as keyof Object];
        fieldsList.current = newField;
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }),
    [fieldsList]
  );

  return (
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
  );
};

export default DropArea;
