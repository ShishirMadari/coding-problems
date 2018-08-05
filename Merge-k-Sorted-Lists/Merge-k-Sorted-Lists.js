/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */



// need to come back to this and clean this up/make more efficient
var mergeKLists = function(lists) {
    if (lists.length === 0) return null;
    
    let aggregateMap = new Map();
    for (let i = 0; i < lists.length; i++) {
        let listNode = lists[i];
        while (listNode != null) {
            const val = listNode.val
            if (aggregateMap.has(val)) {
                aggregateMap.set(val, aggregateMap.get(val)+1);
            } else {
                aggregateMap.set(val, 1);
            }
            listNode = listNode.next;
        }
    }
    
    let mapValues = [];
    var mapIterator = aggregateMap[Symbol.iterator]();
    for (let key of mapIterator) {
        mapValues.push(key);
    }
    
    if (mapValues.length === 0) return null;
    
    mapValues.sort(function(a, b) {
        return a[0] - b[0]
    });

    let node = new ListNode(mapValues[0][0]);
    mapValues[0][1]--;
    
    let start = node;
    for (let i = 0; i < mapValues.length; i++) {
        for (let j = 0; j < mapValues[i][1]; j++) {
            node.next = new ListNode(mapValues[i][0]);
            node = node.next;
        }
    }
    
    return start;
};