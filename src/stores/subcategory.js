import { defineStore } from 'pinia';
import EquipmentDataService from '@/services/EquipmentDataService';

export const useSubcategoryStore = defineStore('subcategory', {
  state: () => ({
    list: [],
  }),
  actions: {
    getList(categoryId) {
      return EquipmentDataService.getSubcategoryList(categoryId)
        .then((data) => this.list = data)
        .catch((e) => console.dir(e));
    },
    addItem(params) {
      return EquipmentDataService.createSubcategory(params)
        .then(({ data }) => this.list.push(data))
        .catch((e) => console.dir(e));
    },
    updateItem(params) {
      return EquipmentDataService.updateSubcategory(params)
        .then(({ data }) => {
          this.list = this.list
            .map((item) => item.id === data.id ? {...item, ...data} : item)
        })
        .catch((e) => console.dir(e));
    },
  },
});
