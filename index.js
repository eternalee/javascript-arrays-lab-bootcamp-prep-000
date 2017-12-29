const app = "I don't do much."


function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  returns [...kittens, name]
}

function prependKitten(name) {
  returns [name, ...kittens]
}

function removeLastKitten() {
  returns kittens.slice()
}

function removeFirstKitten() {
  returns kittens.slice(1)
}