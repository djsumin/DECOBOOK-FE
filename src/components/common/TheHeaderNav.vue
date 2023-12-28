<template>
    <div class="header-container">
        <div>
            <RouterLink :to="{name: 'diary'}">다이어리</RouterLink> | 
            <RouterLink :to="{name: 'ledger'}">가계부</RouterLink>
        </div>
        <RouterLink to="/" class="logo"><img src="../../../assets/decobook_logo.png" alt=""></RouterLink>
        <div>
            <button>LOGOUT</button>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
a {
  text-decoration: none;
}
.header-container {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 10px;
}
img {
    width: 300px;
    height: 100px;
}

</style>