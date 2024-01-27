import { cn } from "@/libs/utils";
interface SkeletonProps {
  className?: string;
  cols?: number;
  rows?: number;
  [key: string]: any;
}
const Skeleton = ({ className, cols, rows, ...props }: SkeletonProps) => {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-[rgba(255,255,255,0.1)]",
        className
      )}
      {...props}
    />
  );
};

export default Skeleton;
