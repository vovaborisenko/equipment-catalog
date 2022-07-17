import { defineStore } from 'pinia';

export const useModalRenameStore = defineStore('modalRename', {
  state: () => ({
    resolve: null,
    reject: null,
    request: null,
    params: null,
    isVisible: false,
  }),
  actions: {
    open({request, params}) {
      return new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
        this.request = request;
        this.params = params;
        this.isVisible = true;
      })
    },
    close() {
      this.reject(null);
      this.$reset();
    },
  },
});
