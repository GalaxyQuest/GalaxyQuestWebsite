function(){
  var Tree = function(name){
    this.children = [];
    this.name = name || "";
  };

  var rand = function(max){
    return Math.floor((Math.random()*max)+1);
  }

  Tree.prototype.addChild = function(child){
    if(child === null){
      return null;
    }
    this.children.push(child);
    return child;
  };

  var buildTree = function(nodeCount){
    var result = new Tree();
      nodeCount--;
    var innerFun = function(tree){
      var leftCount = rand(nodeCount);
      var rightCount = Math.abs(leftCount-nodeCount);
      leftCount > 0 && tree.addChild(buildTree(leftCount));
      rightCount > 0 && tree.addChild(buildTree(rightCount));
    };
    if(nodeCount > 1){
        innerFun(result);
    }
    return result;
  };

  return function(treeCount, nodeCount){
    var trees = [];
    for (var i = 0; i < treeCount; i++) {
      trees.push(buildTree(nodeCount));
    };
    return trees;
  };
}();