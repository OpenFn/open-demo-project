fn(state => {
  this.process.exit(0);
  return state;
});

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

// create("vera__Beneficiary__c", fields(
//   field('vera__Gender__c', dataValue("gender")),
//   field('vera__Country__c', state => {
//       // Or do anything in here...
//       if (state.data.village == "Leicester") {
//         return 'England';
//       } else {
//         setTimeout(() => {
//           console.log("did i?");
//         }, 50);
//         console.log(Math.random());
//         return "Far away";
//       }
//   }),
//   field('vera__photo_url__c', dataValue("photo.url"))
// ));

// console.log("Changes from GitHub succeeds with existing integrations 2 also.");
