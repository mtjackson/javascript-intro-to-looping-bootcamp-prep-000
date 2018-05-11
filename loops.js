function forLoop(array) {
  for (i = 0; i < 25; i++) {
    array.push("I am "+ i +" strange loops.");
    return array;
  }
}

function whileLoop(n) {
  while(n > 0) {
    console.log(--n);
  } if (n === 0) {
    return 'done';
  }
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5;
  } do {
    --array;
    return array;
  } while (array.length > 0 && maybeTrue());
}
