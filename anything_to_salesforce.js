create("vera__Beneficiary__c", fields(
  field('vera__Gender__c', dataValue('gender')),
  field('vera__Country__c', "hard code some value!"),
  field('vera__photo_url__c', dataValue('photo.url'))
));

// test