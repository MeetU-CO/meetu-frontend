import { useDrag } from "react-dnd";

import "./FieldCard.scss";

interface IFieldCard {}

const FieldCard = ({}: IFieldCard) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "test",
    item: "test",
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));
  return (
    <div className="fieldCard" ref={drag}>
      {" "}
    </div>
  );
};

export default FieldCard;
