import {
  Prop,
  Schema,
  SchemaFactory,
} from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Pokemon } from '../../../pokemon/schemas/pokemon.schema';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  ValidateNested,
} from 'class-validator';

export type PokemonUsageDocument = Document & PokemonUsage;

@Schema()
export class PokemonUsage {
  @IsInt()
  @IsPositive()
  @Prop()
  rang: number;

  @IsNotEmpty()
  @ValidateNested()
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Pokemon' })
  pokemon: Pokemon;

  @IsNumber()
  @IsPositive()
  @Prop()
  usagePercentage: number;

  @IsInt()
  @IsPositive()
  @Prop()
  raw: number;

  @IsNumber()
  @IsPositive()
  @Prop()
  percentage: number;

  @IsInt()
  @IsPositive()
  @Prop()
  real: number;

  @IsNumber()
  @IsPositive()
  @Prop()
  realPercentage: number;
}

export const PokemonUsageSchema = SchemaFactory.createForClass(PokemonUsage);
