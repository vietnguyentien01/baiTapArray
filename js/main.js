var mainArray = [8, 9, 9, 1, 3, 5, 9, 7, 7];
var scores = [];

// function soLanXuatHien() {
//   var span = document.getElementById("soLanXuatHien");
// }

function soLeNhoNhat(arr) {
  var len = arr.length;
  var min = Infinity;
  while (len--) {
    if (arr[len] < min && !(len % 2 == 0)) {
      min = arr[len];
    }
  }
  return min;
}
var min = soLeNhoNhat(mainArray);
document.getElementById("soLeNhoNhat").innerHTML = min;

function tongCacPhanTu(arr) {
  var len = arr.length;
  var sum = 0,
    i = 0;
  while (i < len) {
    sum += arr[i];
    ++i;
  }
  document.getElementById("ketQuaLapLai").innerHTML = sum;
}
var tong = tongCacPhanTu(mainArray);
