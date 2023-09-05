import { FC } from "react";
import { useDrag } from "react-dnd";

import { FIELDS_COMPONENTS } from "../../organisms/Fields/FieldsData";

import { Field } from "../../../../modules/organization/domain/Organization";

import "./FieldCard.scss";

interface IFieldCard {
  field: Field;
  isDefault: boolean;
  isDraggable: boolean;
}

const FieldCard: FC<IFieldCard> = ({ field, isDefault, isDraggable }) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: field.name,
      item: {
        name: field.name,
        available: true,
      },
      canDrag: isDraggable,
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
        handlerId: monitor.getHandlerId(),
      }),
    }),
    []
  );
  return (
    <div className="fieldCard" ref={drag}>
      <span className={`material-icons-outlined ${isDefault ? "default" : ""}`}>
        {FIELDS_COMPONENTS[field.name].icon}
      </span>
      <span className="fieldCard__name">{field.description}</span>
    </div>
  );
};

export default FieldCard;
