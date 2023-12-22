<template>
    <div class="footer-container">
        <div class="footer-copyright">
            <p>&copy; 2023, YWL, SML, JSK, BMK. All Right Reserved</p>
        </div>
        <div class="footer-link">
            <a href="https://github.com/djsumin/DECOBOOK-BE">GitHub</a>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.footer-container {
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  background-color: transparent;
}
.footer-link {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-left: 10px; 
}
a {
  text-decoration: none;
}
</style>