import {select, selectAll} from 'd3-selection';
import {Line} from './line.js';

var width = 1024;
var height = 768;

const d3 = {select, selectAll}

var svg = d3.selectAll("#viz")
    .append("svg")
        .attr("width", width)
        .attr("height", height)

var line = Line()
    .x1(0)
    .x2(500)
    .y1(0)
    .y2(500)

svg.call(line);
