<template>
  <BaseModal
    model-value
    :closeable="false"
  >
    <BaseForm
      class="login"
      @submit="login"
    >
      <BaseInput
        label="Login"
        class="form__field"
      />
      <BaseInput
        label="Password"
        type="password"
        class="form__field"
      />
      <template #actions>
        <BaseButton
          type="submit"
          class="form__action"
        >
          Login
        </BaseButton>
        <BaseButton
          type="reset"
          theme="secondary"
          class="form__action"
        >
          Reset
        </BaseButton>
      </template>
    </BaseForm>
  </BaseModal>
</template>

<script setup>
import { useRouter } from 'vue-router';
import BaseInput from '@/components/BaseInput.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseForm from '@/components/BaseForm.vue';
import BaseModal from '@/components/BaseModal.vue';

const router = useRouter();

function login() {
  router.push({name: 'catalog'})
}
</script>

<style lang="scss">
.login {
  width: 100vw;
  max-width: 320px;
}
</style>
