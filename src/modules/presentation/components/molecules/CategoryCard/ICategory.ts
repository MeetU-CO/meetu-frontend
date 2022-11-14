import { ICategoryCardImg } from "../../atoms/CategoryCardImg/ICategoryCardImg";
import { ICategoryCardTitle } from "../../atoms/CategoryCardTitle/ICategoryCardTitle";

export interface ICategory extends ICategoryCardTitle, ICategoryCardImg {
  categoryColor: string;
  cardWidth: string;
}
