import { NAVIGATION_LINKS } from './links.const';

describe('links.const', () => {
  it('should have a defined constant', () => {
    expect(NAVIGATION_LINKS).toBeDefined();
  });

  it('should have an array of objects with href and text', () => {
    expect(NAVIGATION_LINKS).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          href: expect.any(String),
          text: expect.any(String),
        }),
      ])
    );
  });

  it('should have the expected number of links', () => {
    expect(NAVIGATION_LINKS.length).toBe(8);
  });
});
