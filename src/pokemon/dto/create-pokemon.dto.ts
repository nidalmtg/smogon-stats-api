import {
  IsInt,
  IsNotEmpty,
  IsObject,
  IsPositive,
  IsString,
  ValidateNested,
} from 'class-validator';

export class CreatePokemonDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsInt()
  @IsPositive()
  dex: number;

  @IsObject()
  @ValidateNested()
  images: Record<string, string>;

  @IsObject()
  @ValidateNested()
  descriptionsDex: Record<string, string>;
}
