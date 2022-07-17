<template>
  <div class="catalog">
    <BaseBox :title="title" class="catalog__aside" @click:add="onClickAdd">
      <ListItem
        v-for="item in list"
        :key="item.id"
        :to="{ name: routeName, params: { [routeName]: item.id } }"
        @click:edit="onClickEdit(item)"
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
import { defineComponent, computed } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import { useCategoryStore } from "@/stores/category";
import { useSubcategoryStore } from "@/stores/subcategory";
import { useModalRenameStore } from "@/stores/modalRename";
import useNotification from "@/plugins/notifications/useNotification";
import BaseBox from "@/components/BaseBox.vue";
import ListItem from "@/components/ListItem.vue";

const MAP = {
  categories: {
    title: "Categories",
    routeName: "category",
  },
  subcategories: {
    title: "Subcategories",
    routeName: "subcategory",
  },
};

export default defineComponent({
  name: "CatalogView",
  components: {
    BaseBox,
    ListItem,
  },
  props: {
    type: {
      type: String,
      required: true,
      validator: (value) => Object.keys(MAP).includes(value),
    },
  },
  setup(props) {
    const { successNotify, errorNotify } = useNotification();
    const store = {
      categories: useCategoryStore,
      subcategories: useSubcategoryStore,
    }[props.type]();
    const { open: openModalRename, close: closeModalRename } = useModalRenameStore();
    const route = useRoute();

    const title = computed(() => MAP[props.type]?.title);
    const routeName = computed(() => MAP[props.type]?.routeName);
    const list = computed(() => store.list);

    const getList = (id) => store.getList(id);
    const doRename = (request, params) =>
      openModalRename({ request, params })
        .then((data) => {
          closeModalRename();
          successNotify(data);
        })
        .catch((e) => e && errorNotify(e));

    const onClickAdd = () => doRename(store.addItem, {});

    const onClickEdit = (params) => doRename(store.updateItem, params);

    getList(route.params.category);
    onBeforeRouteUpdate((to, from) => {
      if (props.type === "subcategories" && to.params.category !== from.params.category) {
        getList(to.params.category);
      }
    });

    return {
      title,
      routeName,
      list,
      onClickAdd,
      onClickEdit,
    };
  },
});
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
