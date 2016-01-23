graphs = {};

graphs.UndirectedGraph = function(){
	this.vertices = [];
	this.adjaceny_matrix = [];
}

graphs.UndirectedGraph.prototype = {
	addVertex:function(vertex){
		var self = this;
		this.vertices.push(vertex);
		this.adjaceny_matrix.push([]);
		this.adjaceny_matrix.forEach(function(row){
			if(row.length==self.adjaceny_matrix.length-1)
				row.push(null);
			else{
				for( var i=0;i<self.adjaceny_matrix.length;i++)
				row.push(null);
			}
		});
	},
	addEdge:function(from,to){
		var indexOfFrom = this.vertices.indexOf(from);
		var indexOfTo = this.vertices.indexOf(to);
		this.adjaceny_matrix[indexOfFrom][indexOfTo] = 1;
		this.adjaceny_matrix[indexOfTo][indexOfFrom] = 1;
	},
	hasEdgeBetween:function(from,to){
		var indexOfFrom = this.vertices.indexOf(from);
		var indexOfTo = this.vertices.indexOf(to);
		return this.adjaceny_matrix[indexOfFrom][indexOfTo];
	}
};

var g = new graphs.UndirectedGraph;
g.addVertex('A');
		g.addVertex('B');
		g.addEdge('A','B');
console.log(g);
module.exports = graphs;


