async function division(num1, num2) {
  try {
    if (num2 === 0) throw new Error("cannot divide by 0");
    return num1 / num2;
  } catch (error) {
    console.error("error", error);
    return null;
  }
}

async function mainFn() {
  console.log(await division(10, 2));
  console.log(await division(10, 0));
}

mainFn();
