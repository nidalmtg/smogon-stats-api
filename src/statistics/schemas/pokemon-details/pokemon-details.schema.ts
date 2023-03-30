import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsPositive,
  ValidateNested,
} from 'class-validator';

export type DetailPokemonStatsDocument = Document & DetailPokemonStats;

@Schema()
export class DetailPokemonStats {
  @IsObject()
  @IsNotEmpty()
  @Prop({ type: Map, of: Number })
  moves: Map<string, number>;

  @IsObject()
  @IsNotEmpty()
  @Prop({
    type: Map,
    of: { utilisation: Number, koed: Number, switchedOut: Number },
  })
  checksAndCounters: Map<
    string,
    { utilisation: number; koed: number; switchedOut: number }
  >;

  @IsObject()
  @IsNotEmpty()
  @Prop({ type: Map, of: Number })
  abilities: Map<string, number>;

  @IsObject()
  @IsNotEmpty()
  @Prop({ type: Map, of: Number })
  teammates: Map<string, number>;

  @IsNumber()
  @IsPositive()
  @Prop()
  usage: number;

  @IsObject()
  @IsNotEmpty()
  @Prop({ type: Map, of: Number })
  items: Map<string, number>;

  @IsInt()
  @IsPositive()
  @Prop()
  rawCount: number;

  @IsObject()
  @IsNotEmpty()
  @Prop({ type: Map, of: Number })
  spreads: Map<string, number>;

  @IsObject()
  @IsNotEmpty()
  @Prop({ type: Map, of: Number })
  happiness: Map<string, number>;

  @IsNotEmpty()
  @ValidateNested()
  @Prop([Number])
  viabilityCeiling: number[];
}

export const DetailPokemonStatsSchema =
  SchemaFactory.createForClass(DetailPokemonStats);
