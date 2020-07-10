<template>
  <v-dialog>
    <v-btn flat slot="activator" style="border: 1px solid black;">About</v-btn>
    <v-card>
      <v-card-title>
        About
      </v-card-title>
      Welcome to the PoryDex, a free tool made to help play Pokemon Tabletop Odyssey! Click on one of the buttons on the main menu to get started and view Pokemon, Abilities, Moves, and Roles!
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false
      }
    }
  }
</script>