// create-pokemon-usage.dto.ts
import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsDate,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { PokemonUsage } from '../schemas/pokemon-usage/pokemon-usage.schema';
import { Leads } from '../schemas/leads/leads.schema';
import { DetailPokemonStats } from '../schemas/pokemon-details/pokemon-details.schema';
import { Metagame } from '../schemas/metagame/metagame.schema';

export class CreateStatisticDto {
  @IsString()
  tier: string;

  @IsDate()
  date: string;

  @IsNumber()
  minElo: number;

  @IsNumber()
  totalBattles: number;

  @IsNumber()
  weight: number;

  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => PokemonUsage)
  pokemonUsage: PokemonUsage[];

  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => Metagame)
  metagame: Metagame[];

  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => Leads)
  leads: Leads[];

  @ValidateNested()
  @Type(() => DetailPokemonStats)
  detailPokemonStats: Map<string, DetailPokemonStats>;
}
