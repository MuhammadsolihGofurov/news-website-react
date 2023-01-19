import { glassRed, glassWhite } from "../../mock/";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function SmallCard({ info , id }) {
    return (
        <div className='cursor-pointer py-[20px] border-b border-gray-700'>
            <SkeletonTheme baseColor={glassWhite} highlightColor={glassRed}>
                <a href={`${info?.url}`}>
                    <h3 className='font-black lg:text-lg text-md hover:text-red-700'>
                        {info?.title || <Skeleton />}
                    </h3>
                </a>
                <div className='flex gap-3 items-center'>
                    <span className='font-black text-base text-red-700'>
                        {info?.section || <Skeleton />}
                    </span>
                    <span>
                        {info?.published_date.slice(0, 10) || <Skeleton />}
                    </span>
                </div>
            </SkeletonTheme>
        </div>
    )
}
