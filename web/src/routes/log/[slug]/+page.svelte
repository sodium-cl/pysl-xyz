<script>
  /** @type {{data: any}} */
  let { data } = $props();
  let style = function styleParser(styles) {
    let styleData = "";
    if (styles.includes("em")) {
      styleData += " italic";
    }
    if (styles.includes("strong")) {
      styleData += " font-bold";
    }
    return styleData;
  };
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

<div
  class="mt-[5vh] min-h-[90vh] flex flex-col justify-top items-center px-20"
>
<div class="flex flex-col md:flex-row justify-top items-center p-10">
  <img class="h-[10vh] md:h-[20vh] px-5" src={data.post.coverImageURL} alt="cover image of {data.post.title}" />
  <p class="tracking-widest text-4xl flex flex-col justify-start px-5">
    <span class="text-2xl font-semibold flex items-center"
      ><svg
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
          d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0 1 12 12.75Zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 0 1-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 0 0 2.248-2.354M12 12.75a2.25 2.25 0 0 1-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 0 0-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 0 1 .4-2.253M12 8.25a2.25 2.25 0 0 0-2.248 2.146M12 8.25a2.25 2.25 0 0 1 2.248 2.146M8.683 5a6.032 6.032 0 0 1-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0 1 15.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 0 0-.575-1.752M4.921 6a24.048 24.048 0 0 0-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 0 1-5.223 1.082"
        />
      </svg>
      log.</span
    ><span class="my-4">{data.post.title}</span>
  </p>
  </div>
  <div class="flex flex-col justify-between border-2 border-black p-4">
    <span class="my-2 text-sm font-medium">{date(data.post.publishedDate)}</span
    >
    {#each data.post.body as postblock}
      {#if postblock.style == "normal"}
        <div>
          {#each postblock.children as children}
            {#if children._type == "span"}
              {#if postblock.markDefs.length}
                {#each postblock.markDefs as markDef}
                  {#if children.marks.includes(markDef._key)}
                    <a
                      href={markDef.href}
                      target="_blank"
                      class="text-sm font-semibold underline decoration-dashed"
                      >{children.text}</a
                    >
                  {:else}
                    <span class="text-sm font-semibold {style(children.marks)}">
                      {children.text}</span
                    >
                  {/if}
                {/each}
              {:else if children.text == ""}
                <br />
              {:else}
                <span class={style(children.marks)}> {children.text}</span>
              {/if}
            {/if}
          {/each}
        </div>
      {/if}
    {/each}
    <p class="tracking-widest text-xl text-sans"></p>
  </div>
</div>
