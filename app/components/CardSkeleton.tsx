


export default function CardSkeleton() {
    return (
        <div className="p-6 rounded-2xl animate-pulse border border-neutral-200 space-y-3 w-full">

            <div className="rounded h-4 w-2/3 animate-pulse bg-neutral-300"></div>
            <div className="rounded h-3 w-full animate-pulse bg-neutral-300"></div>
            <div className="rounded h-3 w-1/3 animate-pulse bg-neutral-300"></div>
        </div>
    )
}