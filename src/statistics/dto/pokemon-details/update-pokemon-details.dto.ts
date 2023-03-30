import { PartialType } from '@nestjs/mapped-types';
import { CreatePokemonDetailsDto } from './create-pokemon-details.dto';

export class UpdatePokemonDetailsDto extends PartialType(
  CreatePokemonDetailsDto,
) {}
