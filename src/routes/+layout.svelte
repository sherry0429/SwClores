<script>
  // Your selected Skeleton theme:
  import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

  // This contains the bulk of Skeletons required styles:
  import '@skeletonlabs/skeleton/styles/all.css';

  // Finally, your application's global stylesheet (sometimes labeled 'app.css')
  import '../app.postcss';

  import { AppShell } from '@skeletonlabs/skeleton';
  import EmptyCard from '$lib/components/EmptyCard.svelte'
</script>


<AppShell>
	<svelte:fragment slot="header">
    <EmptyCard title="empty header"></EmptyCard>
  </svelte:fragment>
	<!-- <svelte:fragment slot="sidebarLeft">
    <EmptyCard desc="sidebarLeft"></EmptyCard>
  </svelte:fragment>
	<svelte:fragment slot="sidebarRight">
    <EmptyCard desc="sidebarRight"></EmptyCard>
  </svelte:fragment> -->
	<svelte:fragment slot="pageHeader">
    <EmptyCard title="Page header"></EmptyCard>
  </svelte:fragment>
	<!-- Router Slot -->
	<slot style/>
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">
    <EmptyCard title="pageFooter"></EmptyCard>
  </svelte:fragment>
	<svelte:fragment slot="footer">
    <EmptyCard title="footer"></EmptyCard>
  </svelte:fragment>
</AppShell>


<style>

</style>