<template>
  <Transition name="modal">
    <div
      v-if="modelValue"
      class="modal"
    >
      <div class="modal__bg" />
      <div class="modal__box">
        <div class="modal__content">
          <BaseButton
            v-if="closeable"
            theme="transparent"
            pre-icon="cross-icon"
            class="modal__close"
            @click="$emit('update:model-value', false);"
          />
          <slot />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import BaseButton from "@/components/BaseButton.vue";

defineProps({
  closeable: {
    type: Boolean,
    default: true,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
});

defineEmits(['update:model-value']);
</script>

<style lang="scss">
.modal {
  z-index: 100;
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;

  &__bg {
    position: fixed;
    inset: 0;
    background-color: var(--color-background);
    opacity: 0.8;
  }

  &__box {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__content {
    position: relative;
    padding: 32px;
    background-color: var(--color-background);
    border: 1px solid var(--color-border);
  }

  &__close {
    position: absolute;
    top: 20px;
    right: 20px;
    color: var(--color-text-light);
    transform: translate(50%, -50%);
  }
}
</style>
