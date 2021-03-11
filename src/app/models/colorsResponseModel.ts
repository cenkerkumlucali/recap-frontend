import { Colors } from "./colors";
import { ResponseModel } from "./responseModel";

export interface ColorsResponseModule extends ResponseModel{
    data:Colors[]
}