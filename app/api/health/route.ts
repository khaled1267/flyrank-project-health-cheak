export async function GET() {
  return Response.json(
    {
      status: "healthy",
      application: "FlyRank",
      timestamp: new Date().toISOString(),
    },
    {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    },
  );
}
