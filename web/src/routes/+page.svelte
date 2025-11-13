<script>
    let { data } = $props();
    import { PortableText } from "@portabletext/svelte";
</script>

<div class="mt-[5vh] h-[55vh] flex justify-center items-center p-10">
    {#each data.homePageItems as homePageItem}
        <div class="tracking-widest text-4xl flex flex-col">
            <div
                class="text-2xl font-semibold flex justify-center items-center"
            >
                <div class="px-2">
                    <img
                        class="w-6 h-6"
                        src={homePageItem.imageUrl}
                        alt={homePageItem.title}
                    />
                </div>
                <div class="text-center">{homePageItem.subtitle}</div>
            </div>
            <div class="text-center text-xl mt-12">
                <PortableText value={homePageItem.details} />
            </div>
        </div>
    {/each}
</div>
<div class="h-[30vh] flex flex-col justify-top items-center p-20">
    <span class="flex h-20">
        {#each data.socialMediaNavItems as socialMediaNavItem}
            {#each socialMediaNavItem.path as path, index}
                <a class="px-2 w-full" href={path} target="_blank"
                    ><img
                        class="w-6 h-6"
                        src={socialMediaNavItem.imageURL[index]}
                        alt={socialMediaNavItem.name[index]}
                    /></a
                >
            {/each}
        {/each}
    </span>
</div>
