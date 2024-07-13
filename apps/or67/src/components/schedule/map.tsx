'use client';
import { Button } from '@ui/components/ui/button';
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTrigger,
} from '@ui/components/ui/drawer';
import type { Marker, MarkerComponentProps } from 'react-image-marker';
import ImageMarker from 'react-image-marker';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@ui/components/ui/dialog';
import { useMediaQuery } from '@/hooks/use-media-query';
import mapImage from '@/assets/images/map/map.png';
import basketball from '@/assets/images/map/basketball.png';
import building3 from '@/assets/images/map/building3.png';
import building4 from '@/assets/images/map/building4.png';
import civil from '@/assets/images/map/civil.png';
import elect from '@/assets/images/map/elect.png';
import garden from '@/assets/images/map/garden.png';
import hans from '@/assets/images/map/hans.png';
import icanteen from '@/assets/images/map/icanteen.png';
import nuclear from '@/assets/images/map/nuclear.png';
import survey from '@/assets/images/map/survey.png';

const markers: {
    image: StaticImageData;
    name: string;
    marker: Marker;
}[] = [
    {
        image: basketball,
        name: 'สนามบาสวิศวะ',
        marker: {
            top: 81,
            left: 48,
        },
    },
    {
        image: building3,
        name: 'ตึก 3',
        marker: {
            top: 12,
            left: 45,
        },
    },
    {
        image: building4,
        name: 'ตึก 4',
        marker: {
            top: 50,
            left: 77,
        },
    },
    {
        image: civil,
        name: 'ตึกภาคโยธา',
        marker: {
            top: 70,
            left: 40,
        },
    },
    {
        image: elect,
        name: 'ตึกภาคไฟฟ้า',
        marker: {
            top: 33,
            left: 8,
        },
    },
    {
        image: garden,
        name: 'สวนรวมใจ',
        marker: {
            top: 12,
            left: 20,
        },
    },
    {
        image: hans,
        name: 'ตึกฮันส์ บันตลิ',
        marker: {
            top: 43,
            left: 65,
        },
    },
    {
        image: icanteen,
        name: 'ICanteen',
        marker: {
            top: 2,
            left: 80,
        },
    },
    {
        image: nuclear,
        name: 'ตึกภาคนิวเคลียร์',
        marker: {
            top: 70,
            left: 83,
        },
    },
    {
        image: survey,
        name: 'ตึกภาคสำรวจ',
        marker: {
            top: 78,
            left: 27,
        },
    },
];

function CustomMarker({ itemNumber }: MarkerComponentProps): JSX.Element {
    const { image, name } = markers[Number(itemNumber)];

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    className='h-auto w-[8dvw] min-w-8 p-2 md:size-12 lg:size-16'
                    variant='link'
                >
                    <MarkerIcon className='size-full' variant='fill' />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{name}</DialogTitle>
                </DialogHeader>
                <Image alt='marker' className='object-cover' src={image} />
            </DialogContent>
        </Dialog>
    );
}

export function MapIcon(): JSX.Element {
    return (
        <svg
            fill='none'
            height='18'
            viewBox='0 0 20 18'
            width='20'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                clipRule='evenodd'
                d='M6.526 0.0768612C6.83369 -0.0256204 7.16631 -0.0256204 7.474 0.0768612L13 1.91886L18.289 0.155861C18.4844 0.0907487 18.6925 0.0729904 18.896 0.104049C19.0996 0.135108 19.2929 0.214094 19.46 0.334503C19.6271 0.454911 19.7632 0.613294 19.8571 0.796605C19.951 0.979916 19.9999 1.18291 20 1.38886V14.6129C20 14.9277 19.9009 15.2346 19.7167 15.49C19.5326 15.7454 19.2727 15.9364 18.974 16.0359L13.474 17.8689C13.166 17.9719 12.834 17.9719 12.526 17.8689L7 16.0269L1.711 17.7899C1.51561 17.855 1.30755 17.8727 1.10395 17.8417C0.900356 17.8106 0.707052 17.7316 0.539965 17.6112C0.372878 17.4908 0.23679 17.3324 0.142912 17.1491C0.0490331 16.9658 5.07437e-05 16.7628 0 16.5569V3.33286C2.91324e-05 3.018 0.0991373 2.71113 0.283283 2.45573C0.467428 2.20033 0.727272 2.00936 1.026 1.90986L6.526 0.0768612ZM6 14.2529V2.35986L2 3.69386V15.5859L6 14.2519V14.2529ZM8 2.36086V14.2529L12 15.5869V3.69286L8 2.35886V2.36086ZM14 3.69486V15.5869L18 14.2529V2.35986L14 3.69486Z'
                fill='white'
                fillRule='evenodd'
            />
        </svg>
    );
}

