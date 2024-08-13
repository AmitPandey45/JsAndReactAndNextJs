import Image from "next/image";

async function getDogs() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random", {
    //cache: "no-cache",
    next: {
      revalidate: 10,
    },
  });
  const dogs = await response.json();

  return dogs;
}

export default async function Dog() {
  const dogs = await getDogs();
  console.log(dogs);

  return (
    <>
      <h2>Dog Page</h2>
      <Image src={dogs.message} alt="dogs" width={500} height={500} />
    </>
  );
}
