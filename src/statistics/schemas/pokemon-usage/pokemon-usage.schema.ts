import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Pokemon } from '../../../pokemon/schemas/pokemon.schema';

export type PokemonUsageDocument = Document & PokemonUsage;

@Schema()
export class PokemonUsage {
  @Prop()
  rang: number;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Pokemon' })
  pokemon: Pokemon;

  @Prop()
  usagePercentage: number;

  @Prop()
  raw: number;

  @Prop()
  percentage: number;

  @Prop()
  real: number;

  @Prop()
  realPercentage: number;
}

export const PokemonUsageSchema = SchemaFactory.createForClass(PokemonUsage);
