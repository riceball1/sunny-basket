<script>
    import { onMount } from 'svelte';

    export let target;

    onMount(() => {
        if (target == undefined) {
            target = "It was undefinded!";
        }
    })
</script>

<div class="container max-width">
    <h1 class="italic text-blue-700">Container</h1>
    <p>{target}</p>
</div>


