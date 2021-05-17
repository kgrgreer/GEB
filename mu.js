var theorems = {
};

var rules = [
  function(s) {
    var a = [];
    for ( var i = 1 ; i <= s.length-3 ; i++ )
      if ( s.substring(i,i+3) == 'III' ) a.push(s.substring(0,i) + 'U' + s.substring(i+3));
    return a;
  },
  function(s) {
    var a = [];
    for ( var i = 1 ; i <= s.length-2 ; i++ )
      if ( s.substring(i,i+2) == 'UU' ) a.push(s.substring(0,i) + s.substring(i+2));
    return a;
  },
  function(s) {
//    if ( s.endsWith('I') ) return [s + 'U'];
    if ( s.substring(s.length-1) == 'I' ) return [s + 'U'];
    return [];
  },
  function(s) {
    return [ 'M' + s.substring(1) + s.substring(1) ];
  },
];

var q = ['MI'];

function derive() {
  var q2 = [...q];
  q = [];
  for ( var t of q2 ) {
//    console.log('theorem', t);
    for ( var rule of rules ) {
      var ds = rule(t);
      for ( var d of ds ) {
        if ( theorems[d] || d.length > 10 ) continue;
        console.log(t, '->', d);
        if ( d == 'MUUI' ) {
          console.log('done');
          process.exit();
        }
        q.push(d);
        theorems[d] = t;
      }
    }
  }
}

for ( var i = 0 ; i < 20 ; i++ ) {
  derive();
}
