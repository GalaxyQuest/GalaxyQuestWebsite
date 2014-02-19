var Tree = function(name){
  this.children = [];
  this.name = name || "";
};

var randomOdd = function(max){
  var result = Math.floor((Math.random()*max)+1);
  if(result%2 === 0){
    return result-1;
  }else{
    return result;
  }
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
    var leftCount = randomOdd(nodeCount-1);
    console.log('left:',leftCount);
    var rightCount = nodeCount-leftCount;
    console.log('right',rightCount);
    leftCount > 0 && tree.addChild(buildTree(leftCount));
    rightCount > 0 && tree.addChild(buildTree(rightCount));
  };
  if(nodeCount > 1){
    innerFun(result);
  }
  return result;
};
