import { notFound, redirect } from 'next/navigation';
import { linkAppConfig } from '@repo/config';
import type { Metadata } from 'next';
import type { Link } from '@/interfaces/link';

export const metadata: Metadata = {
    title: 'Redirecting...',
};

async function getLink(slug: string): Promise<Link | null> {
    const res = await fetch(
        `${linkAppConfig.LINK_APP_BASE_URL}/api/link/${slug}`,
        {
            cache: 'force-cache',
            next: {
                revalidate: 3600,
            },
        }
    );

    if (!res.ok) {
        return null;
    }

    const link = (await res.json()) as Link;

    return link;
}

export default async function Page({
    params: { slug },
}: {
    params: {
        slug: string;
    };
}): Promise<JSX.Element> {
    const link = await getLink(slug);

    if (!link) {
        return notFound();
    }

    redirect(link.url);
}
