<script>
  /** @type {{ items: string[], columns?: boolean }} */
  let { items, columns = false } = $props();
</script>

<ul
  class="space-y-2"
  class:grid={columns}
  class:sm:grid-cols-2={columns}
  class:gap-x-6={columns}
  class:space-y-0={columns}
  class:gap-y-2={columns}
>
  {#each items as item}
    <li class="flex items-start gap-3">
      <span class="mt-1.5 w-2 h-2 rounded-full bg-primary-500 shrink-0"></span>
      <span class="text-neutral-700">{item}</span>
    </li>
  {/each}
</ul>
