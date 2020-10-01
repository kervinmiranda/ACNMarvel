import { Heroe } from './heroe';

describe('Heroe', () => {
  it('should create an instance', () => {
    expect(new Heroe(
      "1",
      "Aaron Stack",
      "",
      new Date("1969-12-31T19:00:00-0500"),
      "",
      "http://gateway.marvel.com/v1/public/characters/1010699",
      ""
    )).toBeTruthy();
  });
});
