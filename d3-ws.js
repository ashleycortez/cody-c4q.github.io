var x, b
document.addEventListener('DOMContentLoaded', function() {
  x = d3.select('#me-me-me')
  x.style('height', '10em')
  x.style('width', '10em')
  x.style('background-color', '#FF0')
  x.attr('href', 'http://google.com')
  x.append('input')
    .attr('type', 'button')
    .attr('value', 'Awesome Cody Button')
    .attr('id', 'acb')
  x.style('color', 'blue')
  x.style('border', '1px solid black')

  // circle bits
  d3.select('#circle-chillin')
  .append('svg')
  .attr('height', '500px')
  .attr('width', '500px')
  .attr('id', 'circle-svg')
  d3.select('#circle-svg')
  .append('circle')
  .attr('r', 12)
  .attr('cx', 50)
  .attr('cy', 50)
  d3.select('#circle-svg')
  .append('circle')
  .attr('r', 12)
  .attr('cx', 100)
  .attr('cy', 50)
  for (var i=50; i<100; i+=10) {
    d3.select('#circle-svg')
    .append('line')
    .attr('stroke', 'black')
    .attr('stroke-width', 5)
    .attr('x1', i)
    .attr('x2', i+10)
    .attr('y1', (i/10)%2===1 ? 90: 100)
    .attr('y2', (i/10)%2===0 ? 90: 100)
  }
  /*
  d3.select('#circle-svg')
  .transition()
  .style('margin-left', '50%')
  */
  var l = false
  var c = 1
  window.setInterval(function(){
    l = l===false ? true : false
    if (l) {
      d3.select('#circle-svg')
      .transition()
      .style('margin-left', '70%')
    } else {
      d3.select('#circle-svg')
      .transition()
      .style('margin-left', '10%')
    }
    if (c%12 === 0) {
      d3.select('body')
      .style('background-color', 'green')
    } else if (c%4 === 0) {
      d3.select('body')
      .style('background-color', 'red')
    } else {
      d3.select('body')
      .style('background-color', 'white')
    }
    c++
  }, 750)
})
