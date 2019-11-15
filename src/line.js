import {select, selectAll} from 'd3-selection';

const d3 = {
    select, selectAll
}

let constant = x => () => x;

export function Line() {
    let x1 = 10,
        x2 = 10,
        y1 = 20,
        y2 = 20


    function my(selection) {
        console.log(selection);
        selection.each(function(d, i) {
            d3.select(this).append("line")
                .classed("line", true)
                .attr("x1", x1)
                .attr("x2", x2)
                .attr("y1", y1)
                .attr("y2", y2)
        })
    }

    my.x1 = function(_) {
        return arguments.length ? (x1 = typeof _ === "function" ? _ : constant(+_), my) : x1;
    };

    my.x2 = function(_) {
        return arguments.length ? (x2 = typeof _ === "function" ? _ : constant(+_), my) : x2;
    };

    my.y1 = function(_) {
        return arguments.length ? (y1 = typeof _ === "function" ? _ : constant(+_), my) : y1;
    };

    my.y2 = function(_) {
        return arguments.length ? (y2 = typeof _ === "function" ? _ : constant(+_), my) : y2;
    };


    return my;
};


