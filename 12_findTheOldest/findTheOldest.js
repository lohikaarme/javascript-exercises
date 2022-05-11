let currentYear = (new Date()).getFullYear();

let findTheOldest = (array) => array.sort((a,b) => {
    if (!a.yearOfDeath) a.yearOfDeath = currentYear;
    if (!b.yearOfDeath) b.yearOfDeath = currentYear;
    return a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth ? -1 : 1;
})[0];

module.exports = findTheOldest;

