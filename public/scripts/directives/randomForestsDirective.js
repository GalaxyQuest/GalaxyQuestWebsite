galaxyApp.directive("randomForest", function() {
  var d3svg = function(scope, element, attributes) {
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
      nodes.forEach(function(d) { d.y = d.depth * 50; });

      // Update the nodes…
      var node = vis.selectAll("g.node")
      .data(nodes, function(d) { return d.id || (d.id = ++i); });

      // Enter any new nodes at the parent's previous position.
      var nodeEnter = node.enter().append("svg:g")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + root.x0 + "," + root.y0 + ")"; });

      nodeEnter.append("svg:circle")
      .attr("r", 1e-6);

      // Transition nodes to their new position.
      var nodeUpdate = node.transition()
      .duration(duration)
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

      nodeUpdate.select("circle")
      .attr("r", 4.5)

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
    };

    var removeFirstTree = function(){
      d3.select('.tree').transition().duration(2500)
      .style("opacity", "0")
      .remove();
    };


  window.onblur = function() { window.blurred = true; };
  window.onfocus = function() { window.blurred = false; };

    var makeNTrees = function(n){
      if(n===0){
        if(window.blurred) {
          window.clearTimeout();
          return;
        } 
        if(!window.blurred) {
          removeFirstTree();
          makeNTrees(1);
          return;
        }
        
      }
      setTimeout(function(){
        makeD3Tree(11);
        makeNTrees(n-1);
      },3000);
    };

    setTimeout(function(){
      makeD3Tree(11);
      makeNTrees(2);
    }, 1000);
  };

  return {
    restrict: "E",
    link: d3svg
  }
});