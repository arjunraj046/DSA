// class Graph {
//     constructor() {
//         this.adjancencyList = new Map()
//     }

//     addVertex(vertex) {
//         this.adjancencyList.set(vertex, new Set())
//     }

//     addEdge(vertex1, vertex2) {
//         this.adjancencyList.get(vertex1).add(vertex2)
//         this.adjancencyList.get(vertex2).add(vertex1)
//     }

//     printGraph() {
//         let get_keys = this.adjancencyList.keys()

//         for (let i of get_keys) {
//             let values = this.adjancencyList.get(i)
//             var conc = ""

//             for (let j of values)
//                 conc += j + " "

//             console.log(i + "->" + conc);
//         }
//     }

//     // bfs(startNode) {
//     //     let visited = {}
//     //     let queue = []
//     //     visited[startNode] = true
//     //     queue.push(startNode)
//     //     while (queue.length !== 0) {
//     //         let getQueueElement = queue.shift()
//     //         console.log(getQueueElement);
//     //         let get_list = this.adjancencyList.get(getQueueElement)
//     //         get_list.forEach(i => {
//     //             let neigh = i
//     //             if (!visited[neigh]) {
//     //                 visited[neigh] = true
//     //                 queue.push(neigh)
//     //             }
//     //         });
//     //     }
//     // }

//     // dfs(startNode) {
//     //     let  visited = {}
//     //     this.dfsHelper(startNode, visited)
//     // }

//     // dfsHelper(vertex, visited) {
//     //     visited[vertex] = true
//     //     console.log(vertex);

//     //     let get_neigh = this.adjancencyList.get(vertex)
//     //     get_neigh.forEach(i => {
//     //         let get_elem = i
//     //         if (!visited[get_elem])
//     //             this.dfsHelper(get_elem, visited)
//     //     });
//     // }
// }

// const graph = new Graph()
// let vertex = ['A', 'B', 'C', 'D', 'E', 'F']

// for (let i = 0; i < vertex.length; i++) {
//     graph.addVertex(vertex[i])
// }

// graph.addEdge("A", "B")
// graph.addEdge("A", "D")
// graph.addEdge("A", "B")
// graph.addEdge("A", "E")
// graph.addEdge("B", "C")
// graph.addEdge("D", "E")
// graph.addEdge("E", "F")
// graph.addEdge("E", "C")
// graph.addEdge("C", "F")

// graph.printGraph()

// console.log("bfs");
// graph.bfs("A")

// console.log("dfs");
// graph.dfs("A")

class Graph {
  constructor() {
    this.list = new Map();
  }
  addvertix(v) {
    this.list.set(v, new Set());
  }
  addedge(v1, v2) {
    this.list.get(v1).add(v2);
    this.list.get(v2).add(v1);
  }
  print() {
    let keys = this.list.keys();
    for (let i of keys) {
      let value = this.list.get(i);
      var con = "";
      for (const j of value) {
        con += j + " ";
      }
      console.log(i+"-->"+con);
    }
  }
}

const graph = new Graph();

graph.addvertix("A");
graph.addvertix("B");
graph.addvertix("C");

graph.addedge("A", "C");
graph.addedge("B", "C");

graph.print()