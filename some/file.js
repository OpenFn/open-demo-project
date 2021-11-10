alterState(state => { //change filepath AND write code
  console.log("first op worked great!")
  let arr = Array(1e8).fill("some string");
  arr.reverse();
  return state;
});

alterState(state => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("wait, and then return");
      resolve(state);
    }, 400);   
  });
});