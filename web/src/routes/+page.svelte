<script>
    let { data } = $props();
</script>

<div class="mt-[5vh] h-[60vh] flex justify-center items-center p-10">
    <p class="tracking-widest text-4xl flex flex-col">
        <span class="text-2xl font-semibold flex justify-center items-center">
            <span class="px-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    />
                </svg>
            </span>
            <span class="text-center">hi, i am punyasloka.</span></span
        ><span class="text-center"
            ><br />site reliability engineer, hobbyist designer,<br />cinema
            curator for friends.</span
        >
    </p>
</div>
<div class="h-[30vh] flex flex-col justify-top items-center p-20">
    <span class="flex w-32 h-20">
        {#each data.socialMediaNavItems as socialMediaNavItem}
            {#each socialMediaNavItem.path as path, index}
                <a class="px-2 w-full" href={path} target="_blank"
                    ><img
                        class="w-12"
                        src={socialMediaNavItem.imageURL[index]}
                        alt={socialMediaNavItem.name[index]}
                    /></a
                >
            {/each}
        {/each}
    </span>
</div>
