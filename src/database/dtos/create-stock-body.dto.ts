
import { IsNotEmpty, Length } from "class-validator";

export class CreateStocksBody {

    @IsNotEmpty()
    @Length(5,100)
    name : string;
    
    @IsNotEmpty({
        message: 'The value should not be empty'
    })
    value: number;
}