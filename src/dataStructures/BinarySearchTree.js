// src/dataStructures/BinarySearchTree.js
class TreeNode {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(data) {
      const newNode = new TreeNode(data);
      if (!this.root) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(node, newNode) {
      if (newNode.data < node.data) {
        if (!node.left) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (!node.right) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  
    search(data) {
      return this.searchNode(this.root, data);
    }
  
    searchNode(node, data) {
      if (!node) return false;
      if (data < node.data) {
        return this.searchNode(node.left, data);
      } else if (data > node.data) {
        return this.searchNode(node.right, data);
      } else {
        return true;
      }
    }
  
    toArray() {
      const result = [];
      this.inOrderTraversal(this.root, result);
      return result;
    }
  
    inOrderTraversal(node, result) {
      if (node) {
        this.inOrderTraversal(node.left, result);
        result.push(node.data);
        this.inOrderTraversal(node.right, result);
      }
    }
  }
  
  export default BinarySearchTree;