import { PartialType } from '@nestjs/mapped-types';
import { CreateMetagameDto } from './create-metagame.dto';

export class UpdateMetagameDto extends PartialType(CreateMetagameDto) {}
