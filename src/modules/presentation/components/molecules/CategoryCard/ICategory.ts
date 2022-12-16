import { IimageAbsolute } from "../../atoms/ImageAbsoulute/IimageAbsolute";
import { ITitleH3Color } from "../../atoms/TitleH3Color/ITitleH3Color";

export interface ICategory {
  img: IimageAbsolute;
  title: ITitleH3Color;
  categoryColor: string;
  cardWidth: string;
}
