export default class Graph {
    numberOfNodes: number;
    adjacentList: { [key: string]: string[] };

    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }

    addVertex(node: string): void {
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    }

    addEdge(node1: string, node2: string): void {
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }

    showConnections() {
        const allNodes = Object.keys(this.adjacentList);
        for (const node of allNodes) {
            const nodeConnections = this.adjacentList[node];
            let connections = "";
            let vertex;
            for (vertex of nodeConnections) {
                connections += vertex + " ";
            }
            console.log(node + "-->" + connections);
        }
    }
}
