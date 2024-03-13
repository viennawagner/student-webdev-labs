const destructureItems = (input) => {
  // destructure the name and parents of the character and format the output as shown
  output = input.first + " " + input.last;
  output += "\n\t" + "daughter of";
  output += "\n\t" + input.allegiance.parents.mother;
  output += " " + input.allegiance.parents.father;

  return output;
};

const sansa = {
  first: 'Sansa',
  last: 'Stark',
  allegiance: {
    house: 'Winterfell',
    parents: {
      mother: 'Catelyn Tully',
      father: 'Eddard Stark',
    },
    animals: {
      direwolf: 'Lady',
    },
  },
};

const daenerys = {
  first: 'Daenerys',
  last: 'Targaryen',
  allegiance: {
    house: 'Targaryen',
    parents: {
      mother: 'Queen Rhaella',
      father: 'King Aerys II Targaryen',
    },
    animals: {
      dragons: 'Drogon',
    },
  },
};

console.log(destructureItems(sansa));
// Sansa Stark
//   daughter of
//   Catelyn Tully and Eddard Stark
console.log(destructureItems(daenerys));
// Daenerys Targaryen
//   daughter of
//   Queen Rhaella and King Aerys II Targaryen
