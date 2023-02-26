import { Test, TestingModule } from '@nestjs/testing';
import { FixerController } from './fixer.controller';

describe('FixerController', () => {
  let controller: FixerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FixerController],
    }).compile();

    controller = module.get<FixerController>(FixerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
