function* factorial() {
  let result = 1;
  for (let i = 1; true; i++) {
    yield result *= i;
  }
}

for (const value of factorial()) {
  console.log(value);
  if (value > 2000) break;
}

function* alphabet() {
  for (let c = 'a'; c <= 'z'; c = String.fromCharCode(c.charCodeAt(0) + 1)) {
    yield c;
  }
}

for (const value of alphabet()) {
  console.log(value);
}