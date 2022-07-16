<template>
  <div class="box">
    <div class="box__head">
      <div class="box__title">
        {{ title }}
      </div>
      <div class="box__actions">
        <BaseButton pre-icon="plus-icon" />
        <slot name="actions" />
      </div>
    </div>
    <div class="box__content">
      <slot />
    </div>
  </div>
</template>

<script setup>
import BaseButton from './BaseButton.vue';
defineProps({
  title: {
    type: String,
    required: true,
  }
})
</script>

<style lang="scss">
.box {
  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    padding: 0 9px 0 19px;
  }

  &__title {
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    color: var(--color-heading)
  }

  &__actions {
    display: flex;
    align-items: center;
  }

  &__content {
    height: calc(100% - 50px);
    overflow: auto;
    border-top: 1px solid var(--color-border);
  }
}
</style>
