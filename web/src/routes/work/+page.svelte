<script>
    let { data } = $props();
    function diff_years(startDate, endDate) {
        var dt1 = new Date(startDate);
        if
        var diff = dt2.getTime() - dt1.getTime();
        diff /= 1000 * 60 * 60 * 24; // Convert milliseconds to days
        return Math.abs(Math.round(diff / 365.25)); // Divide by average days in a year
    }
</script>

<div class="mt-[3vh] h-[15vh] flex justify-center items-center p-10">
    {#each data.defaultPageItems as defaultPageItem}
        <p class="tracking-widest text-4xl">
            <span class="text-2xl font-semibold flex items-center">
                <img
                    class="w-6 h-6"
                    src={defaultPageItem.imageUrl}
                    alt={defaultPageItem.title}
                />
                <span>{defaultPageItem.title}.</span></span
            ><br />{defaultPageItem.subtitle}
        </p>
    {/each}
</div>
<div
    class="min-h-[71vh] grid grid-cols-1 md:grid-cols-3 p-20 items-center"
>
    {#each data.workListItems as workListItem}
        <div
            class="grid grid-cols-1 md:grid-cols-3 items-center bg-green-300 p-4 m-4 rounded-2xl w-[85w] md:w-[25vw] h-[25vh]"
        >
            <img
                class="w-16 h-auto col-span-1"
                src={workListItem.workLogo}
                alt={workListItem.title}
            />
            <span class="tracking-widest text-2xl col-span-2"
                >{workListItem.title}.</span
            ><span class="col-span-full text-xs font-bold p-2"
                >{workListItem.startDate}&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;{workListItem.endDateOrPresent}</span
            >
        </div>
    {/each}
</div>
