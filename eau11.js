function minAbsDiff(arr) {
    let minDiff = Infinity;
    arr.sort((a, b) => a - b); // trier le tableau par ordre croissant
  
    for (let i = 1; i < arr.length; i++) {
      let diff = Math.abs(arr[i] - arr[i-1]);
      if (diff < minDiff) {
        minDiff = diff;
      }
    }
  
    return minDiff;
  }
  console.log(minAbsDiff(process.argv.slice(2)));