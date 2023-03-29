// pokemon.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PokemonDocument = Document & Pokemon;

@Schema()
export class Pokemon {
  @Prop({ required: true })
  name: string;

  @Prop({ type: Map, of: String })
  images: Record<string, string>;

  @Prop({ type: Map, of: String })
  descriptionsDex: Record<string, string>;
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
