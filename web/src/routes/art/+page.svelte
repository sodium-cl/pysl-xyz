<script>
    let { data } = $props();
    import { PortableText } from "@portabletext/svelte";
</script>

<div class="mt-[5vh] h-[15vh] flex justify-center items-center p-10">
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
    class="mb-[10vh] min-h-[70vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 md:p-8 items-center-safe"
>
    {#each data.artGalleryItems as artGalleryItem}
        <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 place-self-center bg-green-100 p-4 m-4 rounded-xl"
        >
            <img
                class="col-span-full"
                src='{artGalleryItem.artAssetURL}?fit=max&w=600'
                alt={artGalleryItem.title}
            />
            <div
                class="tracking-widest text-sm col-span-full place-self-center text-center font-bold"
            >
                <PortableText value={artGalleryItem.artDetails} />
            </div>
        </div>
    {/each}
</div>
