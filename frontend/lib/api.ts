const API = "http://127.0.0.1:8000";

export async function getCandidates() {
    const res = await fetch(`${API}/rank`);
    return await res.json();
}

export async function generateSubmission() {
    const res = await fetch(`${API}/submit`);
    return await res.json();
}