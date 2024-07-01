import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { linkAppConfig } from '@repo/config';
import { axiosNocoDB } from '@repo/axios';
import type { NocoDBGetResponse } from '@repo/axios/types';
import type { AxiosResponse } from 'axios';
import type { Link } from '@/server/interfaces/link';

export const GET = async (
    req: NextRequest,
    {
        params: { slug },
    }: {
        params: {
            slug: string;
        };
    }
): Promise<NextResponse> => {
    try {
        const links = await axiosNocoDB
            .get(`/${linkAppConfig.LINK_APP_NOCODB_TABLE_ID}/records`, {
                params: {
                    limit: 1000,
                },
            })
            .then(
                (res: AxiosResponse<NocoDBGetResponse<Link>>) => res.data.list
            );

        const foundedLink = links.find((link) => link.Slug === slug);

        if (!foundedLink) {
            return NextResponse.json(
                {
                    error: 'Link not found',
                },
                { status: 404 }
            );
        }

        return NextResponse.json(
            {
                title: foundedLink.Title,
                slug: foundedLink.Slug,
                url: foundedLink.URL,
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                error:
                    error instanceof Error
                        ? error.message
                        : 'Internal Server Error',
            },
            { status: 500 }
        );
    }
};
