<template>
  <div id="app">
    <div class="header">
      <div>Gustavo's Test</div>
    </div>

    <router-view />

    <div class="footer">
      <div>
        E-mail:
        <a href="mailto:gustavo.fe.soares@gmail.com">
          gustavo.fe.soares@gmail.com
        </a>
      </div>

      <div>
        phone number:
        <a href="tel:+5551984700974">
          (51)98470-0974
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333333;

  .header,
  .footer {
    background-color: white;
    padding: 30px 0px;
  }

  .header {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 25px;

    div {
      max-width: 950px;
      margin-left: auto;
      margin-right: auto;
      padding-left: 15px;
      color: #333333;
    }
  }

  .footer {
    margin-top: 25px;
    text-align: center;

    div a {
      color: #333333;
      font-weight: bold;
      text-decoration: none;
    }
  }
}
</style>
