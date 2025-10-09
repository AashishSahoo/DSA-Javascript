/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let dummy : ListNode | null = new ListNode(0);
    let curr= dummy;

    while(list1!==null && list2!==null){
        if(list1.val <= list2.val){
            curr.next = list1;
            list1 =list1.next
        }else{
            curr.next = list2;
            list2 =list2.next            
        }
        curr=curr.next;
    }

    list1!==null ? curr.next=list1 : curr.next=list2;

    return dummy.next;
};