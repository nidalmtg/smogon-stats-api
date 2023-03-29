import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MetagameDocument = Document & Metagame;

@Schema()
export class Metagame {
  @Prop()
  weather: {
    weatherless: number;
    sun: number;
    rain: number;
    hail: number;
    sand: number;
    multiweather: number;
    allweather: number;
  };

  @Prop()
  matchup: {
    offense: number;
    balance: number;
    hyperOffense: number;
    voltTurn: number;
    semiStall: number;
    stall: number;
    choice: number;
    tailwind: number;
    trapper: number;
  };

  @Prop()
  monotype: {
    monowater: number;
    monofire: number;
    monodragon: number;
    monodark: number;
    monobug: number;
    monoghost: number;
    monofighting: number;
    monoflying: number;
    monoice: number;
    mononormal: number;
    monofairy: number;
    monopoison: number;
    monosteel: number;
    monograss: number;
    monopsychic: number;
    monoelectric: number;
    monoground: number;
    monorock: number;
  };
}

export const MetagameSchema = SchemaFactory.createForClass(Metagame);
