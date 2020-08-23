<template>
  <div class="role--wrapper">
    <div class="d-flex flex-row">
      <v-card height="100%" outline flat tile>
        <div class="role--icon" v-bind:class="[role.Role]">
          <img :src="role.Image" max-width="80%" />
        </div>
      </v-card>
      <h3 class="role--header">{{ role.Name }}</h3>
    </div>
    <div class="role--content text-center font-italic">{{ role.Summary }}</div>
    <v-card outline flat tile>
      <div class="role--content">
        <b>HP:</b>
        {{ role.HP }}
        <br />
        <b>Defenses:</b>
        {{ role.Def1 }}, {{ role.Def2 }}, {{ role.Def3 }}
        <br />
        <b>Initiative Mod:</b>
        {{ role.Init }}
        <br />
        <h3 class="text-center">{{ role.Name }} Abilities</h3>
        <span v-if="role.Ability1 != ''">
          <b>{{ role.Ability1 }}:</b>
          {{ role.Ability1Effect }}
          <br />
        </span>
        <span v-if="role.Ability2 != ''">
          <b>{{ role.Ability2 }}:</b>
          {{ role.Ability2Effect }}
          <br />
        </span>
        <span v-if="role.Ability3 != ''">
          <b>{{ role.Ability3 }}:</b>
          {{ role.Ability3Effect }}
          <br />
        </span>
        <span v-if="role.Ability4 != ''">
          <b>{{ role.Ability4 }}:</b>
          {{ role.Ability4Effect }}
          <br />
        </span>
      </div>
    </v-card>
    <div v-if="showA == true">
      <available :name="role.Name" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Available from './Available';
import { Role } from '@/class';

export default Vue.extend({
  name: 'role-card',
  props: {
    role: {
      type: Role,
      required: true,
    },
    showA: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  components: {
    Available,
  },
});
</script>

<style scoped lang="scss">
.role--wrapper {
  font-family: $font--standard;
}

.role--header {
  align-items: center;
  background-color: grey;
  border: $border--black-standard;
  display: flex;
  font-size: $font-size--l;
  padding: $space--m;
  width: 100%;
}
.role--content {
  background-color: $color--grey-light;
  border: $border--black-standard;
  border-top: 0px solid black;
  padding: $space--xs;
  text-align: left;
}
.role--icon {
  align-items: center;
  border: $border--black-standard;
  border-right: 0;
  display: flex;
  height: 6em;
  justify-content: center;
  width: 6em;
}
.DPS {
  background-color: $color--dps;
}
.Tank {
  background-color: $color--tank;
}
.Support {
  background-color: $color--support;
}
</style>
