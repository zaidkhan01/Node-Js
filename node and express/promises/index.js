function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
console.log("promise lecture staretd");
delay(2000).then(() => console.log("after 2 second promises resolve"));
console.log("end");

function dividefn(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num2 === 0) {
      reject("cannot perform divide by 0");
    } else {
      resolve(num1 / num2);
    }
  });
}
dividefn(10, 0)
  .then((result) => console.log(result, "res"))
  .catch((error) => console.log(error, "err"));
