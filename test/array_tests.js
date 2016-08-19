'use strict'

var expect = require('chai').expect
var array = require('../array')

describe('first test', function(){
  array.helloWorld()

  expect(array.byeWorld()).to.equal("bye World")
})
