class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const map = {
            ")": "(",
            "}": "{",
            "]": "[",
        };
        for (let i = 0; i < s.length; i++) {
            const last = stack.length ? stack.length - 1 : 0;

            if (stack[last] && map[s[i]] && stack[last] === map[s[i]]) {
                stack.pop();
            } else {
                stack.push(s[i]);
            }
        }

        return stack.length === 0;
    }
}
