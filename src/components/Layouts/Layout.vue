<script setup lang="ts">

</script>

<template>
<header><h1 class="text-gradient">GRIM</h1></header>
<main><slot></slot></main>
<footer>
  <small>Created by Mohanbe</small>
  <a href="https://www.github.com/andreumb" target="_blank">
    <img src="https://avatars.githubusercontent.com/u/49900605?v=4" alt="pfp">
    <p>AndreuMB</p>
    <i class="fa-brands fa-github"></i>
  </a>
  </footer>
</template>

<style scoped>
  header, footer, main {
    padding: 1rem;
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
  }

  main {
    flex: 1;
  }

  footer {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    padding: 3rem 0;
    padding-bottom: 3rem;
  }

  footer a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.3rem;
    padding-right: 0.5rem;
    background-color: var(--background-muted);
    border-radius: 4rem;
    border: 1px solid transparent;
    transition-duration: 200ms;
    text-decoration: none;
  }

  footer a:hover{
    border-color: var(--color-link);
  }

  footer a img {
    max-width: 30px;
    aspect-ratio: 1/1;
    border-radius: 100%;
  }

</style>
