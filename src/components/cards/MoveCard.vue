<template>
  <div class="move--wrapper" inline>
    <div class="move--header" v-bind:class="[type, move.category]">
      <span class="move--icon"><img :src="tierImage" /></span>
      <b>{{ move.name }} </b> ✦ {{ type }}<br />
      {{ move.action }}, {{ move.frequency }} ✦ {{ move.category }}
      <span v-if="(move.keywords)"> ✦ {{ move.keywords }}</span>
    </div>
    <div class="move--content" v-bind:class="[move.category]">
      <b>Targets:</b> {{ move.target }}
      <span v-if="(move.defense)"> ✦ vs {{ move.defense }}</span> <br />
      <div v-if="(move.damage)">
        <b>Damage:</b> {{ move.damage }}{{ damageDie }} {{ move.damagetype }}
        {{ type }} Damage
      </div>
      <div v-if="(move.hit)"><b>Hit:</b> {{ move.hit }}</div>
      <div v-if="(move.always)">
        <vue-simple-markdown
          class="move--format"
          :source="'**Always:** ' + move.always"
        />
      </div>
      <div v-if="(move.miss)">
        <vue-simple-markdown
          class="move--format"
          :source="'**Miss:** ' + move.miss"
        />
      </div>
      <div v-if="(move.critical)">
        <vue-simple-markdown
          class="move--format"
          :source="'**Critical or SE:** ' + move.critical"
        />
      </div>
      <div v-if="(move.boost)">
        <vue-simple-markdown
          class="move--format"
          :source="'**Boost:** ' + boostDamage + move.boost"
        />
      </div>
      <div v-if="(move.special)">
        <vue-simple-markdown
          class="move--format"
          :source="'**Special:** ' + move.special"
        />
      </div>
    </div>
    <div v-if="showA == true">
      <available :name="moveName" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import 'vue-simple-markdown/dist/vue-simple-markdown.css';
import allMoves from '@/assets/database/moves.json';
import basicAttacks from '@/assets/database/basicattacks.json';
import '@/styles/types.scss';
import Available from './Available.vue';

export default Vue.extend({
  name: 'move-card',
  props: {
    moveName: {
      type: String,
      required: true,
    },
    showA: {
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
    },
    basicDamage: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      allMoves,
      errMove: {
        name: this.moveName,
        tier: 1,
        type: 'Error',
        action: 'Error',
        category: 'Error',
        target: 'Error',
        hit: 'Move was not found',
      },
      basicAttacks,
    };
  },
  computed: {
    move: function () {
      if (this.basicType) {
        for (const mv of this.basicAttacks) {
          if (this.moveName.trim() == mv.name.trim()) {
            mv.damagetype = this.basicDamage;
            return mv;
          }
        }
      }
      for (const mv of this.allMoves) {
        if (this.moveName.trim() == mv.name.trim()) {
          return mv;
        }
      }
      return this.errMove;
    },
    tierImage: function () {
      return require('../../assets/tier' + this.move.tier + '.png');
    },
    boostDamage: function () {
      if (this.move.boostdmg) {
        return this.move.boostdmg + this.damageDie + '. ';
      }
      return '';
    },
    damageDie: function () {
      if (
        this.move.target.includes('Range') ||
        this.move.target.includes('Line') ||
        this.move.target.includes('Blast')
      ) {
        return this.range;
      }
      if (
        this.move.target.includes('Melee') ||
        this.move.target.includes('Pass') ||
        this.move.target.includes('Burst')
      ) {
        return this.melee;
      }
      return 6;
    },
    type: function () {
      if (this.basicType) {
        return this.basicType;
      }
      return this.move.type;
    },
  },
  components: {
    Available,
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
