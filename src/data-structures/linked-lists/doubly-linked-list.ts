class Node<T> {
  public data: T;
  public next: Node<T> | null;
  public prev: Node<T> | null;

  constructor(data: T, next: Node<T> | null = null, prev: Node<T> | null = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

export class DoublyLinkedList<T> {
  private head: Node<T> | null;
  private tail: Node<T> | null;
  private length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insertFirst(data: T): void {
    this.length++;
    const node = new Node<T>(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }

  insertLast(data: T): void {
    if (!this.tail) return this.insertFirst(data);
    const node = new Node<T>(data);

    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
    this.length++;
  }

  insert(data: T, index: number): void {
    if (index <= 0) return this.insertFirst(data);
    if (index >= this.length) return this.insertLast(data);

    let temp = this.head, i = 0;
    while (temp && temp.next && i < index - 1) {
      temp = temp.next;
      i++;
    }

    const node = new Node(data);
    node.next = temp?.next ?? null;
    node.prev = temp;
    
    if (temp?.next) {
      temp.next.prev = node;
      temp.next = node;
    }

    this.length++;
  }

  deleteFirst(): T | null {
    if (!this.head) return null;
    
    const next = this.head.next;
    const deleted = this.head.data;

    if (next) next.prev = null;
    this.head = next;
    this.length--;

    return deleted;
  }

  deleteLast(): T | null {
    if (!this.tail) return null;

    const deleted = this.tail.data;
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;
    this.length--;

    return deleted;
  }

  delete(index: number): T | null {
    if (index === 0) return this.deleteFirst();
    if (index === this.length - 1) return this.deleteLast();

    let temp = this.head, i = 0;
    while (temp && i < index) {
      temp = temp.next;
      i++;
    }

    if (temp && temp.prev) {
      temp.prev.next = temp.next;
      if (temp.next)
        temp.next.prev = temp.prev;
    }
    return temp?.data ?? null;
  }

  print(): void {
    if (this.length === 0) {
      console.log("List is empty!");
      return;
    }

    let temp = this.head, list = '';
    while (temp) {
      list += `${temp.data} <-> `;
      temp = temp.next;
    }

    console.log(list + 'NULL');
  }
} 