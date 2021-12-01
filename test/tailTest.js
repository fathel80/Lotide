const assertEqual = require("../assertEqual");
const assert = require('chai').assert;
const tail = require("../tail");

describe("#tail", () => {
  it('returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
});


const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); 
assertEqual(words.length, 3); 