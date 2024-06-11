import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="flex flex-col w-full group items-start gap-2 rounded-lg border border-zeus p-3 text-left text-sm transition-all hover:bg-zeus/40 hover:text-cream">
      <div className="flex w-full flex-col gap-1">
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-24" />
          </div>
          <div className="ml-auto text-xs flex items-center justify-between gap-4">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-20" />
          </div>
        </div>
        <div className="text-xs font-bold line-clamp-2">
          <Skeleton className="h-4 w-36" />
        </div>
      </div>
      <div className="line-clamp-3 w-full break-words text-wrap text-xs">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  );
}
