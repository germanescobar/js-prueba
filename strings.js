// cadenas de texto (strings)
const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

// recorrer
/*for (let i=0; i < text.length; i++) {
  console.log(text[i]) // text.charAt(i)
}*/

// partir una cadena
// const words = text.split(" ")
// console.log(words)

// console.log(text.toUpperCase())

/*console.log("Hola mundo"[3]) // "a"
console.log("    "[2])  // " "

const words = ["Hola", "Mundo"]
console.log(words.join("----"))*/

function generatePassword(str) {
  return str.toLowerCase()
           .replace(/ /g, "")
           .replace(/a/g, "4")
           .replace(...)
           .replace(...)
}

console.log(generatePassword("hola")); // "h0l4"
console.log(generatePassword("esta es una prueba")); // "3st43sun4pru3b4"
console.log(generatePassword("")); // ""


function capitalize(str) {
  //return str[0].toUpperCase() + str.substring(1)
  const words = str.split(" ")
  for (let i=0; i < words.length; i++) {
    const w = words[i]
    words[i] = w[0].toUpperCase() + w.substring(1)
  }

  return words.join(" ")
}

console.log(capitalize("make it real")) // "Make It Real"
