import { glassRed, glassWhite } from "../../mock/";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function MediumCard({ info, id }) {
  return (
    <SkeletonTheme baseColor={glassWhite} highlightColor={glassRed}>
      <div className={`flex gap-3 items-center xl:w-1/3 mb-4`}>
        <div className='card-img w-2/4 rounded-lg overflow-hidden'>
          <a href={`${info?.link?.url}`} target="_blank">
            <LazyLoadImage
              alt={info?.headline}
              src={info?.multimedia?.src}
              effect="blur"
            />
          </a>
        </div>
        <div className="card-body w-2/4">
          <a href={`${info?.link?.url}`} target="_blank">
            <h5 className="font-black text-base">
              {info?.headline || <Skeleton />}
            </h5>
          </a>
          <p className="text-gray-300 text-sm">
            {info?.display_title || <Skeleton />}
          </p>
        </div>
      </div>
    </SkeletonTheme >
  )
}
