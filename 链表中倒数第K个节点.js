function FindKthToTail(head, k)
{
    // write code here
    if(!head || k === 0) return null
    let p1 = head, p2 = head
    for(let i = 0; i < k - 1; i++) {
      if(p1.next) {
        p1 = p1.next
      } else {
        return null
      }
    }
    while(p1.next) {
      p1 = p1.next
      p2 = p2.next
    }
    return p2
}