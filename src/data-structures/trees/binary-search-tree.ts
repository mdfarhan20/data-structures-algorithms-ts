
class Node<T> {
  data: T;
  left: Node<T> | null;
  right: Node<T> | null;

  constructor(data: T) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}


export class BinarySearchTree<T> {
  root: Node<T> | null;

  constructor() {
    this.root = null;
  }

  insert(data: T) {
    const node = new Node<T>(data);
    this.root = this.insertHelper(this.root, node);
  }

  private insertHelper(root: Node<T> | null, node: Node<T>): Node<T> | null {
    if (root === null) {
      return node;
    }
    
    const data = root.data;
    if (data > node.data) {
      root.left = this.insertHelper(root.left, node);
    } else if (data < node.data) {
      root.right = this.insertHelper(root.right, node);
    }

    return root;
  }


  delete(data: T) {
    this.root = this.deleteHelper(this.root, data);
  }

  private deleteHelper(root: Node<T> | null, data: T): Node<T> | null {
    if (root === null) {
      return null;
    }

    if (root.data > data) {
      root.left = this.deleteHelper(root.left, data);
    } else if (root.data < data) {
      root.right = this.deleteHelper(root.right, data);
    } else {
      if (root.left === null && root.right === null) {
        root = null;
      } else if (root.left != null) {
        root.data = this.predecessor(root);
        root.left = this.deleteHelper(root.left, root.data);
      } else {
        root.data = this.successor(root);
        root.right = this.deleteHelper(root.right, root.data);
      }
    }

    return root;
  }


  private successor(node: Node<T>) {
    let temp = node.right as Node<T>;
    while (temp.left !== null) {
      temp = temp.left;
    }

    return temp.data;
  }

  private predecessor(node: Node<T>) {
    let temp = node.left as Node<T>;
    while (temp.right !== null) {
      temp = temp.right;
    }

    return temp.data;
  }

  display() {
    this.displayHelper(this.root, "", true)
  }

  private displayHelper(current: Node<T> | null, starting: string, end: boolean) {
    if (current !== null) {
      process.stdout.write(starting);

      if (end) {
        process.stdout.write("R----");
        starting += "     "
      } else {
        process.stdout.write("L----")
        starting += "|     "
      }

      process.stdout.write(current.data + "\n");
      this.displayHelper(current.left, starting, false)
      this.displayHelper(current.right, starting, true)
    }
  }
}