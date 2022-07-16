<template>
  <button
    :type="type"
    :disabled="disabled"
    class="button"
    :class="classNames"
  >
    <component
      :is="preIcon"
      v-if="preIcon"
      class="button__icon button__icon--pre"
    />
    <span
      v-if="$slots.default"
      class="button__text"
    ><slot /></span>
    <component
      :is="postIcon"
      v-if="postIcon"
      class="button__icon button__icon--post"
    />
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'button',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  theme: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'transparent'].includes(value)
  },
  preIcon: {
    type: String,
    default: '',
  },
  postIcon: {
    type: String,
    default: '',
  },
});

const classNames = computed(() => ({
  [`button--${props.theme}`]: true,
  'button--disabled': props.disabled,
}));
</script>

<style lang="scss">
.button {
  display: inline-flex;
  align-items: center;
  min-height: 30px;
  padding: 3px;
  border: 0;
  border-radius: 2px;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  transition: opacity 0.2s;

  &--primary {
    background-color: var(--color-primary);
    color: var(--c-white);

    &:hover {
      filter:brightness(0.8);
      transition: 0.2s;
    }
  }

  &--secondary {
    border: 1px solid;
    background-color: var(--color-background);
    color: var(--color-text-light);

    &:hover {
      background-color: var(--color-primary-light);
      transition: 0.2s;
    }
  }

  &--transparent {
    border: 0;
    background-color: transparent;

    &:hover {
      background-color: var(--color-primary-light);
      transition: 0.2s;
    }
  }

  &--disabled:disabled {
    opacity: 0.6;
    pointer-events: none;
  }

  &__icon {
    width: 24px;
    height: 24px;
    flex: none;
  }

  &__text {
    margin: 0 6px;
  }
}
</style>
