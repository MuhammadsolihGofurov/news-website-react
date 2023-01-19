import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { demo } from '../../mock/';
import { glassRed, glassWhite } from "../../mock/";

export default function Banner({ info }) {
    return (
        <div className='banner'>
            <SkeletonTheme baseColor={glassWhite} highlightColor={glassRed}>
                <h2 className='xl:text-2xl text-lg  font-black hover:text-red-700 transition-all pb-[5px]'>
                    <a href={`${info?.url}`} target="_blank">
                        {info?.title || <Skeleton />}
                    </a>
                </h2>
                {
                    info?.section ?
                        <div className='flex gap-5 justify-start flex-wrap text-lg'>
                            <p className="font-bold text-red-700">
                                {info?.section || <Skeleton />}
                            </p>
                            |
                            <p>
                                {info?.published_date.slice(0, 10) || <Skeleton />}
                            </p>
                        </div>
                        :
                        <Skeleton />
                }
                <p className='text-gray-500'>
                    {info?.abstract || <Skeleton />}
                </p>
                <div className="banner-img">
                    <LazyLoadImage 
                        alt={info?.title || demo?.title}
                        src={info?.multimedia[0]?.url}
                        effect="blur"
                    />
                </div>
            </SkeletonTheme>
        </div>
    )
}
