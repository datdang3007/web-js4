// Bài 1: Tính tổng các giá trị trong mảng và xuất ra format theo dạng ($0,000.00)
console.log("Bài 1: Tính tổng các giá trị trong mảng và xuất ra format theo dạng ($0,000.00)");
var price = ["$1,410.94", "$95.05", "$1,123,231.23"] // $1,124,737.22
var sumPrice = 0
var sum = price.map((val) => sumPrice += +val.split("$")[1].split(",").join(""))
var a = String(sumPrice)
var flag = 0
var dem = 0
var newPrice = []
for (var i = a.length - 1; i>=0; i--) {
  newPrice.unshift(a[i])
  if(flag === 1) {
    dem++
  }
  if(dem === 3) {
    newPrice.unshift(",")
    dem = 0
  }
  if (a[i] === ".") {
    flag = 1
  }
}
if (newPrice[0] === ",") {
  newPrice.shift()
}
console.log("$" + newPrice.join(""))

// Bài 2: Output: ["iloveu", "today", "micute"]
console.log("Bài 2: Xuất ra chuỗi các kí tự dạng chữ không trùng nhau");
var arr = ["ii222iillllove33euuu", "too7odayyy99y", "88mmmicuuut77eee"]
var result = arr.map((val) => {
  var temp = val.split("").filter((val) => {
    return !Number(val)
  }).reduce((acc, val) => {
    if(acc.indexOf(val) === -1) {
      acc.push(val)
    }
    return acc
  },[])
  return temp.join("")
})
console.log(result)

// Bài 3: Output: [2, 4, 6, 8, 10, 12] sử dụng reduce
console.log("Bài 3: Xuất ra mảng các phần tử gấp 2 lần mảng cũ");
var arr = [1, 2, 3, 4, 5, 6]
var newArr = arr.reduce((acc, val) => {
  acc.push(val*2)
  return acc
},[])
console.log(newArr)

// Bài 4: Đảo Ngược Số
// Output: [321, 654, 987, 555]
console.log("Bài 4: Xuất ra mảng gồm các phần tử đảo ngược của mảng cũ");
var arr = [123, 456, 789, 555]
var newArr = arr.reduce((acc, val) => {
  acc.push(Number(val.toString().split("").reverse().join("")))
  return acc
},[])
console.log(newArr)

// Bài 5: Tính tổng các phần tử trùng nhau
// Output: [2, 4, 12]
console.log("Bài 5: Tính tổng các phần tử trùng nhau");
var arr = [1, 2, 2, 3, 1, 3, 3, 3]
var newArr = arr.reduce((acc, val) => {
  if (!acc.includes(val)) {
    acc.push(val)
  }
  return acc
}, []).map(val => {
  var duplicateLength = arr.filter(duplicate => {
    return val === duplicate
  }).length
  return val * duplicateLength
})
console.log(newArr);