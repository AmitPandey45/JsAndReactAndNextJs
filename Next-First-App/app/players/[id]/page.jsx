const players = [
  { id: 1, name: "Dhoni", category: "Keeper" },
  { id: 2, name: "Virat", category: "Batter" },
  { id: 3, name: "Rohit", category: "Batter" },
];

function getPlayer(id) {
  return players.find((plr) => plr.id === id);
}

export function generateMetadata(params) {
  console.log(params);
  const player = getPlayer(Number(params.params.id));
  console.log("player----------------", player);
  return {
    title: player.name,
    description: player.category,
  };
}

export default async function getPlayers(params) {
  console.log(params.params);
  const player = getPlayer(Number(params.params.id));
  const { id, name, category } = player;
  return (
    <div>
      <id>id: {player.id}</id>
      <p>name: {name}</p>
      <p>category: {category}</p>
    </div>
  );
}
