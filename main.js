var g = {};
g.x = 0;
g.open = true;
g.right = true;
g.pre = undefined;
g.str = '';
g.kisses = [];
g.poops = [];

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('touchstart', (event) => {
    if (g.right) g.kisses.unshift([g.x, 0]);
    if (!g.right) g.poops.unshift([g.x, 0]);
  });
  document.addEventListener('keypress', (event) => {
    if (['k','K','p','P'].includes(event.key)) {
      if (g.right) g.kisses.unshift([g.x, 0]);
      if (!g.right) g.poops.unshift([g.x, 0]);
    }
  });
  g.pre = document.getElementById('animation');
  window.setInterval( () => {
    g.str = '\n';
    // draw the giraffe head
    if (g.right) {
      g.str += ' '.repeat(g.x+2);
      if (g.open) {
        g.str += '^^=<';
      } else {
        g.str += '^^==';
      }
      // draw the kisses
      var curX = g.x+6;
      for (var i=0; i<g.kisses.length; i++) {
        var bump = g.kisses[i][1];
        if (i>0) bump = bump - g.kisses[i-1][1];
        if (bump>0) g.str += ' '.repeat(bump);
        if (g.kisses[i][1]) {
          g.str += '<3';
        } else {
          g.str += '3';
        }
      }
    } else {
      g.str += ' '.repeat(g.x);
      if (g.open) {
        g.str += '>=^^';
      } else {
        g.str += '==^^';
      }
    }
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
    g.str += '[===]';
    for (var i=0; i<g.poops.length; i++) {
      if (g.poops[i][1] === 0) g.str += '3';
    }
    g.str += '\n';

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
    if (!g.right) {
      var curX = g.x+5;
      for (var i=0; i<g.poops.length; i++) {
        var bump = g.poops[i][0]+5-curX;
        curX = curX + bump;
        //if (i>0) bump = bump - g.kisses[i-1][1];
        if (bump>0) g.str += ' '.repeat(bump);
        if (g.poops[i][1] < 0) g.str += '<3';
      }
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

    // scoot the kisses and poops
    g.kisses = g.kisses.filter((k) => {
      return ( (k[0]+k[1]) < 32 );
    });
    for (var i=0; i<g.kisses.length; i++) {
      g.kisses[i][1] += 2;
    }
    g.poops = g.poops.filter((k) => {
      return k[1] > -4;
    });
    for (var i=0; i<g.poops.length; i++) {
      g.poops[i][1] -= 1;
    }

  }, 150)
})
