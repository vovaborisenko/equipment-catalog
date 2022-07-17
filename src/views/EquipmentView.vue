<template>
  <BaseBox title="Equipment List">
    <template #actions>
      <div class="list-actions">
        <BaseButton
          theme="secondary"
          pre-icon="export-icon"
          class="list-actions__item"
        >
          Export
        </BaseButton>
        <BaseButton
          theme="secondary"
          pre-icon="copy-icon"
          :disabled="!isChosenItems"
          class="list-actions__item"
        >
          Move & Copy
        </BaseButton>
        <BaseButton
          theme="secondary"
          pre-icon="bin-icon"
          :disabled="!isChosenItems"
          class="list-actions__item"
        >
          Delete
        </BaseButton>
      </div>
    </template>
    <div class="list">
      <BaseInput
        pre-icon="search-icon"
        placeholder="Search category or HCPCS name"
        class="list__search"
      />
      <ul class="list__grid">
        <li
          v-for="item in list"
          :key="item.id"
          class="list__item"
        >
          <BaseCard
            v-model="checkbox"
            title="E1039"
            :desc="item.title"
            :input-value="item.id"
          />
        </li>
      </ul>
    </div>
  </BaseBox>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useEquipmentStore } from '@/stores/equipment';
import BaseBox from '@/components/BaseBox.vue';
import BaseInput from '@/components/BaseInput.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseCard from '@/components/BaseCard.vue';

const route = useRoute();
const equipment = useEquipmentStore();

const list = computed(() => equipment.list);

const checkbox = ref([]);
const isChosenItems = computed(() => checkbox.value.length !== 0);

equipment.getList(route.params.subcategory);

watch(() => route.params.subcategory, () => {
  equipment.getList(route.params.subcategory);
  checkbox.value = [];
});
</script>

<style lang="scss">
.list {
  padding: 10px 9px;
  border-right: 1px solid var(--color-border);

  &__search {
    margin-bottom: 10px;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  &__item {
    min-height: 272px;
  }
}

.list-actions {
  &__item {
    margin-left: 16px;
  }

  &__item + &__item {
    margin-left: 10px;
  }
}
</style>
