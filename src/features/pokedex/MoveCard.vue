<template>
        <div class="ability-top" style="width:95%;">
          <h3 style="display:inline;">{{move.name}}</h3><br>
          {{move.type}}
        </div>
</template>


<script>
    import Vue from 'vue'

    export default Vue.extend({
        name: 'move',
        props: {
            move: {
                type: Array,
                required: true,
            },
        },    
    })
</script>