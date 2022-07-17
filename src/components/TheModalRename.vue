<template>
  <Teleport to="body">
    <BaseModal
      :model-value="store.isVisible"
      @update:model-value="store.close"
    >
      <BaseForm
        class="modal-rename"
        @submit="onSave"
      >
        <h2 class="form__field">
          {{ title }}
        </h2>
        <BaseInput
          ref="field"
          v-model="name"
          label="Name"
          class="form__field"
        />
        <template #actions>
          <BaseButton
            type="submit"
            :disabled="isDisableSave"
            class="form__action"
          >
            Save
          </BaseButton>
          <BaseButton
            type="reset"
            theme="secondary"
            class="form__action"
            @click="store.close"
          >
            Cancel
          </BaseButton>
        </template>
      </BaseForm>
    </BaseModal>
  </Teleport>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { useModalRenameStore } from '@/stores/modalRename';
import BaseModal from '@/components/BaseModal.vue';
import BaseInput from '@/components/BaseInput.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseForm from '@/components/BaseForm.vue';

const store = useModalRenameStore();

const name = ref('');
const field = ref(null);

const isDisableSave = computed(() => !name.value);
const title = computed(() => store.params.title ? 'Edit' : 'Create');

function onSave() {
  if (isDisableSave.value) return;

  store.request( {...store.params, title: name.value })
    .then(() => {
      store.resolve('Success');
    })
    .catch((e) => { store.reject(e) })
}

watch(() => store.isVisible, (value) => {
  if (value) {
    name.value = store.params?.title ?? '';
  }
})
</script>

<style lang="scss">
.modal-rename {
  width: 100vw;
  max-width: 320px;
}
</style>
