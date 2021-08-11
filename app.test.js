const apptest = require('./app.js');

describe('apptest', () => {
  it('location', () => {
    expect(
      apptest('location'),
    ).toEqual('"state":"WA,"active":true');

   
  
  });
});