const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        let element = new Node(data);
        if (!this.length) {
            this._head = element;
            this._tail = element;
        } 
        else {
            element.prev = this._tail;
            this._tail.next = element;
            this._tail = element;
        }
        this.length++;
        return this;
    }

    head() {
        if (this._head == null) {
            return this._head;
        }
        return this._head.data;
    }

    tail() {
        if (this._tail == null) {
            return this._tail;
        }
        return this._tail.data;
    }

    at(index) {
        let element = this._head;
        for (let i = 0; i < index; i++) {
            element = element.next;
        }

        return element.data;
    }

    insertAt(index, data) {
        let element = this._head;
        let i = 1;
        let newElement = new Node(data);
        while (element != null) {
          element = element.next;
          if (i == index) {
            element.prev.next = newElement;
            newElement.prev = element.prev;
            newElement.next = element;
            element.prev = newElement;
            this.length++;
          }
          i++;
        }
        return this;
      }
    isEmpty() {
        if (this.length > 0) {
            return false;
        }
        return true;
    }

    clear() {
        this._tail = null;
        this._head = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        let element = this._head;
        if (this.length == 1) {
            this.clear();
            return this;
        }
        for (let i = 0; i < index; i++) {
            element = element.next;
        }
        let prevEl = element.prev;
        const nextEl = element.next;
        prevEl.next = nextEl;
        nextEl.prev = prevEl;
        this.length--;
        return this;
    }

    reverse() {
        let element = this._head;
        let preElement = null;
        while (element) {
            let afterElement = element.next;
            element.next = preElement;
            element.prev = afterElement;
            preElement = element;
            element = afterElement;
            }
        let tail = this._tail;
        this._tail = this._head;
        this._head = tail;
        return this;
    }

    indexOf(data) {
        let index = 0;
        let elem = this._head;
        while (data != elem.data) {
            elem = elem.next;
            if (elem == null) {
                return -1;
            }
            index++;
        }
        return index;
    }
}

module.exports = LinkedList;