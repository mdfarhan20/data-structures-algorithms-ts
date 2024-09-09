import { LinkedList } from "./linked-list";

export class Stack<T> {
    private stack: LinkedList<T>;

    constructor() {
        this.stack = new LinkedList();
    }

    push(data: T): void {
        this.stack.insertFirst(data);
    }

    pop(): T | null {
        if (this.stack.getLength() === 0) {
            console.log("Stack is empty!");
            return null;
        }
        const popped = this.stack.deleteFirst();
        return popped ? popped.data : null;
    }

    peek(): T | null {
        const top = this.stack.getHead();
        return top ? top.data : null;
    }

    print(): void {
        let temp = this.stack.getHead();
        if (temp)
            console.log("TOP");
        else
            console.log("Stack is empty!");

        while (temp) {
            console.log(`| ${temp.data} |`);
            temp = temp.next;
        }
    }
}