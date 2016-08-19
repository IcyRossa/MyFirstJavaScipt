'use strict'

//header can also be written 'var helloWorld = function()'
function helloWorld(){
  console.log("Hello World2")
}

function byeWorld(){
  console.log("bye World")
  return 'bye World'
}

module.exports = {
  'helloWorld': helloWorld,
  'byeWorld': byeWorld
}
