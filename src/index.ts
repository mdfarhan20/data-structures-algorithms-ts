import { LinkedList } from "./data-structures/linked-list";

const list = new LinkedList<number>();

list.print();
list.insertLast(1);
list.insertLast(2);
list.insertFirst(3);
list.insert(10, 0);
list.delete(1);
list.print();