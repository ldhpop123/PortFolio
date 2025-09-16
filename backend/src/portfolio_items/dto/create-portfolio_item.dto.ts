import { IsNumber, IsString } from "class-validator";

export class CreatePortfolioItemDto {
    @IsString ({
        message: '제목은 문자열만 가능합니다.'
    })
    name: string;

    @IsString({
        message: '소스는 문자열만 가능합니다.'
    })
    src: string;
}