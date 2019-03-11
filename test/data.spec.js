require('../src/data.js');
const lol= require('../src/data/lol/lol.json');
const lolDataMock= require('../src/data/lol/lolDataMock.json');
const orderByAttackMock= require('../src/data/lol/orderByAttackMock.json');
/*const sortDataMock  = require('../src/data/pokemon/sortDataMck.json');
const computeStatsMock = require('../src/data/pokemon/computeStatsMock.json');*/

describe('lolDataMock',()=>{
  it('is an object',()=>{
    expect(typeof lolDataMock).toBe('object');
  });
});

describe('orderAttack',()=>{
  it('is a function',()=>{
    expect(typeof window.totalData.orderByAttack).toBe('function');
  });
  it ('should return a subset of champions with the highest attack', ()=>{
    expect (typeof window.totalData.orderByAttack(lol.LOL.data,'"attack":10')).toEqual(orderByAttackMock);
  });
});


