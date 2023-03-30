import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Pokemon } from '../../../pokemon/schemas/pokemon.schema';

export type LeadsDocument = Document & Leads;

@Schema()
export class Leads {
  @Prop()
  rank: number;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Pokemon' })
  pokemon: Pokemon;

  @Prop()
  usagePercentage: number;

  @Prop()
  raw: number;

  @Prop()
  percentage: number;
}

export const LeadsSchema = SchemaFactory.createForClass(Leads);
