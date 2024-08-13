import { NextResponse } from "next/server";
import { players } from "../../../util/players";

export async function GET() {
    return NextResponse.json({data: players});
}