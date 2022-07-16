<template>
  <div class="catalog">
    <BaseBox
      :title="title"
      class="catalog__aside"
    >
      <ListItem
        v-for="item in list"
        :key="item.id"
        :to="{name: routeName, params: {[routeName]: item.id}}"
      >
        {{ item.title }}
      </ListItem>
    </BaseBox>
    <div class="catalog__content">
      <RouterView />
    </div>
  </div>
</template>

<script>
import BaseBox from '@/components/BaseBox.vue';
import ListItem from '@/components/ListItem.vue';
import EquipmentDataService from '@/services/EquipmentDataService';

const MAP = {
  categories: {
    title:'Categories',
    routeName: 'category',
  },
  subcategories: {
    title: 'Subcategories',
    routeName: 'subcategory',
  },
}

export default {
  name: 'CatalogView',
  components: {
    BaseBox,
    ListItem,
  },
  props: {
    type: {
      type: String,
      required: true,
      validator: (value) => Object.keys(MAP).includes(value)
    }
  },
  data: () => ({
    list: [],
  }),
  computed: {
    title() {
      return MAP[this.type]?.title;
    },
    routeName() {
      return MAP[this.type]?.routeName;
    }
  },
  created() {
    if (this.type === 'categories') {
      EquipmentDataService.getCategoryList()
        .then((data) => this.list = data)
        .catch((e) => console.dir(e));
    }

    if (this.type === 'subcategories') {
      EquipmentDataService.getSubcategoryList(1)
        .then((data) => this.list = data)
        .catch((e) => console.dir(e));
    }
  },
}
</script>

<style lang="scss">
.catalog {
  display: flex;
  height: 100vh;
  border: 1px solid var(--color-border);

  & & {
    height: 100%;
    border: 0;
  }

  &__aside {
    flex: 260px 0 0;
    height: 100%;
    border-right: 1px solid var(--color-border);
  }

  &__content {
    flex: auto;
  }

  &__content > .box {
    height: 100%;
  }
}
</style>
