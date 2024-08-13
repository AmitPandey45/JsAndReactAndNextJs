// Prefetch:
// - in prod next prefetches all our links after loading the initial page
// -so that all the data already available to display each  different route if the user cliks on a link
// -

// npm build
// - prerender all html pages

// npm start -- prod

// npm run dev
// -------------
// app/page.js
// ---------------

import Link from "next/link";

const player = {
  name: "Dhoni",
  category: "Keeper",
};

export default function Home() {
  return (
    <>
      <h1>Hello Hello</h1>
      <Link
        href={{ pathname: "/about", query: { player: JSON.stringify(player) } }}
      >
        About
      </Link>
    </>
  );
}
