function insert(num) {
  let numero = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = numero + num
}

function erase() {
  document.getElementById('resultado').innerHTML = '';
}

function back() {
  let back = document.getElementById('resultado').innerHTML
  document.getElementById('resultado').innerHTML = back.substring(0, back.length - 1) 
}

function result() {
  var result = document.getElementById('resultado').innerHTML
  if (result.length > 0) {
    document.getElementById('resultado').innerHTML = eval(result)
  } else {
    document.getElementById('resultado').innerHTML = ''
  }
}