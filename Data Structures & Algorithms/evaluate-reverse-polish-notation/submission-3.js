class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        const method = {
            "+": (a, b) => Number(a) + Number(b),
            "-": (a, b) => Number(a) - Number(b),
            "*": (a, b) => Number(a) * Number(b),
            "/": (a, b) => Math.trunc(Number(a) / Number(b)),
        };
        for (let i = 0; i < tokens.length; i++) {
            if(method[tokens[i]]){
                const b = stack.pop()
                const a = stack.pop()
                stack.push(method[tokens[i]](a, b))
            } else {
                stack.push(tokens[i])
            }
        }

        return stack.pop()
    }
}
