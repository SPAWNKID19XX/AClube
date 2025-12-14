const API_URL = import.meta.env.VITE_API_URL ?? "http://127.0.0.1:8000";

export async function apiGet<T>(path: string): Promise<T> {
    const res = await fetch(`${API_URL}${path}`, {
        headers: {
        "Content-Type": "application/json",
        },
    });

    if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
    }

    return res.json() as Promise<T>;
}