import { NextResponse } from "next/server";

export async function GET(request) {
  console.log("url ---->" + request.url);
  const { pathname } = new URL(request.url);
  const [_, api, version, players, id] = pathname.split("/");

  //return NextResponse.json({ url: request.url,  pathname: pathname });
  return NextResponse.json({
    url: request.url,
    pathname,
    api: api,
    version,
    players: players,
    id: id,
  });
}
