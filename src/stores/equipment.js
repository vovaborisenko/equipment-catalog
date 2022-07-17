import { defineStore } from 'pinia';
import EquipmentDataService from '@/services/EquipmentDataService';

export const useEquipmentStore = defineStore('equipment', {
  state: () => ({
    list: [],
  }),
  actions: {
    getList(subcategoryId) {
      return EquipmentDataService.getEquipmentList(subcategoryId)
        .then((data) => this.list = data)
        .catch((e) => console.dir(e));
    },
  },
});
