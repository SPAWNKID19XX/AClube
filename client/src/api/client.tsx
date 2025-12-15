
const API_URL = import.meta.env.VITE_API_URL ?? "http://127.0.0.1:8000";

function getLang() {
  // если React не успел — будет дефолт    
    return localStorage.getItem("lang") || "en";
}

export async function apiFetch(path: string, options: RequestInit = {}) {
    const headers = {
        ...(options.headers || {}),
        "Accept-Language": getLang(),
    };

    // Content-Type ставим только если это не FormData
    const isFormData = options.body instanceof FormData;
    if (!isFormData) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (headers as any)["Content-Type"] = (headers as any)["Content-Type"] || "application/json";
    }

    const res = await fetch(`${API_URL}${path}`, { ...options, headers });

    // если ошибка — пробуем вернуть JSON ошибки DRF
    if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw { status: res.status, data };
    }

    return res;
    }

export async function apiGet<T>(path: string): Promise<T> {
    const res = await apiFetch(path, { method: "GET" });
    return (await res.json()) as T;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function apiPost<T>(path: string, body: any): Promise<T> {
    const res = await apiFetch(path, {
        method: "POST",
        body: JSON.stringify(body), 
    });
    return (await res.json()) as T;
}
