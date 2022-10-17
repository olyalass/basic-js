const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {

  if (Array.isArray(members) === false) {
    return false;
  }

  const filteredMembers = members.filter((member) => typeof member === "string");

  if (filteredMembers.length === 0) {
    return false;
  }

  const membersNoSpaces = filteredMembers.map((member) => member.replace(/\s/g, '').toUpperCase());
  const sortedMembers = membersNoSpaces.sort();
  const result = sortedMembers.map(member => member[0]).join('');
  return result;
}

module.exports = {
  createDreamTeam
};
