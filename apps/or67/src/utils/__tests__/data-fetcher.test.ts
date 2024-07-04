import { expect, describe, test, vi, type Mock } from 'vitest';
import { fetcher } from '../data-fetcher';

describe('fetcher', () => {
    test('returns data if the response is ok', async () => {
        global.fetch = vi.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve('data'),
            })
        ) as Mock;

        const data = await fetcher('url');
        expect(data).toEqual('data');
    });

    test('throws an error if the response status is 404', async () => {
        global.fetch = vi.fn(() =>
            Promise.resolve({
                ok: false,
                status: 404,
            })
        ) as Mock;

        await expect(fetcher('url')).rejects.toThrow('Data not found');
    });

    test('throws an error if the response status is 500', async () => {
        global.fetch = vi.fn(() =>
            Promise.resolve({
                ok: false,
                status: 500,
            })
        ) as Mock;

        await expect(fetcher('url')).rejects.toThrow('Internal server error');
    });

    test('throws an error if the response status is not 404 or 500', async () => {
        const status = 400;
        global.fetch = vi.fn(() =>
            Promise.resolve({
                ok: false,
                status,
            })
        ) as Mock;

        await expect(fetcher('url')).rejects.toThrow(`Request failed with status code ${status}`);
    });

    test('throws an error if the fetch fails', async () => {
        global.fetch = vi.fn(() =>
            Promise.reject()
        ) as Mock;

        await expect(fetcher('url')).rejects.toThrow('Failed to fetch');
    });
});
