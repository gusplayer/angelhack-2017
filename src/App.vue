<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  *{
    padding: 0px;
    margin: 0px;
  }
  .screen-padding{
    padding: 30px;
  }
  .input{
    max-width: 300px;
    width: 100%;
    border-style: none;
    border: 1px solid #FFF;
    padding: 10px;
    margin: 10px;
    background-color: transparent;
    color: #FFF;
  }
  .input::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: #FFF;
  }
  .input::-moz-placeholder { /* Firefox 19+ */
    color: #FFF;
  }
  .input:-ms-input-placeholder { /* IE 10+ */
    color: #FFF;
  }
  .input:-moz-placeholder { /* Firefox 18- */
    color: #FFF;
  }

  .btnAction{
    color: #FFF;
    background-color: red;
    text-decoration: none;
    padding: 10px 60px;
    border-radius: 25px;
  }
</style>
