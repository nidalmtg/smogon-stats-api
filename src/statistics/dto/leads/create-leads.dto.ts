import { IsInt, IsNotEmpty, IsNumber, IsPositive, ValidateNested } from 'class-validator';
import { Pokemon } from '../../../pokemon/schemas/pokemon.schema';

export class CreateLeadsDto {
  @IsInt()
  @IsPositive()
  rank: number;

  @IsNotEmpty()
  @ValidateNested()
  pokemon: Pokemon;

  @IsNumber()
  @IsPositive()
  usagePercentage: number;

  @IsInt()
  @IsPositive()
  raw: number;

  @IsNumber()
  @IsPositive()
  percentage: number;
}
