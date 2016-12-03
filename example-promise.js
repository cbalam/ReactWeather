// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Philadelphia', function(err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise(location) {
//   return new Promise(function (resolve, reject){
//     resolve(79);
//     reject('City not found');
//   });
// }
//
// getTempPromise('Philadelphia').then(function (temp){
//   console.log('promise success', temp);
// }, function(err){
//   console.log('promise error', err);;
// });


//Challenge Area
function addPromise(a, b){
  return new Promise(function(resolve, reject){
    if (typeof a !== 'number' || typeof b !== 'number') {
      reject('Any parameter is not a number');
    } else {
      resolve(a + b);
    }
  });
}

addPromise(2,'l').then(function(result){
  console.log('Add result', result);
}, function(err){
  console.log('Error', err);
})
