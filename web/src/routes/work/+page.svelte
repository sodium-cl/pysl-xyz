<script>
    let { data } = $props();
    function diffYears(startDate, endDate) {
        var dt1 = new Date(startDate);
        if (endDate[0].toLowerCase() === "present") {
            var dt2 = new Date();
        } else {
            var dt2 = new Date(endDate);
        }
        var diff = dt2.getTime() - dt1.getTime();
        diff /= 1000 * 60 * 60 * 24; // Convert milliseconds to days
        return Math.abs(Math.round(diff / 365.25)); // Divide by average days in a year
    }
</script>

<div class="mt-[5vh] h-[15vh] flex justify-center items-center p-5">
    {#each data.defaultPageItems as defaultPageItem}
        <div class="tracking-widest p-5">
            <div class="flex items-center">
                <img
                    class="w-6 h-6"
                    src={defaultPageItem.imageUrl}
                    alt={defaultPageItem.title}
                />
                <div class="text-xl md:text-2xl font-semibold">
                    {defaultPageItem.title}.
                </div>
            </div>
            <div class="text-2xl md:text-4xl">{defaultPageItem.subtitle}</div>
        </div>
    {/each}
</div>
<div
    class="mb-[10vh] min-h-[70vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 items-center-safe"
>
    {#each data.workListItems as workListItem}
        <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 place-self-center bg-green-300 p-4 m-4 rounded-2xl w-72 h-72"
        >
            <img
                class="w-12 md:w-16 h-auto col-span-full place-self-center"
                src={workListItem.workLogo}
                alt={workListItem.title}
            />
            <div
                class="tracking-widest text-xl md:text-2xl col-span-full place-self-center text-center font-bold"
            >
                {workListItem.title}.
            </div>
            <div class="col-span-full place-self-center text-xs">
                {diffYears(
                    workListItem.startDate,
                    workListItem.endDateOrPresent,
                )} years {#if workListItem.endDateOrPresent[0].toLowerCase() === "present"}and
                    running{/if}
            </div>
        </div>
    {/each}
</div>
