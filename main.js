function scrollingText(text){
    text = text.toUpperCase()
    return text.split('').map((el, i) => text.slice(i) + text.slice(0,i))
  }


console.log(scrollingText('codewars')) // => ['CODEWARS','ODEWARSC', 'DEWARSCO', 'EWARSCOD', 'WARSCODE', 'ARSCODEW', 'RSCODEWA', 'SCODEWAR']
console.log(scrollingText('hello, everyone!')) // => ['HELLO, EVERYONE!', 'ELLO, EVERYONE!H','LLO, EVERYONE!HE', 'LO, EVERYONE!HEL','O, EVERYONE!HELL', ', EVERYONE!HELLO',' EVERYONE!HELLO,', 'EVERYONE!HELLO, ','VERYONE!HELLO, E', 'ERYONE!HELLO, EV','RYONE!HELLO, EVE', 'YONE!HELLO, EVER','ONE!HELLO, EVERY', 'NE!HELLO, EVERYO','E!HELLO, EVERYON', '!HELLO, EVERYONE']