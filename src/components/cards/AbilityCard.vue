<template>
  <div class="ability--wrapper" inline>
    <div class="ability--header">
      <h3 style="display: inline;">{{ ability.Name }}</h3>
      <br />
      <span v-if="(ability.Action.length > 0)">{{ ability.Action }}, </span>
      {{ ability.Frequency }}
    </div>
    <div class="ability--content">
      <span v-if="(ability.Trigger.length > 0)"
        ><b>Trigger:</b> {{ ability.Trigger }} <br />
        <br
      /></span>
      <vue-simple-markdown
        :source="ability.EffectText"
        class="ability--format"
      ></vue-simple-markdown>
    </div>
    <div v-if="showA == true">
      <available :name="ability.Name" />
    </div>
    <div v-if="showUses == true && ability.MaxUses > 0">
      <uses :input="ability" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Available from './Available';
import Uses from './Uses';
import { Ability } from '@/class';

export default Vue.extend({
  name: 'ability-card',
  props: {
    ability: {
      type: Ability,
      required: true,
    },
    showA: {
      type: Boolean,
      required: false,
      default: false,
    },
    showUses: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  components: {
    Available,
    Uses,
  },
});
</script>

<style scoped lang="scss">
.ability--wrapper {
  font-family: $font--standard;
}
.ability--header {
  background-color: $color--ability-header;
  border: $border--black-standard;
  font-size: $font-size--l;
  padding: $space--xs;
  color: black;
}
.ability--content {
  background-color: $color--off-white;
  border: $border--black-standard;
  border-top: 0px solid black;
  padding: $space--xs;
  color: black;
}
.ability--format {
  white-space: normal;
  font-family: $font--standard;
  font-size: $font-size--m;
  text-align: left;
  color: black;
}
</style>
