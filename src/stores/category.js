import { defineStore } from 'pinia';
import EquipmentDataService from '@/services/EquipmentDataService';

export const useCategoryStore = defineStore('category', {
  state: () => ({
    list: [],
  }),
  actions: {
    getList() {
      return EquipmentDataService.getCategoryList()
        .then((data) => this.list = data)
        .catch((e) => console.dir(e));
    },
    addItem(params) {
      return EquipmentDataService.createCategory(params)
        .then(({ data }) => this.list.push(data))
        .catch((e) => console.dir(e));
    },
    updateItem(params) {
      return EquipmentDataService.updateCategory(params)
        .then(({ data }) => {
          this.list = this.list
            .map((item) => item.id === data.id ? {...item, ...data} : item)
        })
        .catch((e) => console.dir(e));
    },
  },
});
