export const Loader = () => {
    return (
        <div class="border border-blue-300 shadow rounded-md p-4 w-full mx-auto">
            <div class="animate-pulse flex space-x-4">
                <div class="rounded-md bg-blue-300 h-12 w-12"></div>
                <div class="flex-1 space-y-4 py-1">
                <div class="h-4 bg-blue-300 rounded w-3/6"></div>
                    <div class="h-4 bg-blue-300 rounded w-3/4"></div>
                    <div class="space-y-2">
                        <div class="h-4 bg-blue-300 rounded"></div>
                        <div class="h-4 bg-blue-300 rounded w-5/6"></div>
                    </div>
                    <div class="h-4 bg-blue-300 rounded w-9/12"></div>
                </div>
            </div>
        </div>
    )
}