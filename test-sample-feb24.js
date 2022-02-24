// Your job goes here.
// test
fn(state => {
  const person = 
      {
        'External_ID': dataValue('case_id')(state),
        'Consent': (dataValue('consent')(state) === "yes" ? 1 : 0),
        'Age': dataValue('age')(state),
        'Camp': dataValue('camp')(state)
      };
    
  
  
  
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