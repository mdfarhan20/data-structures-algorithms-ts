class Node<T> {
  public data: T;
  public next: Node<T> | null;

  constructor(data: T, next: Node<T> | null = null) {
    this.data = data;
    this.next = next;
  }
}

export class LinkedList<T> {
  private head: Node<T> | null;
  private tail: Node<T> | null;
  private length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insertFirst(data: T): void {
    const node = new Node<T>(data);
    this.length++;

    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }
    node.next = this.head;
    this.head = node;
  }

  insertLast(data: T): void {
    if (!this.tail) 
      return this.insertFirst(data);

    const node = new Node<T>(data);
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  insert(data: T, index: number): void {
    if (index < 0 || index > this.length) 
      throw new Error("Invalid index");
    
    if (index === 0) return this.insertFirst(data);
    if (index === this.length) return this.insertLast(data);

    let temp = this.head, i = 0;
    while (temp && i < index - 1) {
      temp = temp.next;
      i++;
    }

    if (temp) {
      const node = new Node<T>(data, temp.next);
      temp.next = node;
      this.length++;
    }
  }

  deleteFirst(): Node<T> | null {
    if (!this.head) return null;
    
    const deleted = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    this.length--;
    return deleted;
  }

  deleteLast(): Node<T> | null {
    if (!this.head) return null;
    if (this.length <= 1) return this.deleteFirst();

    let temp = this.head;
    while (temp.next && temp.next.next) {
      temp = temp.next;
    }

    const deleted = this.tail;
    if (temp.next) {
      this.tail = temp;
      temp.next = null;
    }

    this.length--;
    return deleted;
  }

  delete(index: number): Node<T> | null {
    if (index === 0) return this.deleteFirst();
    if (index === this.length - 1) return this.deleteLast();

    let temp = this.head, i = 0;
    while (temp && temp.next && i < index - 1) {
      temp = temp.next;
      i++;
    }

    const deleted = temp?.next ?? null;
    if (temp && deleted) {
      temp.next = deleted.next;
      deleted.next = null;
      this.length--;
    }

    return deleted;
  }

  print(): void {
    let temp = this.head;
    let list = '';

    while (temp) {
      list += `${temp.data} -> `;
      temp = temp.next;
    }

    list += "NULL";
    console.log(list);
  }
}