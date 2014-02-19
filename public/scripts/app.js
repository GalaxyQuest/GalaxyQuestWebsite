angular.module('galaxyApp', ['ngRoute'])

  .config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: '../views/mainindex.html',
        controller: 'FrameController'
      })
      .when('/galaxyclass', {
        templateUrl: '../views/partials/galaxyclass.html',
        controller: 'GalaxyClassController'
      })
      .when('/contact', {
        templateUrl: '../views/partials/contact.html',
        controller: 'ContactController'
      })      
      .when('/algorithms', {
        templateUrl: '../views/partials/algorithms.html',
        controller: 'AlgorithmsController'
      })      
      .when('/scatter', {
        templateUrl: '../views/partials/scatter.html',
        controller: 'ScatterController'
      })
      .when('/mlintro', {
        templateUrl: '../views/partials/mlintro.html',
        controller: 'MLIntroController'
      })
      .when('/randomForests', {
        templateUrl: '../views/partials/randomForests.html',
        controller: 'RandomForestsController'
      })
      .when('/neuralNet', {
        templateUrl: '../views/partials/neuralnet.html',
        controller: 'NeuralNetController'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  .controller('FrameController', function($scope) {
  })
  .controller('MainController', function($scope) {
  })
  .controller('ContactController', function($scope) {
  })
  .controller('GalaxyClassController', function($scope) {
  })
  .controller('AlgorithmsController', function($scope) {
  })
  .controller('ScatterController', function($scope) {
  })
  .controller('NeuralNetController', function($scope) {
  })
  .controller('RandomForestsController', function($scope) {
  })
  .directive("randomForest", function() {

  var d3svg = function(scope, element, attributes) {

    var number = scope.number;
    var treeArray = [
      function() {
      console.log(scope.number)

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
                .append("svg:g")
                .attr("transform", "translate(" + m[3] + "," + m[0] + ")");
            
            // var treeinfo = ["../views/treejson.json", "../views/treejson2.json","../views/treejson3.json", "../views/treejson4.json"]; 
            // var pick = Math.floor(Math.random() * treeinfo.length);
            // console.log(treeinfo[pick])
            // d3.json(treeinfo[pick], function(json) {
            //   root = json;
            //   root.x0 = h / 2;
            //   root.y0 = 0;
            //   update(root);
            // });
            root = buildTree(16);
            root.x0 = h/2;
            root.y0 = 0;
            update(root);

            function update(source) {
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
                  .attr("transform", function(d) { return "translate(" + source.x0 + "," + source.y0 + ")"; })
                  .on("click", function(d) { toggle(d); update(d); })

              nodeEnter.append("svg:circle")
                  .attr("r", 1e-6)
                  .on("click", function() {
                      d3.select(this).style("fill", "lightsteelblue");
                      d3.select(this).style("fill", "lightsteelblue");

                      console.log(tree.nodes(this.__data__.parent))
                  });

              nodeEnter.append("svg:text")
                  .attr("x", function(d) { return d.children || d._children ? -10 : 10; })
                  .attr("dy", ".35em")
                  .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
                  .text(function(d) { return d.name; })
                  .style("fill-opacity", 1e-6);

              // Transition nodes to their new position.
              var nodeUpdate = node.transition()
                  .duration(duration)
                  .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

              nodeUpdate.select("circle")
                  .attr("r", 4.5)

              nodeUpdate.select("text")
                  .style("fill-opacity", 1);

              // Transition exiting nodes to the parent's new position.
              var nodeExit = node.exit().transition()
                  .duration(duration)
                  .attr("transform", function(d) { return "translate(" + source.x + "," + source.y + ")"; })
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
                    var o = {x: source.x0, y: source.y0};
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
                    var o = {x: source.x, y: source.y};
                    return diagonal({source: o, target: o});
                  })
                  .remove();

              // Stash the old positions for transition.
              nodes.forEach(function(d) {
                d.x0 = d.x;
                d.y0 = d.y;
              });
            }

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
          ]

    scope.$watch("number", function() {
      d3.selectAll("svg")
        .remove()
      for(var i = 0; i < scope.number; i++) {
        treeArray[0]();
      }


        }, true);
  };

  return {
    restrict: "E",
    link: d3svg
  }
});

