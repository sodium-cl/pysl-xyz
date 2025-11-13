<script>
    let { data } = $props();
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
                <div class="text-center">{homePageItem.introText}</div>
            </div>
            <div class="text-center text-xl mt-12">
               {#each homePageItem.highlightItemNames as highlightItemName, index}
                   {#if (index+1) % 2 === 0}<div class="my-2 font-mono italic">{highlightItemName}</div>
                   {:else if (index+1) % 3 === 0}<div class="my-2 font-mono font-bold">{highlightItemName}</div>
                   {:else}<div class="my-2 font-brand uppercase">{highlightItemName}</div>
                   {/if}
                   <div class="flex justify-center items-center"><img
                        class="w-5 h-5"
                        src={homePageItem.highlightItemImages[index]}
                        alt={highlightItemName}
                    /></div>
                {/each}
            </div>
        </div>
    {/each}
</div>
<div class="h-[30vh] flex flex-col justify-top items-center">
    <span class="flex h-full justify-center items-center">
        {#each data.socialMediaNavItems as socialMediaNavItem}
            {#each socialMediaNavItem.path as path, index}
                <a class="px-2 w-full" href={path} target="_blank"
                    ><img
                        class="w-9 h-9"
                        src={socialMediaNavItem.imageURL[index]}
                        alt={socialMediaNavItem.name[index]}
                    /></a
                >
            {/each}
        {/each}
    </span>
</div>
