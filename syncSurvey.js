// Your job goes here.
fn(state => {
  const records = [
      {
        'AnswerId': dataValue('body._id'),
        'SurveyName': dataValue('body.survey'),
        'KoboForm':dataValue('formName')
      },
      {
        'AnswerId': dataValue('body._id') + '2nd',
        'SurveyName': dataValue('body.survey') + '2nd',
        'KoboForm':dataValue('formName') + '2nd'
      },
    
    ]
    
    return {...state, records }
})

// version 1
each('records[*]', 
    upsert('demo_survey', 'AnswerId',{
        'AnswerId': dataValue('AnswerId'),
        'SurveyName': dataValue('SurveyName'),
        'KoboForm':dataValue('KoboForm')
    })
)

// version 2
upsertMany('demo_survey', 'AnswerId', state => state.records)

upsert('demo_survey', 'AnswerId',{
  'AnswerId': findValue({
    uuid: 'answer_id',
    relation: 'demo_person',
    where: { name: dataValue('body.surveyor') }
  }), // 1123
  'SurveyName': dataValue('body.survey'),
  'KoboForm':dataValue('formName')
});
// select answer_id from demo_person where name == 'ramsa_abdi_ramsa'


fn(async (state) => {
  const dataSet = body["datasets/data"].split(" ");
  const mapping = [];
  for (ds of dataSet) {
    mapping.push({
      SupplierId: body._id + ds.id,
      AnswerId: body._id,
      SupplierSet: ds.set,
      Name: await findValue({
        uuid: "name",
        relation: "Contact",
        where: {
          contactName: ds.name,
        },
      })(state),
      Address: ds.address,
    });
  }
  
 // return upsertMany("Supplier", "SupplierId", () => mapping)(state);
  return {...state, mapping }
});

upsertMany("Supplier", "SupplierId", (state) => state.mapping);


