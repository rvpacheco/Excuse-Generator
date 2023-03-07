let who = ['My dog', 'My grandma', 'My boss', 'My neighbor'];
let action = ['ate', 'broke', 'peed on', 'hid'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before I got home', 'during the call', 'right at that moment', 'while cooking', 'while doing homework'];


function generarExcusa() {
  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];
  

  let excusa = randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen + ".";
  document.getElementById("excuse").innerHTML = excusa;
}
