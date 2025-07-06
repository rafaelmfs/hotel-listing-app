<template>
  <div class="page-layout" >
    <router-view />
  </div>
</template>

<style lang="scss">
  .page-layout{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;

    padding: 2rem 2rem 0;

    background-color: $primary-100;
  }
</style>
