<script>
    let { data } = $props();
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
    class="h-[71vh] flex flex-col md:flex-row justify-center items-center p-20"
>
    {#each data.workListItems as workListItem}
        <div
            class="flex flex-col items-start bg-green-300 p-4 m-4 rounded-2xl w-[85w] md:w-[20vw] h-[25vh]"
        >
            <img
                class="w-24 p-2 h-auto"
                src={workListItem.workLogo}
                alt={workListItem.title}
            />
            <span class="tracking-widest text-4xl p-2 w-full"
                >{workListItem.title}.</span
            ><span class="text-xs font-bold p-2"
                >{workListItem.startDate}&nbsp;&nbsp;&nbsp;---&nbsp;&nbsp;&nbsp;{workListItem.endDateOrPresent}</span
            >
        </div>
    {/each}
</div>
