function receivesAFunction (cb) {
cb();
}

function returnsANamedFunction () {
  return function hello (){
    return 'whatsup';
  }
}

function returnsAnAnonymousFunction () {
  return function (){
    return 'whatsup';
  }
}