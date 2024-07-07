export async function fetcher<ReturnType>(url: string): Promise<ReturnType> {
    try {
        const res = await fetch(url);
        if (res.ok) {
            const data = (await res.json()) as ReturnType;
            return data;
        }

        switch (res.status) {
            case 404:
                throw new Error('Data not found');
            case 500:
                throw new Error('Internal server error');
            default:
                throw new Error(
                    `Request failed with status code ${res.status}`
                );
        }
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
        throw new Error('Failed to fetch');
    }
}
