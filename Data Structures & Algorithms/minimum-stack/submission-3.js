class MinStack {
    constructor() {
        this.stack = [];
        this.min = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack[this.stack.length] = val;
        if (!this.min.length || this.min[this.min.length - 1] >= val) {
            this.min[this.min.length] = val;
        }
    }

    /**
     * @return {void}
     */
    pop() {
        const popped = this.stack.splice(this.stack.length - 1, 1);
        if (this.min[this.min.length - 1] === popped[0]) {
            this.min.splice(this.min.length - 1, 1);
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min[this.min.length - 1];
    }
}
