import { useDrag } from "react-dnd";

import "./FieldCard.scss";

interface IFieldCard {
  type: string;
  item: {
    name: string;
    available: boolean;
  };
}

const FieldCard = ({ type, item }: IFieldCard) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: type,
      item: item,
      canDrag: item.available,
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
        handlerId: monitor.getHandlerId(),
      }),
    }),
    []
  );
  return (
    <div className="fieldCard" ref={drag}>
      {" "}
    </div>
  );
};

export default FieldCard;
