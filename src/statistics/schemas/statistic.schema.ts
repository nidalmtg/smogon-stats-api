import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { PokemonUsage } from './pokemon-usage/pokemon-usage.schema';
import { Leads } from './leads/leads.schema';
import { DetailPokemonStats } from './pokemon-details/pokemon-details.schema';
import { Metagame } from './metagame/metagame.schema';
import { IsDate, IsNumber, IsString } from 'class-validator';

export type GameStatisticsDocument = Document & GameStatistics;

@Schema()
export class GameStatistics {
  @IsString()
  @Prop()
  tier: string;

  @IsDate()
  @Prop()
  date: string;

  @IsNumber()
  @Prop()
  minElo: number;

  @Prop()
  stats: {
    totalBattles: number;
    weight: number;
    pokemonUsage: PokemonUsage[];
    metagame: Metagame[];
    leads: Leads[];
    detailPokemonStats: Map<string, DetailPokemonStats>;
  };
}
