fn(state => {
  if (true) return state;
  
  // new scheme for oauth works in both directions with PRC and frontEnd 2
fn(state => {
  // throw "bang"
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(state);
      console.log(Date.now(), 'CONN_RECVD |> PIPE FROM T-GRN001...')
      resolve(state);
    }, 2000);   
  });
});

fn(state => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(Date.now(), 'TRAIN-GRN001: DEPARTED \ 321#bdsahjk31h->>stop')
      resolve(state);
    }, 2000);   
  });
});
  
  
})