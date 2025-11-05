<script>
    let { data } = $props();
    import { PortableText } from "@portabletext/svelte";
</script>

<div class="mt-[5vh] h-[60vh] flex justify-center items-center p-10">
    {#each data.homePageItems as homePageItem}
        <p class="tracking-widest text-4xl flex flex-col">
            <span
                class="text-2xl font-semibold flex justify-center items-center"
            >
                <span class="px-2">
                    <img class="w-6 h-6" src={homePageItem.imageUrl} alt={homePageItem.title} />
                </span>
                <span class="text-center">{homePageItem.subtitle}</span></span
            ><span class="text-center"
                ><br /><PortableText value={homePageItem.details} /></span>
        </p>
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
