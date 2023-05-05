const person = {
  firstName: 'Commander',
  lastName: 'Shephard',
  hobby: 'winning.',
};
console.log(person);
person.fullName = person.firstName + ' ' + person.lastName;
console.log(person.fullName);
person.job = 'protecting the galaxy...hopefully';
console.log(person.fullName + "'s job is " + person.job);
person['previousJob'] = 'being a part of the Alliance';
console.log('His previous job was ' + person.previousJob);
console.log(person);
