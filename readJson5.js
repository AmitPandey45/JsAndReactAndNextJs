var players = require("./players.json");

// players.forEach((player) => {
//   console.log(`Player ${player} properties`);
// });

Object.keys(players).forEach((key) => {
  console.log(
    players[key].id + " " + players[key].name + " " + players[key].category
  );
});

var keys = Object.keys(players);
for (var key in keys) {
  if (players.hasOwnProperty(key)) {
    console.log(
      key +
        " -> " +
        players[key].id +
        " " +
        players[key].name +
        " " +
        players[key].category
    );
  }
}
