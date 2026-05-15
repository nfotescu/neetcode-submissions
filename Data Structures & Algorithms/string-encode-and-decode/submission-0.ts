class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */

    encode(strs: string[]): string {
        const getCodedStr = (str: string, codeSymbol = "#"): string => {
            return `${str.length}${codeSymbol}${str}`;
        };
        return strs.reduce((encodedStr, str) => {
            const coded = getCodedStr(str);
            encodedStr += coded;
            return encodedStr;
        }, "");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let result = [];
        let i = 0;
        while (i < str.length) {
            const delimiter = str.indexOf("#", i);
            const length = Number(str.slice(i, delimiter));
            const start = delimiter + 1;
            const end = start + length;
            const extractedStr = str.slice(start, end);
            result.push(extractedStr);
            i = end;
        }
        return result;
    }
}
