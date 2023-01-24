import { UpdateMenuDto } from "./update.menu.dto";

export class CreateMenuDto extends UpdateMenuDto {
    name:string;
    pais:string;
    ingredientes:Text;
}
