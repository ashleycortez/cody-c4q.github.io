var g = {};
g.x = 0;
g.open = true;
g.right = true;
g.pre = undefined;
g.str = '';
g.kisses = [];

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('keypress', (event) => {
    if (event.key === 'k') {
      g.kisses.push([g.x, g.right]);
    }
  });
  g.pre = document.getElementById('animation');
  window.setInterval( () => {
    g.str = '\n';
    // draw the giraffe head
    var headArr = Array(32);
    for (var i=0; i<headArr.length; i++) {
      headArr[i] = ' ';
    }
    for (var i=0; i<g.kisses.length; i++) {
      if (g.kisses[i][1]) {
        headArr[g.kisses[i][0]] = '<';
        headArr[g.kisses[i][0]+1] = '3';
      } else {
        headArr[g.kisses[i][0]] = 'є';
        headArr[g.kisses[i][0]-1] = '<';
      }
    }
    /*
    if (g.right) {
      g.str += ' '.repeat(g.x+2);
      if (g.open) {
        g.str += '^^=<';
      } else {
        g.str += '^^==';
      }
    } else {
      g.str += ' '.repeat(g.x);
      if (g.open) {
        g.str += '>=^^';
      } else {
        g.str += '==^^';
      }
    }
    */
    g.str += headArr.join('');
    g.str += '\n';
    
    // draw the giraffe neck
    g.str += ' '.repeat(g.x+2);
    g.str += '||\n';
    g.str += ' '.repeat(g.x+2);
    g.str += '||\n';
    g.str += ' '.repeat(g.x+2);
    g.str += '||\n';

    // draw the giraffe body
    if (!g.right) g.str += ' ';
    g.str += ' '.repeat(g.x);
    g.str += '[===]\n';

    // draw the giraffe feet
    if (!g.right) g.str += ' ';
    g.str += ' '.repeat(g.x);
    if (g.right && g.open) {
      g.str += '|\\ |\\';
    } else if (!g.right && g.open) {
      g.str += '/| /|';
    } else {
      g.str += '|| ||';
    }

    // draw the element
    g.pre.innerText = g.str;
    
    // does the giraffe turn around?
    if (g.right && g.x >= 32) g.right = false;
    if (!g.right && g.x <= 0) g.right = true;

    // open / close
    g.open = g.open ? false : true;

    // scoot the giraffe
    g.x = g.right ? g.x + 1 : g.x - 1;

    // scoot the kisses
    for (var i=0; i<g.kisses.length; i++) {
      if (g.kisses[i][1]) {
        g.kisses[i][0] += 2;
      } else {
        g.kisses[i][0] -= 2;
      }
    }
    g.kisses = g.kisses.filter((x) => {
      return (x[0] >0 && x[0] <32)
    })
    if (g.kisses.length > 0) console.log(g.kisses);

  }, 150)
})
