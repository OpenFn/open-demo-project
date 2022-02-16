// Your job goes here.
upsert('demo_survey', 'AnswerId',{
  'AnswerId': dataValue('body._id'),
  'SurveyName': dataValue('body.survey'),
  'KoboForm':dataValue('formName')
});

