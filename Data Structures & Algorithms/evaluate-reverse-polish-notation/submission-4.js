class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        const method = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b,
            "*": (a, b) => a * b,
            "/": (a, b) => Math.trunc(a / b),
        };
        for (let i = 0; i < tokens.length; i++) {
            if(method[tokens[i]]){
                const b = stack.pop()
                const a = stack.pop()
                stack.push(method[tokens[i]](a, b))
            } else {
                stack.push(Number(tokens[i]))
            }
        }

        return stack.pop()
    }
}
