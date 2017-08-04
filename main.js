var g = {};
g.x = 0;
g.open = true;
g.right = true;
g.pre = undefined;
g.str = '';

document.addEventListener('DOMContentLoaded', () => {
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

    // scoot
    g.x = g.right ? g.x + 1 : g.x - 1;

  }, 150)
})
