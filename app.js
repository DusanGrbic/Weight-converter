const 
input       = document.getElementById('input'),
output      = document.getElementById('output'),
gramsOutput = document.getElementById('grams-output'),
kgOutput    = document.getElementById('kg-output');

output.style.display = 'none';

input.addEventListener('input', () => {
  if (! input.value)
    output.style.display = 'none';
  else 
    output.style.display = 'block';

  const kgs = (input.value / 2.2046).toFixed(2);

  kgOutput.innerHTML = kgs;
  gramsOutput.innerHTML = kgs * 1000;
});

