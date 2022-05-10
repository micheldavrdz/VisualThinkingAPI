const Reader = require('../../app/lib/utils/Reader');

describe('Unit test for Reader class', () => {
  test('Test case 1 - Check if visualpartners is defined', () => {
    const visualpartners = Reader.readJsonfile('visualpartners.json');
    expect(visualpartners).toBeDefined();
    expect(visualpartners.length).toBeGreaterThan(0);
  });
});
