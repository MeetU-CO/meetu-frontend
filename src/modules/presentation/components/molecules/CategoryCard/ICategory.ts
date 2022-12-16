import { ICategoryCardTitle } from "../../atoms/CategoryCardTitle/ICategoryCardTitle";
import { IimageAbsolute } from "../../atoms/ImageAbsoulute/IimageAbsolute";

export interface ICategory extends ICategoryCardTitle, IimageAbsolute {
  categoryColor: string;
  cardWidth: string;
}
