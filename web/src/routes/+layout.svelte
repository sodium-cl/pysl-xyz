<script>
    import "../app.css";
    /** @type {{children?: import('svelte').Snippet}} */
    let { data, children } = $props();
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
</svelte:head>
<div class="bg-emerald-400 font-display">
    <header class="flex justify-between items-center px-2 py-2 relative">
        <a
            href="/"
            class="fixed font-brand font-bold text-2xl tracking-widest px-2 flex justify-center items-center top-0 left-0 right-0 w-screen h-[5vh] bg-emerald-400"
            ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5"
            >
                <path
                    d="M4.75 8a.75.75 0 0 0-.75.75v2.5c0 .414.336.75.75.75H9.5a.75.75 0 0 0 .75-.75v-2.5A.75.75 0 0 0 9.5 8H4.75Z"
                />
                <path
                    fill-rule="evenodd"
                    d="M3.25 5A2.25 2.25 0 0 0 1 7.25v5.5A2.25 2.25 0 0 0 3.25 15h12.5A2.25 2.25 0 0 0 18 12.75v-1.085a1.5 1.5 0 0 0 1-1.415v-.5a1.5 1.5 0 0 0-1-1.415V7.25A2.25 2.25 0 0 0 15.75 5H3.25ZM2.5 7.25a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-.75.75H3.25a.75.75 0 0 1-.75-.75v-5.5Z"
                    clip-rule="evenodd"
                />
            </svg>
            <span class="px-2">pysl</span></a
        >
        <nav
            class="fixed flex justify-center items-center tracking-widest font-medium bottom-0 left-0 right-0 w-screen h-[10vh] bg-emerald-400"
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
