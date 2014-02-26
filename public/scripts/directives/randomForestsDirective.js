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
      d3.select('.tree').transition().duration(2000)
      .style("opacity", "0")
      .remove();
    };

    window.onblur = function() { 
      if(currentTimeout !== -1){
        window.clearTimeout(currentTimeout);
        currentTimeout = -1;
      }
    };
    window.onfocus = function() {
      treeCycle();
    };
    var currentTimeout = -1;
    var treeCount = 0;
    var treeCycle = function(){
      if(treeCount >= 3){
        removeFirstTree();
        treeCount--;
      }
      currentTimeout = setTimeout(function(){
        currentTimeout = -1;
        makeD3Tree(11);
        treeCount++;
        treeCycle();  
      },3000);
    };
    treeCycle();
  };

  return {
    restrict: "E",
    link: d3svg
  }
});