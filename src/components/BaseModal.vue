<template>
  <div class="modal">
    <div class="modal__bg" />
    <div class="modal__box">
      <div class="modal__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
.modal {
  display: flex;
  justify-content: center;

  &__box {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
