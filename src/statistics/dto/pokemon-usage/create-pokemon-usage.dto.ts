import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsNumber, IsPositive, ValidateNested } from 'class-validator';
import { Pokemon } from '../../../pokemon/schemas/pokemon.schema';

export class CreatePokemonUsageDto {
  @IsInt()
  @IsPositive()
  rang: number;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => Pokemon)
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

  @IsInt()
  @IsPositive()
  real: number;

  @IsNumber()
  @IsPositive()
  realPercentage: number;
}
