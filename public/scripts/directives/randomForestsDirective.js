galaxyApp.directive("randomForest", function() {
  var d3svg = function(scope, element, attributes) {
    var number = scope.number;
    var makeD3Tree = function(nodeCount) {
      var m = [20, 120, 20, 0],
      w = window.innerWidth/3.5,
      h = 300,
      i = 0,
      root;

      var tree = d3.layout.tree()
      .size([h, w]);

      var diagonal = d3.svg.diagonal()
      .projection(function(d) { return [d.x, d.y]; });

      var vis = d3.select(element[0]).append("svg")
      .attr("width", w)
      .attr("height", h)
      .attr("class", "tree")
      .append("svg:g")
      .attr("transform", "translate(" + m[3] + "," + m[0] + ")");

      root = buildTree(nodeCount);
      root.x0 = h/2;
      root.y0 = 0;

      var duration = d3.event && d3.event.altKey ? 5000 : 500;

      // Compute the new tree layout.
      var nodes = tree.nodes(root).reverse();

      // Normalize for fixed-depth.
      nodes.forEach(function(d) { 
        d.y = d.depth * 50;
      });

      // Update the nodes…
      var node = vis.selectAll("g.node")
      .data(nodes, function(d) { return d.id || (d.id = ++i); });

      // Enter any new nodes at the parent's previous position.
      var nodeEnter = node.enter().append("svg:g")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + root.x0 + "," + root.y0 + ")"; });

      nodeEnter.append("svg:circle")
        .attr("r", 1e-6);

      nodeEnter.select("circle")
          .attr("r", 10)
          .transition().delay(2000).duration(1000)
            .style("fill", function(d){
              if(d.depth === 0) {
                return "url(#image2)"
              }
            });
            setTimeout(function() {
              nodeEnter.select("circle").transition().duration(300)
                .style("fill", function(d){
                  if(d.depth === 1) {
                    return "url(#image2)"
                  }
                })
              }, 5000)
            setTimeout(function() {
              nodeEnter.select("circle").transition().duration(300)
                .style("fill", function(d){
                  if(d.depth === 2) {
                    return "url(#image2)"
                  }
                })
              }, 7000)
            setTimeout(function() {
              nodeEnter.select("circle").transition().duration(300)
                .style("fill", function(d){
                  if(d.depth === 3) {
                    return "url(#image2)"
                  }
                })
              }, 9000)
            setTimeout(function() {
              nodeEnter.select("circle").transition().duration(1000)
                .style("fill", function(d){
                  if(d.depth === 4) {
                    return "url(#image2)"
                  }
                })
              }, 11000)


      nodeEnter.append("svg:text")
      .attr("x", function(d) { return d.children || d._children ? -10 : 10; })
      .attr("dy", ".35em")
      .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
      .style("fill-opacity", 1e-6);

      // Transition nodes to their new position.
      var nodeUpdate = node.transition()
      .duration(duration)
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });



      // Transition exiting nodes to the parent's new position.
      var nodeExit = node.exit().transition()
      .duration(duration)
      .attr("transform", function(d) { return "translate(" + root.x + "," + root.y + ")"; })
      .remove();

      nodeExit.select("circle")
      .attr("r", 1e-6)

      nodeExit.select("text")
      .style("fill-opacity", 1e-6);

      // Update the links…
      var link = vis.selectAll("path.link")
      .data(tree.links(nodes), function(d) { return d.target.id; });

      // Enter any new links at the parent's previous position.
      link.enter().insert("svg:path", "g")
      .attr("class", "link")
      .attr("d", function(d) {
        var o = {x: root.x0, y: root.y0};
        return diagonal({source: o, target: o});
      })
      .transition()
      .duration(duration)
      .attr("d", diagonal);

      // Transition links to their new position.
      link.transition()
      .duration(duration)
      .attr("d", diagonal);

      // Transition exiting nodes to the parent's new position.
      link.exit().transition()
      .duration(duration)
      .attr("d", function(d) {
        var o = {x: root.x, y: root.y};
        return diagonal({source: o, target: o});
      })
      .remove();

      // Stash the old positions for transition.
      nodes.forEach(function(d) {
        d.x0 = d.x;
        d.y0 = d.y;
      });

      // Toggle children.
      function toggle(d) {
        if (d.children) {
          d._children = d.children;
          d.children = null;
        } else {
          d.children = d._children;
          d._children = null;
        }
      }
    }
    for(var i = 0; i < 6; i++) {
      makeD3Tree(11);
    }
  };

  return {
    restrict: "E",
    link: d3svg
  }
});