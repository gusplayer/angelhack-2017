<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
  *{
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  .screen-padding{
    padding: 30px;
  }
  .input{
    max-width: 300px;
    width: 100%;
    border-style: none;
    padding: 20px;
    margin: 2px;
    background-color: #fbfaff;
  }
  .input::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: black;
  }
  .input::-moz-placeholder { /* Firefox 19+ */
    color: black;
  }
  .input:-ms-input-placeholder { /* IE 10+ */
    color: black;
  }
  .input:-moz-placeholder { /* Firefox 18- */
    color: black;
  }

  .btnAction{
    color: #1b6544;
    border-style: none;
    background-color: #D6F6B5;
    text-decoration: none;
    padding: 10px 60px;
    border-radius: 25px;
    outline: none;
    font-weight: bold;
    font-size: 18px;
    box-shadow: 0px 10px 10px -3px rgba(0,0,0,0.08);
  }

  .light{
    font-weight: lighter;
  }
</style>
