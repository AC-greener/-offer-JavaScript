/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head)
{
    var result = []
    while(head !== null) {
        result.push(head.val)
        head = head.next
    }
    return result.reverse()
}