// *** Find Number In An Array *** //
// NOTE: PASSES ALL TESTS EXCEPT PERFORMANCE TEST
// Give an array arr that contains some integers, one of the integers appears times is more than the half of the total numbers of element(arr always has such a integer). Your task is to find it
// arr = [0,1,3,3,3,3,3,1,0], should return 3
// arr = [1,1,1,3,3,3,1,1,1,5,5,5,1,1], should return 1
// Arguments arr always be an array that contains at least 5 elements and its length always be an odd number;
// Please pay attention to optimizing the code to avoid time out.
// In the performance test(1000001 elements x 100 testcases), the time consuming of each test case should be within 15ms
function mostAppear(arr){
  let obj = {}, len = Math.floor(arr.length/2), key, i = 0;
  
  for (i; i < arr.length; i++) {
    obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] + 1 : obj[arr[i]] = 1;
  }
  
  for (key in obj) {
    if (obj[key] >= len) {
      return Number(key);
    }
  }
}