<template>
  <div class="ability--wrapper" inline>
    <div class="ability--header">
      <h3 style="display: inline;">{{ ability.name }}</h3>
      <br />
      <span v-if="(ability.action)">{{ ability.action }}, </span>
      {{ ability.frequency }}
    </div>
    <div class="ability--content">
      <span v-if="(ability.trigger)"
        ><b>Trigger:</b> {{ ability.trigger }} <br />
        <br
      /></span>
      <vue-simple-markdown
        :source="abilityEffect"
        class="ability--format"
      ></vue-simple-markdown>
    </div>
    <div v-if="showA == true">
      <available :name="abilityName" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import allAbilities from '@/assets/database/abilities.json';
import Available from './Available';

export default Vue.extend({
  name: 'ability-card',
  props: {
    abilityName: {
      type: String,
      required: true,
    },
    showA: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      allAbilities,
      errAbility: {
        name: this.abilityName,
        frequency: 'Error',
        effect: 'Ability was not found',
      },
    };
  },
  computed: {
    ability: function () {
      var abls = [];
      for (const arr of this.allAbilities) {
        if (this.abilityName == arr.name) {
          return arr;
        }
      }
      return this.errAbility;
    },
    abilityEffect: function () {
      return '**Effect:** ' + this.ability.effect;
    },
  },
  components: {
    Available,
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
}
.ability--content {
  background-color: $color--off-white;
  border: $border--black-standard;
  border-top: 0px solid black;
  padding: $space--xs;
}
.ability--format {
  white-space: normal;
  font-family: $font--standard;
  text-align: left;
}
</style>
