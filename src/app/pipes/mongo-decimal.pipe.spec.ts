import { MongoDecimalPipe } from './mongo-decimal.pipe';

describe('MongoDecimalPipe', () => {
  it('create an instance', () => {
    const pipe = new MongoDecimalPipe();
    expect(pipe).toBeTruthy();
  });
});
