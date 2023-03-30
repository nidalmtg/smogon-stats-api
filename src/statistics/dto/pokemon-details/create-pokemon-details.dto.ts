import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsPositive,
  ValidateNested,
} from 'class-validator';

export class CreatePokemonDetailsDto {
  @IsObject()
  @IsNotEmpty()
  moves: Map<string, number>;

  @IsObject()
  @IsNotEmpty()
  checksAndCounters: Map<
    string,
    { utilisation: number; koed: number; switchedOut: number }
  >;

  @IsObject()
  @IsNotEmpty()
  abilities: Map<string, number>;

  @IsObject()
  @IsNotEmpty()
  teammates: Map<string, number>;

  @IsNumber()
  @IsPositive()
  usage: number;

  @IsObject()
  @IsNotEmpty()
  items: Map<string, number>;

  @IsInt()
  @IsPositive()
  rawCount: number;

  @IsObject()
  @IsNotEmpty()
  spreads: Map<string, number>;

  @IsObject()
  @IsNotEmpty()
  happiness: Map<string, number>;

  @IsNotEmpty()
  @ValidateNested()
  viabilityCeiling: number[];
}
