<script lang="ts">
    import type { PageData } from './$types'
    // data returned from +page.server.js
    export let data: PageData
</script>
  

<h1>Here is page data</h1>
<span></span>
{#each data.users as user}
    <h2>{user.username}</h2>
{/each}
