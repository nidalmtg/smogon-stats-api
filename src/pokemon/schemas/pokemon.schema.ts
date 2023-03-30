import {
  Prop,
  Schema,
  SchemaFactory,
} from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  IsInt,
  IsNotEmpty,
  IsObject,
  IsPositive,
  IsString,
  ValidateNested,
} from 'class-validator';

export type PokemonDocument = Document & Pokemon;

@Schema()
export class Pokemon {
  @IsNotEmpty()
  @IsString()
  @Prop({ required: true })
  name: string;

  @IsInt()
  @IsPositive()
  @Prop({ required: true })
  dex: number;

  @IsObject()
  @ValidateNested()
  @Prop({ type: Map, of: String })
  images: Record<string, string>;

  @IsObject()
  @ValidateNested()
  @Prop({ type: Map, of: String })
  descriptionsDex: Record<string, string>;
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
