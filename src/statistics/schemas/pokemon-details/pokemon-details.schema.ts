import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DetailPokemonStatsDocument = Document & DetailPokemonStats;

@Schema()
export class DetailPokemonStats {
  @Prop({ type: Map, of: Number })
  moves: Map<string, number>;

  @Prop({
    type: Map,
    of: { utilisation: Number, koed: Number, switchedOut: Number },
  })
  checksAndCounters: Map<
    string,
    { utilisation: number; koed: number; switchedOut: number }
  >;

  @Prop({ type: Map, of: Number })
  abilities: Map<string, number>;

  @Prop({ type: Map, of: Number })
  teammates: Map<string, number>;

  @Prop()
  usage: number;

  @Prop({ type: Map, of: Number })
  items: Map<string, number>;

  @Prop()
  rawCount: number;

  @Prop({ type: Map, of: Number })
  spreads: Map<string, number>;

  @Prop({ type: Map, of: Number })
  happiness: Map<string, number>;

  @Prop([Number])
  viabilityCeiling: number[];
}

export const DetailPokemonStatsSchema =
  SchemaFactory.createForClass(DetailPokemonStats);
