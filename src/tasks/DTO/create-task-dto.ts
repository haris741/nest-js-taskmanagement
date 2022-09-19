import { IsNotEmpty } from "class-validator";
export class CreateTaskDto{
    
    @IsNotEmpty()
    title: String;

    @IsNotEmpty()
    description: String;
}
