<script>
  let { data } = $props();
  import InProgressBlock from "$lib/components/InProgressBlock.svelte";
</script>
<div class="mt-[5vh] h-[30vh] flex justify-center items-center p-10">
{#each data.defaultPageItems as defaultPageItem}
<p class="tracking-widest text-4xl"><span class="text-2xl font-semibold flex items-center">
<img class="w-6 h-6" src={defaultPageItem.imageUrl} alt={defaultPageItem.title} />
<span>{defaultPageItem.title}.</span></span><br/>{defaultPageItem.subtitle}</p>
{/each}
</div>
<InProgressBlock />