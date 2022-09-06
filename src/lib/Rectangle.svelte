<script>
    export let is_filled = false;
</script>


<svg class='aspect-square'>
    <rect x=0 y=0 height=100% width=100% style='stroke:#000000;stroke-width:2;fill:{is_filled ? 'none' : '1'}'/>
</svg>