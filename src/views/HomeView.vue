<script setup lang="ts">
import { DONATION_URL } from '@/constants';
import { RouterLink } from 'vue-router';
</script>

<template>
  <main>
    <h1>Jaxon's Badgers</h1>
    <p>Our mission is to provide an inclusive environment for children and adults with disabilities to be active, build relationships, and improve their quality of life through adaptive fitness programming.</p>
    <div class="link-container">
      <a class="donate-link" :href="DONATION_URL" target="_blank">Donate</a>
      <RouterLink to="/sponsors" class="sponsor-link">BECOME A SPONSOR</RouterLink>
    </div>
  </main>
</template>

<style scoped>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    gap: 2rem;
    margin: 1rem;
    max-width: 1200px;
  }

  h1 {
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    color: var(--color-heading);
    text-align: center;
  }

  p {
    text-align: center;
    font-size: 1rem;
  }

  .link-container {
    display: flex;
    gap: 1rem;
  }

  a {
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 999px;
    text-decoration: none;
  }

  .donate-link {
    color: var(--vt-c-white);
    background-color: var(--color-primary);
  }

  .sponsor-link {
    color: var(--color-primary);
    border: var(--color-primary) 2px solid;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 4rem;
    }

    p {
      font-size: 1.5rem;
    }

    a {
      padding: 0.5rem 2rem;
      font-size: 1.5rem;
    }
  }

  @media (hover: hover) {
    .donate-link:hover {
      transform: scale(1.1);
      transition: transform 0.3s;
    }

    .sponsor-link:hover {
      background-color: var(--vt-c-white);
      transition: background-color 0.3s;
    }
  }
</style>
