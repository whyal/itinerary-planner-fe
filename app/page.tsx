import ItineraryForm from "./components/ItineraryForm";

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
    // const data = await getMessage();

    return (
        <main className="flex mx-auto w-1/2 h-screen justify-center items-center">
            <ItineraryForm />
        </main>
    );
}
