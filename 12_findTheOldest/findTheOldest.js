const getAge = function (birthDate, deathDate) {
  if (!death) {
    death = new Date.getFullYear();
  }
  return death - birth;
};

const findTheOldest = function (array) {
  return people.reduce((oldest, current) => {
    const oldestAge = getAge(
      oldest.getAge(oldest.yearOfBirth, oldest.yearOfDeath)
    );
    const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
    return oldestAge < currentAge ? currentPerson : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
