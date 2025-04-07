
export async function GET() {
  try {
    const response = await fetch('https://catfact.ninja/fact');

    if (!response.ok) {
      throw new Error("Не вдалося отримати факти про котів");
    }

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json'},
    });
  } catch (error: unknown) {
    
    if (error instanceof Error) {
      return new Response(
        JSON.stringify({ error: 'Не вдася отримати факт про кота', details: error.message }),
        { status: 500, headers: { "Content-Type": 'application/json' }}
      );
    }
  }
}
