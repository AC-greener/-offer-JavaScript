function printMatrix(matrix)
{
    // write code here
    if(!matrix.length) return 
    let rows = matrix.length
    let columns = matrix[0].length
    let start = 0, result = []
    while(columns > start * 2 && rows > start * 2) {
      result = result.concat(printMatrixInCircle(matrix, rows, columns, start))
      ++start
    }
    return result

}
function printMatrixInCircle(matrix, rows, cols, start) {
  const endX = cols - 1 - start,
    endY = rows - 1 - start,
    res = [];
  for (let i = start; i <= endX; i++) {
    res.push(matrix[start][i]);
  }
  for (let i = start + 1; i <= endY; i++) {
    res.push(matrix[i][endX]);
  }
  for (let i = endX - 1; i >= start && endY > start; i--) {
    res.push(matrix[endY][i]);
  }
  for (let i = endY - 1; i >= start + 1 && endX > start; i--) {
    res.push(matrix[i][start]);
  }
  return res;
}
