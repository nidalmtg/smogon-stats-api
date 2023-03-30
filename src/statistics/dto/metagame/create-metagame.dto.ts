// create-metagame.dto.ts
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateMetagameDto {
  @IsNotEmpty()
  weather: {
    weatherless: number;
    sun: number;
    rain: number;
    hail: number;
    sand: number;
    multiweather: number;
    allweather: number;
  };

  @IsNotEmpty()
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

  @IsNotEmpty()
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
