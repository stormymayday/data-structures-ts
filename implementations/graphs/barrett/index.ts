export default class Graph {
    private adjacencyList: { [key: string]: string[] };

    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex: string): boolean {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
            return true;
        }
        return false;
    }
}
