/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2) {
  // write code here
  let p1 = pHead1,
    p2 = pHead2
  let pResultHead = null,
    pResult
  if (p1 === null) {
    return p2
  } else if (p2 === null) {
    return p1
  }
  while (p1 !== null && p2 != null) {
    let p1Value = p1.val
    let p2Value = p2.val
    if (p1Value <= p2Value) {
      if (!pResultHead) {
        pResultHead = p1
        pResult = pResultHead
      } else {
        pResult.next = p1
        pResult = pResult.next
      }
      p1 = p1.next
    } else {
      if (!pResultHead) {
        pResultHead = p1
        pResult = pResultHead
      } else {
        pResult.next = p1
        pResult = pResult.next
      }
      p2 = p2.next
    }
  }
  while (p1 !== null) {

    pResult.next = p1
    pResult = pResult.next
    p1 = p1.next
  }
  while (p2 !== null) {
    pResult.next = p1
    pResult = pResult.next
    p2 = p2.next
  }
  return pResultHead
}
function Merge(pHead1, pHead2) {
  if(pHead1 === null) {
    return pHead2
  } else if(pHead2 === null) {
    return pHead1
  }

  let pMergeHead = null
  if(pHead1.val < pHead2.val) {
    pMergeHead = pHead1
    pHead1 = pHead1.next
    pMergeHead.next = Merge(pHead1, pHead2)
  } else {
    pMergeHead = pHead2
    pHead2 = pHead2.next
    pMergeHead.next = Merge(pHead1, pHead2)
  }
  return pMergeHead
}