<template>
<div>
      <v-dialog
        v-model="dialog"
        hide-overlay
      >
        <template v-slot:activator="{ on }">
          <v-btn
            color="red lighten-2"
            dark
            v-on="on"
          >
            About
          </v-btn>
        </template>

        <v-card>
          <v-card-title>About</v-card-title>
          <v-card-text style="text-align:left">
            Welcome to the PoryDex, a free tool designed to make it easier to play Pokemon  Odyssey! Click on one of the buttons on the main page to get started!

            Big thanks to the developers of the Pokemon Odyssey system for making the system, and to the developers of COMP/CON, the digital sheet for Lancer, for inspiration and guidance!
            <br> <br>
            <a href="https://github.com/Arcranmon/porydex">Click here for more information and the source!</a>
          </v-card-text>
        </v-card>
      </v-dialog>
 </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    data () {
      return {
        dialog: false
      }
    }
  }
</script>