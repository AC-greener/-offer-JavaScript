/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead)
{
    // write code here
    if(pHead === null) return null
    let pResult = null
    let pNode = pHead
    let pPrev = null
    while(pNode) {
      let pNext = pNode.next
      if(pNext === null) {
        pResult = pNode
      }
      pNode.next = pPrev
      pPrev = pNode
      pNode = pNext
    }
    return pResult
}