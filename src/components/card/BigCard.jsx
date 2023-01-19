import { demo, glassRed, glassWhite } from "../../mock/";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function BigCard({ info, id }) {
  const data = info?.books[3];
  return (
    <SkeletonTheme baseColor={glassWhite} highlightColor={glassRed}>
      <a href={`${data?.amazon_product_url}`} target="_blank">
        <div className='mb-4 lg:w-full w-3/4 mx-auto'>
          <div className="card-img lg:h-big h-xl overflow-hidden rounded">
            <LazyLoadImage
              alt={data?.headline || demo?.title}
              src={data?.book_image || demo?.image}
              effect="blur"
            />
          </div>
          <div className="card-body py-[20px]">
            <h2 className="font-black">
              {data?.title || demo?.title || <Skeleton />}
            </h2>
            <div className="flex gap-3">
              <span className="text-gray-400">
                Author:
              </span>
              <span>
                {data?.author || demo?.author || <Skeleton />}
              </span>
            </div>
            <p className="py-[10px] text-red-300">
              {data?.description || demo?.description || <Skeleton />}
            </p>
          </div>
        </div>
      </a>
    </SkeletonTheme>
  )
}
