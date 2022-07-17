<template>
  <div class="list-item">
    <router-link
      :to="to"
      active-class="list-item__link--active"
      class="list-item__link"
    >
      <slot />
    </router-link>
    <BaseButton
      theme="transparent"
      pre-icon="pencil-icon"
      class="list-item__button"
      @click="$emit('click:edit')"
    />
  </div>
</template>

<script setup>
import BaseButton from '@/components/BaseButton.vue';

defineProps({
  to: {
    type: [String, Object],
    default: '',
  }
});

defineEmits(['click:edit']);
</script>

<style lang="scss">
.list-item {
  position: relative;

  &__link {
    position: relative;
    display: flex;
    align-items: center;
    height: 39px;
    margin-top: -1px;
    padding: 0 45px 0 18px;
    text-decoration: none;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    border: 1px solid var(--color-border);
    border-right-color: transparent;
    border-left-color: transparent;
    background-color: var(--color-background);
    color: var(--color-title);

    &:hover {
      background-color: var(--color-primary-light);
      transition: 0.2s;
    }
  }

  &__link--active {
    z-index: 1;
    border-color: var(--color-primary);
    background-color: var(--color-primary-light);
    transition: 0.2s;
  }

  &__link--active ~ &__button:hover {
    background-color: var(--color-background);
  }

  &__button {
    z-index: 1;
    position: absolute;
    top: 50%;
    right: 10px;
    color: var(--color-text-light);
    transform: translateY(-50%);
  }

  .box &:first-child &__link {
    margin-top: 0;
  }

  .box &:first-child &__link:not(&__link--active) {
    border-top-color: transparent;
  }
}
</style>