export function MarkerIcon({
    variant,
    className,
}: {
    variant: 'fill' | 'outline';
    className?: string;
}): JSX.Element {
    if (variant === 'fill') {
        return (
            <svg
                className={className}
                fill='none'
                height='12'
                viewBox='0 0 9 12'
                width='9'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    d='M4.56373 6.34045C3.98543 6.34045 3.51227 5.84917 3.51227 5.24873C3.51227 4.64828 3.98543 4.157 4.56373 4.157C5.14203 4.157 5.61518 4.64828 5.61518 5.24873C5.61518 5.84917 5.14203 6.34045 4.56373 6.34045ZM4.56373 0.881836C2.35567 0.881836 0.35791 2.63951 0.35791 5.3579C0.35791 7.17016 1.7616 9.31539 4.56373 11.7991C7.36585 9.31539 8.76954 7.17016 8.76954 5.3579C8.76954 2.63951 6.77178 0.881836 4.56373 0.881836Z'
                    fill='#821923'
                />
            </svg>
        );
    }
    return (
        <svg
            className={className}
            fill='none'
            height='10'
            viewBox='0 0 8 10'
            width='8'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M4 5C3.45 5 3 4.55 3 4C3 3.45 3.45 3 4 3C4.55 3 5 3.45 5 4C5 4.55 4.55 5 4 5ZM7 4.1C7 2.285 5.675 1 4 1C2.325 1 1 2.285 1 4.1C1 5.27 1.975 6.82 4 8.67C6.025 6.82 7 5.27 7 4.1ZM4 0C6.1 0 8 1.61 8 4.1C8 5.76 6.665 7.725 4 10C1.335 7.725 0 5.76 0 4.1C0 1.61 1.9 0 4 0Z'
                fill='white'
            />
        </svg>
    );
}

export default function Map(): JSX.Element {
    const isSmallDevice = useMediaQuery('only screen and (max-width : 768px)');

    if (isSmallDevice) {
        return (
            <Drawer>
                <DrawerTrigger asChild>
                    <Button
                        className='fixed bottom-32 left-6 z-10 rounded-full'
                        size='icon'
                        variant='default'
                    >
                        <MapIcon />
                    </Button>
                </DrawerTrigger>
                <DrawerContent className='bg-primary text-background border-none p-4'>
                    <DrawerHeader className=' text-2xl font-semibold'>
                        แผนผังตึกเรียน
                    </DrawerHeader>
                    <div className='flex w-full flex-col items-center justify-center gap-4'>
                        <div className='flex flex-col text-center'>
                            <h2 className='text-lg font-semibold'>
                                คลิกที่รูปเลย !
                            </h2>
                            <p className='text-sm font-medium'>
                                เพื่อดูรูปภาพสถานที่จริง
                            </p>
                        </div>
                        <div className='flex flex-col gap-2 text-center'>
                            <div className='size-full max-w-2xl overflow-hidden rounded-lg'>
                                <ImageMarker
                                    alt='map'
                                    markerComponent={CustomMarker}
                                    markers={markers.map(
                                        ({ image: _, marker }) => marker
                                    )}
                                    src={mapImage.src}
                                />
                            </div>
                            <caption className='flex w-full items-center justify-center gap-2 text-center text-xs font-medium'>
                                <MarkerIcon
                                    className='size-4'
                                    variant='outline'
                                />
                                คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย
                            </caption>
                        </div>
                    </div>
                </DrawerContent>
            </Drawer>
        );
    }
    return (
        <div className='bg-primary text-background flex size-full flex-col items-center justify-center gap-24 rounded-t-[6rem] px-36 py-24 max-lg:translate-y-8'>
            <h1 className='text-4xl font-semibold'>แผนผังตึกเรียน</h1>
            <div className='flex w-full max-w-5xl items-center justify-between'>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <div className='size-full max-w-2xl overflow-hidden rounded-lg'>
                        <ImageMarker
                            alt='map'
                            markerComponent={CustomMarker}
                            markers={markers.map(
                                ({ image: _, marker }) => marker
                            )}
                            src={mapImage.src}
                        />
                    </div>
                    <caption className='flex w-full items-center justify-center gap-2 text-center text-2xl font-medium'>
                        <MarkerIcon className='size-6' variant='outline' />
                        คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย
                    </caption>
                </div>
                <div className='flex flex-col gap-3 text-center'>
                    <h2 className='text-4xl font-semibold'>คลิกที่รูปเลย !</h2>
                    <p className='text-2xl font-medium'>
                        เพื่อดูรูปภาพสถานที่จริง
                    </p>
                </div>
            </div>
        </div>
    );
}
