<script>
    let desc = 'This Content should be replaced later'
    export let title = ''
    let card_desc = ''
    if (title != '') {
        card_desc = title
    } else {
        card_desc = desc
    }

    let color = Math.ceil(Math.random()*100);
    let color_str = 'variant-glass-success'
    if (color <= 30){
        color_str = 'variant-glass-secondary'
    }else if (color <= 60){
        color_str = 'variant-glass-surface'
    }else if (color <= 100){
        color_str = 'variant-glass-tertiary'
    }

</script>


<div class="block card card-hover p-4 {color_str} empty_card">
    {card_desc}
</div>

<style>
.empty_card {
  text-align: center;
  margin: 5px;
  width: 100%;
  height: 100%;
}

</style>