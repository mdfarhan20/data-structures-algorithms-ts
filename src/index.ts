import { DoublyLinkedList } from "./data-structures/linked-lists/doubly-linked-list";


const list = new DoublyLinkedList<string>();

list.insertLast("Hello");
list.insertLast("Say");
list.insertFirst("World!");
list.print();

list.insert("New", 3);
list.delete(3)
list.print();