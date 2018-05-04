var disp = document.getElementById('disp');

function screen(x) {
  disp.value += x;
  if (x === 'c') {
    disp.value = '';
  }
}

function equals() {
  x = disp.value
  x = eval(x);
  disp.value = x;
}

function power() {
  x = disp.value
  x = Math.pow(x, 2);
  disp.value = x;
  }

function back() {
  var val = disp.value;
  var box = val.length-1;
  var clear = val.substring(0, box);
  disp.value = clear;
}