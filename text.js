class Graph {
    constructor() {
        this.adjancencyList = new Map()
    }

    addVertex(vertex) {
        this.adjancencyList.set(vertex, new Set())
    }

    addEdge(vertex1, vertex2) {
        this.adjancencyList.get(vertex1).add(vertex2)
        this.adjancencyList.get(vertex2).add(vertex1)
    }

    printGraph() {
        let get_keys = this.adjancencyList.keys()
        for (let i of get_keys) {
            let values = this.adjancencyList.get(i)
            var conc = ""

            for (let j of values)
                conc += j + " "

            console.log(i + "->" + conc);
        }
    }

    bfs(startNode) {
        let visited = {}
        let queue = []
        visited[startNode] = true
        queue.push(startNode)
        while (queue.length !== 0) {
            let getQueueElement = queue.shift()
            console.log(getQueueElement);
            let get_list = this.adjancencyList.get(getQueueElement)
            get_list.forEach(i => {
                let neigh = i
                if (!visited[neigh]) {
                    visited[neigh] = true
                    queue.push(neigh)
                }
            });
        }
    }

    dfs(startNode) {
        let  visited = {}
        this.dfsHelper(startNode, visited)
    }

    dfsHelper(vertex, visited) {
        visited[vertex] = true
        console.log(vertex);

        let get_neigh = this.adjancencyList.get(vertex)
        get_neigh.forEach(i => {
            let get_elem = i
            if (!visited[get_elem])
                this.dfsHelper(get_elem, visited)
        });
    }
}


const graph = new Graph()
let vertex = ['A', 'B', 'C', 'D', 'E', 'F']

for (let i = 0; i < vertex.length; i++) {
    graph.addVertex(vertex[i])
}

graph.addEdge("A", "B")
graph.addEdge("A", "D")
graph.addEdge("A", "B")
graph.addEdge("A", "E")
graph.addEdge("B", "C")
graph.addEdge("D", "E")
graph.addEdge("E", "F")
graph.addEdge("E", "C")
graph.addEdge("C", "F")

graph.printGraph()

console.log("bfs");
graph.bfs("A")

console.log("dfs");
graph.dfs("A")














// class Heapify {
//     constructor(arr) {
//         this.arr = arr
//     }

//     swap(array, index1, index2) {
//         let temp = array[index1]
//         array[index1] = array[index2]
//         array[index2] = temp
//     }

//     heapify(arr, index, len) {
//         let left = 2 * index
//         let right = 2 * index + 1
//         let maximum

//         if (right < len) {
//             if (arr[left] >= arr[right])
//                 maximum = left
//             else
//                 maximum = right
//         } else if (left < len) {
//             maximum = left
//         } else {
//             return
//         }

//         if (arr[index] < arr[maximum]) {
//             this.swap(arr, index, maximum)
//             this.heapify(arr, maximum, len)
//         }
//     }

//     sort() {
//         let len = this.arr.length
//         for (let i = (Math.floor(len / 2) - 1); i >= 0; i--)
//             this.heapify(this.arr, i, len)

//         for (let i = len - 1; i >= 0; i--) {
//             this.swap(this.arr, 0, i)
//             this.heapify(this.arr, 0, i)
//         }
//         return this.arr
//     }
// }

// let arr = [3, 5, 7, 2, 6, 0, 8, 3]
// const heap = new Heapify(arr)
// console.log(heap.sort());


// class minHeap {

//     constructor() {
//         this.heap = [null]
//     }

//     insert(num) {
//         this.heap.push(num)
//         if (this.heap.length > 2) {
//             let idx = this.heap.length - 1
//             while (this.heap[idx] < this.heap[Math.floor(idx / 2)]) {
//                 if (idx >= 1) {
//                     [this.heap[Math.floor(idx / 2)], this.heap[idx]] = [this.heap[idx], this.heap[Math.floor(idx / 2)]]
//                     if (Math.floor(idx / 2) > 1) {
//                         idx = Math.floor(idx / 2)
//                     } else {
//                         break
//                     }
//                 }
//             }
//         }
//     }

//     remove() {
//         let smallest = this.heap[1]
//         if (this.heap.length > 2) {
//             this.heap[1] = this.heap[this.heap.length - 1]
//             this.heap.splice(this.heap.length - 1)
//             if (this.heap.length == 3) {
//                 if (this.heap[1] > this.heap[2]) {
//                     [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]]
//                 }
//                 return smallest
//             }
//             let i = 1
//             let left = 2 * i
//             let right = 2 * i + 1
//             while (this.heap[i] >= this.heap[left] || this.heap[i] >= this.heap[right]) {

//                 if (this.heap[left] < this.heap[right]) {
//                     [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]]
//                     i = 2 * i
//                 } else {
//                     [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]]
//                     i = 2 * i + 1
//                 }
//                 left = 2 * i
//                 right = 2 * i + 1
//                 if (this.heap[left] == undefined || this.heap[right] == undefined)
//                     break
//             }
//         } else if (this.heap.length == 2) {
//             this.heap.splice(1, 1)
//         } else {
//             return null
//         }
//         return smallest
//     }
// }
// const heap = new minHeap()
// heap.insert(10)
// heap.insert(8)
// heap.insert(15)
// heap.insert(12)
// heap.insert(13)
// heap.insert(7)
// heap.insert(19)
// heap.insert(4)
// console.log(heap.heap)
// console.log(heap.remove());
// console.log(heap.remove());
// console.log(heap.remove());
// console.log(heap.remove());
// console.log(heap.remove());
// console.log(heap.remove());
// console.log(heap.remove());
// console.log(heap.remove());
// console.log(heap.heap)









// class TrieNode {
// 	constructor() {
// 		this.children = new Map();
// 		this.isEndOfWord = false;
// 	}
// }

// class Trie {
// 	constructor() {
// 		this.root = new TrieNode();
// 	}

// 	insert(word) {
// 		let currentNode = this.root;
// 		for (const char of word) {
// 			if (!currentNode.children.has(char)) {
// 				currentNode.children.set(char, new TrieNode());
// 			}
// 			currentNode = currentNode.children.get(char);
// 		}
// 		currentNode.isEndOfWord = true;
// 	}

// 	delete(word) {
// 		let currentNode = this.root;
// 		const nodeStack = [];
// 		for (const char of word) {
// 			nodeStack.push([currentNode, char]);
// 			if (!currentNode.children.has(char)) {
// 				return false;
// 			}
// 			currentNode = currentNode.children.get(char);
// 		}
// 		if (!currentNode.isEndOfWord) {
// 			return false;
// 		}
// 		currentNode.isEndOfWord = false;
// 		if (currentNode.children.size === 0) {
// 			while (nodeStack.length > 0) {
// 				const [node, char] = nodeStack.pop();
// 				if (node.children.size > 1 || node.isEndOfWord) {
// 					node.children.delete(char);
// 					return true;
// 				}
// 			}
// 			this.root.children.delete(word[0]);
// 		}
// 		return true;
// 	}

// 	display() {
// 		this._displayHelper(this.root, "");
// 	}

// 	_displayHelper(node, prefix) {
// 		if (node.isEndOfWord) {
// 			console.log(prefix);
// 		}
// 		for (const [char, childNode] of node.children) {
// 			this._displayHelper(childNode, prefix + char);
// 		}
// 	}
// }

// const trie = new Trie();
// trie.insert("amal");
// trie.insert("amal vinod");
// trie.insert("adithya");
// trie.insert("adithya vinod");
// console.log("Before deleting:");
// trie.display();
// trie.delete("adithya vinod");
// console.log("After deleting:");
// trie.display();