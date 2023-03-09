

const who = ['My dog', 'My grandma', 'My boss', 'My neighbor'];
const action = ['ate', 'broke', 'peed on', 'hid'];
const what = ['my homework', 'the keys', 'the car'];
const when = ['before I got home', 'during the call', 'right at that moment', 'while cooking', 'while doing homework'];

// Genera un número aleatorio entre min (inclusive) y max (exclusivo)
function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Genera una excusa aleatoria y la muestra en el elemento con id "excuse"
function generarExcusa() {
  const randomWho = who[generarNumeroAleatorio(0, who.length)];
  const randomAction = action[generarNumeroAleatorio(0, action.length)];
  const randomWhat = what[generarNumeroAleatorio(0, what.length)];
  const randomWhen = when[generarNumeroAleatorio(0, when.length)];

  const excusa = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
  document.getElementById("excuse").innerHTML = excusa;
}
