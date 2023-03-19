<script lang="ts">
    // css generator from https://grid.layoutit.com/
    import type { PageData } from "./$types";
    import EmptyCard from '$lib/components/EmptyCard.svelte'
    // data returned from +page.server.js
    export let data: PageData;
</script>

<div>
    <div class="base_content">
        <div class="wiki-Name">
            <EmptyCard title="summoners war wiki"></EmptyCard>
        </div>
        <div class="wiki_tabs">
            <EmptyCard title="chapters_lists"></EmptyCard>
        </div>
        <div class="page_contents">
            <EmptyCard title="page_contents"></EmptyCard>
        </div>
        <div class="broadcast">
            <EmptyCard title="broadcast"></EmptyCard>
        </div>
        <div class="page_tabs">
            <EmptyCard title="page_tabs"></EmptyCard>
        </div>
        <div class="page_comments">
            <EmptyCard title="page_comments"></EmptyCard>
        </div>
    </div>
</div>


<style>
    .base_content {
        display: grid; 
        grid-auto-rows: 1fr; 
        grid-template-columns: 0.4fr 2.3fr 0.3fr; 
        grid-template-rows: 0.3fr 2.3fr 0.5fr; 
        gap: 10px 10px; 
        margin: 10px;
        width: 80wh; 
        height: 80vh;
    }

    .wiki-Name {
        grid-area: 1 / 1 / 2 / 2;

    }

    .wiki_tabs {
        grid-area: 2 / 1 / 4 / 2;
    }

    .page_contents {
        grid-area: 1 / 2 / 3 / 3;
    }

    .broadcast {
        grid-area: 1 / 3 / 2 / 4;
    }

    .page_tabs {
        grid-area: 2 / 3 / 3 / 4;
    }

    .page_comments {
        grid-area: 3 / 2 / 4 / 4;
    }
</style>
