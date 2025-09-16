import { IsString, IsNumber } from "class-validator";

export class CreateItemContentDto {
    @IsString ({
        message: '제목은 문자열만 가능합니다.'
    })
    type: string;

    @IsString({
        message: '소스는 문자열만 가능합니다.'
    })
    content: string;

    @IsNumber({
        // message: 'id는 숫자만 가능합니다.'
    })
    portfolioItemId: number;
}

