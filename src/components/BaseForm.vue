<template>
  <form
    class="form"
    @submit.prevent="$emit('submit', $event)"
  >
    <slot />

    <div
      v-if="$slots.actions"
      class="form__actions"
    >
      <slot name="actions" />
    </div>
  </form>
</template>

<script setup>
defineEmits(['submit']);
</script>

<style lang="scss">
.form {
  &__field + &__field {
    margin-top: 16px;
  }

  &__actions {
    display: flex;
    align-items: center;
    justify-content: end;
    margin-top: 32px;
  }

  &__action + &__action {
    margin-left: 8px;
  }
}
</style>
