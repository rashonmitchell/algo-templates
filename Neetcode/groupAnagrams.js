class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {};
        let res = [];

        for (let str of strs) {
            let key = str.split('').sort().join('');
            if (!map[key]) {
                map[key] = [];
            }
            map[key].push(str);
        }

        for (let key in map) {
            res.push(map[key]);
        }

        return res;
    }
}
