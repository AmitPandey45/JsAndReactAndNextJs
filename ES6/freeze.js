let players = {};

const addToPlayers = (key, plr) => {
  players = Object.freeze({
    ...players,
    [key]: plr,
  });
};

const getFromPlayers = (key) => players[key];

addToPlayers(1, { name: "Dhoni", id: 10 });
addToPlayers(2, { name: "Rohit", id: 20 });
addToPlayers(3, { name: "Virat", id: 30 });

console.log(getFromPlayers(1));
players[1].name = "Osama";
console.log(getFromPlayers(1));

const data = {};

function setKeyAndValue(data, { key, value }) {
  return {
    ...data,
    [key]: value,
  };
}

let currentObj = setKeyAndValue(data, { key: "name", value: "Dhoni" });
console.log(currentObj);

currentObj = setKeyAndValue(currentObj, { key: "type", value: "Keeper" });
console.log(currentObj);
