<script>
    /** @type {{data: any}} */
    let { data } = $props();
    let date = function dateParser(date) {
        const parsedDate = new Date(date);
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
        };
        return parsedDate.toLocaleDateString(undefined, options);
    };
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
<div class="min-h-[60vh] flex justify-center items-start">
    <div class="flex flex-col border-2 border-black py-4">
        {#each data.posts as post}
            <img
                class="h-28 px-4"
                src={post.coverImageURL}
                alt="cover image of {post.title}"
            />
            <div class="px-4 flex flex-col justify-between">
                <a
                    href="/log/{post.slug}"
                    class="text-4xl font-sans font-semibold">{post.title}</a
                >
                <div>{date(post.publishedDate)}</div>
            </div>
        {/each}
    </div>
</div>
