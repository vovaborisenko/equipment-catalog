<template>
  <label
    class="field"
    :class="classNames"
  >
    <span
      v-if="label"
      class="field__label"
    >{{ label }}</span>
    <input
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      class="field__input"
      :class="{
        'field__input--pre-icon': preIcon,
        'field__input--post-icon': postIcon,
      }"
    >
    <component
      :is="preIcon"
      v-if="preIcon"
      class="field__icon field__icon--pre"
    />
    <component
      :is="postIcon"
      v-if="postIcon"
      class="field__icon field__icon--post"
    />
  </label>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
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
  'field--disabled': props.disabled,
}));
</script>

<style lang="scss">
.field {
  position: relative;
  display: block;
  color: var(--color-text);

  &__label {
    display: block;
    margin-bottom: 7px;
  }

  &__input {
    display: block;
    width: 100%;
    height: 40px;
    padding: 0 9px;
    background: var(--color-background);
    border: 1px solid var(--color-border);
    border-radius: 2px;

    &::placeholder {
      color: var(--color-placeholder);
    }

    &:focus {
      border-color: var(--color-primary);
      transition: 0.2s;
    }
  }

  &__input--pre-icon {
    padding-left: 39px;
  }

  &__input--post-icon {
    padding-right: 39px;
  }

  &__icon {
    position: absolute;
    width: 24px;
    height: 24px;
    color: var(--color-border);
  }

  &__icon--pre {
    bottom: 9px;
    left: 8px;
  }

  &__icon--post {
    bottom: 9px;
    left: 8px;
  }
}
</style>
