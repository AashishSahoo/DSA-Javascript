function reverseList(head: ListNode | null): ListNode | null {
   let prev: ListNode | null = null;
   let curr: ListNode | null = head;

   while (curr !== null) {
      let nxt: ListNode | null = curr.next; 
      curr.next = prev;                     
      prev = curr;                          
      curr = nxt;                           
   }

   return prev; 
}
