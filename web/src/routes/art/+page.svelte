<script>
    let { data } = $props();
    import InProgressBlock from "$lib/components/InProgressBlock.svelte";
</script>

<div class="mt-[5vh] h-[30vh] flex justify-center items-center p-10">
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
<InProgressBlock />
