//TESTS

console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('public/main.js', 'utf8');

describe('', function () {
  it('', function() {
    let structureOne = function() {
      const shortenUrl = () => {
        fetch(_).then(_, networkError => {})
      }
    }

    let structureTwo = function() {
      const shortenUrl = () => {
        fetch(_).then(_, networkError => {
          console.log(networkError.message);
        })
      }
    }

    let structureThree = function() {
      const shortenUrl = () => {
        fetch(_).then(_, networkError => console.log(networkError.message))
      }
    }


    let isMatchOne = Structured.match(code, structureOne);
    let isMatchTwo = Structured.match(code, structureTwo);
    let isMatchThree = Structured.match(code, structureThree);
    assert.isOk(isMatchOne || isMatchThree, 'Did you include a second arrow callback function in `.then()`?')
    assert.isOk(isMatchTwo || isMatchThree, 'Did you call `console.log(networkError.message)` in the failure callback function?')
  });
