<script>
    import "../app.css";
    /** @type {{children?: import('svelte').Snippet}} */
    let { data, children } = $props();
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <title>P Y S L</title>
</svelte:head>
<div class="bg-emerald-400 font-display">
    <header class="flex justify-between items-center px-2 py-2 relative">
        {#each data.brandNavItems as brandNavItem}
            {#each brandNavItem.path as brandNavItemPath, index}
                <a
                    href={brandNavItemPath}
                    class="fixed font-brand font-bold text-2xl tracking-widest px-2 flex justify-center items-center top-0 left-0 right-0 w-screen h-[5vh] bg-emerald-400"
                >
                    <img
                        class="w-5 h-5"
                        src={brandNavItem.imageURL[index]}
                        alt={brandNavItem.name[index]}
                    />
                    <span class="px-2">{brandNavItem.name[index]}</span></a
                >
            {/each}
        {/each}
        <nav
            class="fixed flex justify-center items-center tracking-widest font-medium bottom-0 left-0 right-0 w-screen h-[10vh] bg-emerald-500"
        >
            {#each data.siteNavItems as siteNavItem}
                {#each siteNavItem.path as siteNavItemPath, index}
                    <a href={siteNavItemPath} class="flex items-center px-2">
                        <img
                            class="w-6 h-6"
                            src={siteNavItem.imageURL[index]}
                            alt={siteNavItem.name[index]}
                        />
                        <span class="text-xl">{siteNavItem.name[index]}</span
                        ></a
                    >{/each}
            {/each}
        </nav>
    </header>
    {@render children?.()}
</div>
