import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({
        "name": "Horizon Labs, Inc.",
        "apiVersion": "1.0.0B"
    });
}