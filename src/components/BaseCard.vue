<template>
  <div class="card">
    <label class="card__checkbox"><input
      v-model="isChecked"
      type="checkbox"
    ></label>
    <img
      :src="src"
      :alt="title"
      class="card__img"
    >
    <div class="card__title">
      {{ title }}
    </div>
    <div class="card__desc">
      {{ desc }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import placeholderImg from '@/assets/imgs/equipment.jpg';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    default: '',
  },
  src: {
    type: String,
    default: placeholderImg,
  },
  modelValue: {
    type: Array,
    default: () => [],
  },
  inputValue: {
    type: [String, Number],
    required: true,
  },
});
const emits = defineEmits(['update:model-value'])

const isChecked = computed({
  get: () => props.modelValue.indexOf(props.inputValue) !== -1,
  set: (value) => {
    const payload = value ? [...props.modelValue, props.inputValue] : props.modelValue.filter(item => item !== props.inputValue);

    emits('update:model-value', payload);
  }
})
</script>

<style lang="scss">
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 19px 9px 15px;
  border: 1px solid var(--color-border);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06);
  border-radius: 4px;

  &__checkbox {
    position: absolute;
    top: 9px;
    right: 9px;
  }

  &__img {
    width: 150px;
    margin: 0 auto 20px;
  }

  &__title {
    margin-top: auto;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.13;
    color: var(--color-title);
  }

  &__desc {
    min-height: 44px;
    margin-top: 4px;
    font-size: 14px;
    line-height: 1.20;
    color: var(--color-text-light);
  }
}
</style>
