<template>
  <div class="move--wrapper" inline>
    <div class="move--header" v-bind:class="[move.Type, move.Category]">
      <span class="move--icon"><img :src="move.TierImage" /></span>
      <b>{{ move.Name }} </b> ✦ {{ move.Type }}<br />
      {{ move.Action }}, {{ move.Frequency }} ✦ {{ move.Category }}
      <span v-if="(move.HasKeywords)"> ✦ {{ move.Keywords }}</span>
    </div>
    <div class="move--content" v-bind:class="[move.Category]">
      <b>Targets:</b> {{ move.Target }}
      <span v-if="(move.TargetsDefense)"> ✦ vs {{ move.Defense }}</span> <br />
      <div v-if="(move.DamageDealing)">
        <b>Damage:</b> {{ move.Damage }}{{ damageDie }} {{ move.DamageType }}
        {{ move.Type }} Damage
      </div>
      <div v-if="(move.HasHit)"><b>Hit:</b> {{ move.Hit }}</div>
      <div v-if="(move.HasAlways)">
        <vue-simple-markdown
          class="move--format"
          :source="'**Always:** ' + move.Always"
        />
      </div>
      <div v-if="(move.HasMiss)">
        <vue-simple-markdown
          class="move--format"
          :source="'**Miss:** ' + move.Miss"
        />
      </div>
      <div v-if="(move.HasCritical)">
        <vue-simple-markdown
          class="move--format"
          :source="'**Critical or SE:** ' + move.Critical"
        />
      </div>
      <div v-if="(move.HasBoost)">
        <vue-simple-markdown
          class="move--format"
          :source="'**Boost:** ' + boostDamage + move.Boost"
        />
      </div>
      <div v-if="(move.HasSpecial)">
        <vue-simple-markdown
          class="move--format"
          :source="'**Special:** ' + move.Special"
        />
      </div>
    </div>
    <div v-if="showA == true">
      <available :name="move.Name" />
    </div>
    <div v-if="showUses == true && move.MaxUses > 0">
      <uses :input="move" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import 'vue-simple-markdown/dist/vue-simple-markdown.css';
import '@/styles/types.scss';
import { store } from '@/store';
import { Move } from '@/class';
import Available from './Available.vue';
import Uses from './Uses.vue';

export default Vue.extend({
  name: 'move-card',
  props: {
    move: {
      type: Move,
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
    melee: {
      type: Number,
      required: false,
      default: 6,
    },
    range: {
      type: Number,
      required: false,
      default: 6,
    },
    basicType: {
      type: String,
      required: false,
      default: '',
    },
    basicDamage: {
      type: String,
      required: false,
    },
  },
  computed: {
    boostDamage: function () {
      if (this.move.HasBoostDamage) {
        return this.move.BoostDamage + this.damageDie + '. ';
      }
      return '';
    },
    damageDie: function () {
      if (this.move.IsRanged) {
        return this.range;
      }
      if (this.move.IsMelee) {
        return this.melee;
      }
      return 6;
    },
  },
  components: {
    Available,
    Uses,
  },
});
</script>

<style scoped lang="scss">
.move--wrapper {
  font-family: $font--standard;
  color: black;
}
.move--header {
  border: $border--black-standard;
  text-align: left;
  font-size: $font-size--l;
  padding: $space--xs;
  width: 100%;
}
.move--content {
  background-color: $color--off-white;
  border: $border--black-standard;
  border-top: 0px solid black;
  padding: $space--xs;
  text-align: left;
  width: 100%;
}
.move--format {
  white-space: normal;
  font-family: $font--standard;
  font-size: $font-size--m;
  text-align: left;
}
.move--icon {
  float: right;
}
.Maneuver {
  border-left: 5px solid $color--maneuver;
}
.Strike {
  border-left: 5px solid $color--strike;
}
.Trick {
  border-left: 5px solid $color--trick;
}
</style>
