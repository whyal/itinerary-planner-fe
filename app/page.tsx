// app/page.tsx (Server Component)
interface ApiResponse {
    status: string;
    message: string;
}

async function getMessage(): Promise<ApiResponse> {
    // Fetches directly server-to-server
    const res = await fetch(`${process.env.INTERNAL_API_URL}/message`, {
        cache: "no-store", // Use 'force-cache' for static caching, or 'no-store' for SSR
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data from Spring Boot");
    }

    return res.json();
}

export default async function HomePage() {
    const data = await getMessage();

    return (
        <main className="p-8">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="mt-4 p-4 border rounded bg-gray-50">
                <p className="text-sm text-gray-500">Status: {data.status}</p>
                <p className="text-lg font-medium text-green-600">
                    {data.message}
                </p>
            </div>
        </main>
    );
}
