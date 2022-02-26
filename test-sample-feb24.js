
// first do the mappings on an fn() block
// the the upserts

fn(state => {
  const camps = {
    1122 : "Yida",
    1123 : "Zaatari"
  }
  
  const person =  {
        'External_ID': dataValue('case_id')(state),
        'Consent': (dataValue('consent')(state) === "yes" ? 1 : 0),
        'Age': dataValue('age')(state),
        'Camp': camps[dataValue('camp')(state)]
  };
  
  return {...state, person }
})

upsert('demo_person', 'External_ID', (state) => state.person);


/**
 * Implementation A with for loop
 * 
 */
// fn(async (state) => {
//   var services = [];

//   for (var service of state.data.services_section) {
//     services.push({
//       Type: service.service_type,
//       External_ID: service.unique_id,
//       Person_ID: await findValue({
//         uuid: "Person_ID",
//         relation: "demo_person",
//         where: { External_ID: state.data.case_id },
//       })(state),
//     });
//   }

//   return { ...state, services };
// });

/**
 * Implementation B with Array.map
 */
fn(async (state) => {
  let services = 
     state.data.services_section.map(async ({ service_type, unique_id }) => ({
      Type: service_type,
      External_ID: unique_id,
      Person_ID: await findValue({
        uuid: "Person_ID",
        relation: "demo_person",
        where: { External_ID: state.data.case_id },
      })(state),
    }));
  services = await Promise.all(services);
  console.log({ services });

  return { ...state, services };
});


upsertMany(
 'demo_service', 'External_ID', (state)=> state.services
);


