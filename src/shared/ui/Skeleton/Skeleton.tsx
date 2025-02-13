import ContentLoader from "react-content-loader";
import s from "./Skeleton.module.scss";

type SkeletonProps = {
  type: string;
  count: number
};

export const Skeleton = ({ type, count }: SkeletonProps) => {

  return (
    <div className={type === "main"  ? s.skeletonWrapper : s.skeletonMainWrapper}>
      <ul className={type === "main" ? s.carouselSkeleton : s.skeleton}>
        {[...new Array(count)].map((_, index) => {
          return (
            <ContentLoader
              key={index}
              speed={2}
              width={240}
              height={type === 'main' ? 350 : 400}
              viewBox={`0 0 ${240} ${type === 'main' ? 350 : 400}`}
              backgroundColor="#1c1c1c"
              foregroundColor="rgb(56, 54, 54)"
              style={{ margin: "0 5px" }}
            >
              <rect x="-4" y="2" rx="0" ry="0" width="250" height={type === 'main' ? 350 : 400} />
              <rect x="82" y="56" rx="0" ry="0" width="21" height="23" />
              <rect x="46" y="77" rx="0" ry="0" width="5" height="4" />
            </ContentLoader>
          );
        })}
      </ul>
    </div>
  );
};
