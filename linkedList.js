class Node {
    constructor(value, prev, next) {
        this.value = value;
        this.prev = prev || null;
        this.next = next || null;
    }
}

class linkedList {
    constructor() {
        this.head = this.tail = null;
    }

    //add to end of the list
    append(value) {
        if (!this.tail) {
            this.head = this.tail = new Node(value)
        } else {
            let oldTail = this.tail;
            this.tail = new Node(value);
            oldTail.next = this.tail;
            this.tail.prev = oldTail;
        }
    }

    //add to first of the list
    prepend(value) {
        if (!this.head) {
            this.head = this.tail = null;
        } else {
            let oldHead = this.head;
            this.head = new Node(value);
            oldHead.prev = this.head;
            this.head.next = oldHead
        }
    }

    //delete head
    deleteHead() {
        if (!this.head) {
            return null;
        } else {
            let removedHead = this.head;

            if (this.head === this.tail) {
                this.head = this.tail = null;
            } else {
                this.head = this.head.next;
                this.head.prev = null;
            }

            return removedHead;
        }
    }

    //delete tail
    deleteTail() {
        if (!this.tail) {
            return null
        } else {
            let removedTail = this.tail;

            if (this.tail === this.head) {
                this.head = this.tail = null;
            } else {
                this.tail = this.tail.prev;
                this.tail.next = null;
            }

            return removedTail;
        }
    }

    //search by value
    search(value) {
        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.value === value) {
                console.log(currentNode)
                // return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null
    }

    insertAt(value, index){
        if (index < 0) {
            return null
        } else if (index === 0) {
            this.prepend(value);
        } else {
            let previousNode;
            let currentNode = this.head;
            let currentIndex = 0;
            let node = new Node(value);

            while (currentIndex < index) {
                previousNode = currentNode;
                currentIndex++;
                currentNode = currentNode.next;
            }
            node.next = currentNode;
            node.prev = previousNode;
            previousNode.next = node;
        }
    }

    getAt2(index){
        if (index === 0) {
            return this.head;
        } else {
            let currentNode = this.head;
            let count = 0;

            while (currentNode) {
                if (count == index) {
                    console.log(currentNode.value);
                    break;
                    // return this.head;
                }
                count++;
                currentNode = currentNode.next;
            }
        }
    }

    removedAt2(index){
        if (index === 0) {
            return this.head =this.head.next;
        } else {
            let currentNode = this.head;
            let count = 0;
            let previousNode;
            while (count < index) {
                previousNode = currentNode;
                currentNode = currentNode.next;
                count++;
            }
            // currentNode = currentNode.next;
            previousNode.next = currentNode.next
            console.log(currentNode.value)
        }
    }

    clearList(){
        return this.head = this.tail = null;
    }

    printListData() {
        let current = this.head;
        console.log(typeof (current))
        while (current) {
            console.log(current);
            current = current.next;
        }
    }
}

let ll = new linkedList();
ll.append(10);
ll.append(20);
ll.append(30);
ll.append(40);

ll.prepend(0);
ll.insertAt(50, 2)
ll.getAt2(2)

ll.removedAt2(3);

ll.deleteHead();
ll.deleteTail();

ll.search(50)
// ll.clearList();
ll.printListData()
console.log(ll);