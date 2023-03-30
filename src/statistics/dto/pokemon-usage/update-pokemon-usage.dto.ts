import { PartialType } from '@nestjs/mapped-types';
import { CreatePokemonUsageDto } from './create-pokemon-usage.dto';

export class UpdatePokemonUsageDto extends PartialType(CreatePokemonUsageDto) {}
