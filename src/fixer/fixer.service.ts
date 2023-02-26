import { Injectable } from '@nestjs/common';

@Injectable()
export class FixerService {
  public GetID() {
    console.log('ID = 23');
  }
}
