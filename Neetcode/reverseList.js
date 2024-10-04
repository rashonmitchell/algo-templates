/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null;
        let curr = head;
        let next = null;

        while (curr !== null) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }

    // Recursive
    reverseList(head) {
        if (!head || !head.next) return head;
        
        let reversed = this.reverseList(head.next);
        head.next.next = head;
        head.next = null;

        return reversed;
    }


    // in-place
    reverseList(head) {
        let prev = null; // start at null
        let curr = head; // start at head

        while (curr) { // while not null
            let temp = curr.next;  // store next node
            curr.next = prev; // reverse
            prev = curr; // move pointers
            curr = temp; // move pointers
        }
        return prev; // return new head
    }
}