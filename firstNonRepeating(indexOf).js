function firstNonRepeating(str){
  for (var i = 0; i < str.length; i++) {
    let c =str.charAt(i);
    if (str.indexOf(c) == i && str.indexOf(c,i+1) == -1) {
      return c;

    }
  }
  return null;
}
