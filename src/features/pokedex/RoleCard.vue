<template>
    <div>
        <div class="role-top" style="width:90%;display:inline-block">
            <h3 style="display:inline">{{roleName}}</h3>
        </div>
        <div class="role-bottom" style="width:90%;display:inline-block">
            {{rolePower}}
        </div>
    </div>
</template>


<script>
    import Vue from 'vue'

    export default Vue.extend({
        name: 'role-card',
        props: {
            roleName: {
                type: String,
                required: true,
            },
        },
        data() {  
            return {
            }

        },
        computed: {
            rolePower: function() {
                return 1
            }
        }
    
    })
</script>

<style scoped>
  *{    
    font-family: "Courier New";
    font-size: 18;
  }
  .role-top {
    background-color: grey;
    border: 2px solid black;
    font-family: "Courier New";
    font-size: 18px;
    padding: 10px;
    box-sizing: border-box;
  }
  .role-bottom {
    background-color: lightgrey;
    border: 2px solid black;
    border-top: 0px solid black;
    font-family: "Courier New";
    font-size: 18px;
    padding: 5px;
    box-sizing: border-box;
    text-align: left;
  }
  .wrapper {
    display: flex;
    text-align: center;
  }
</style>