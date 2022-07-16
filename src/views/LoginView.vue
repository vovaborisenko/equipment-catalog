<template>
  <form
    class="login"
    @submit.prevent="login"
  >
    <BaseInput
      label="Login"
      class="login__field"
    />
    <BaseInput
      label="Password"
      type="password"
      class="login__field"
    />
    <div class="login__actions">
      <BaseButton
        type="submit"
        class="login__action"
      >
        Login
      </BaseButton>
      <BaseButton
        type="reset"
        theme="secondary"
        class="login__action"
      >
        Reset
      </BaseButton>
    </div>
  </form>
</template>

<script setup>
import { useRouter } from 'vue-router';
import BaseInput from '@/components/BaseInput.vue';
import BaseButton from '@/components/BaseButton.vue';

const router = useRouter();

function login() {
  router.push({name: 'catalog'})
}
</script>

<style lang="scss">
.login {
  max-width: 320px;
  margin: auto;
  padding: 32px;
  border: 1px solid var(--color-border);

  &__field + &__field {
    margin-top: 16px;
  }

  &__actions {
    display: flex;
    align-items: center;
    justify-content: end;
    margin-top: 32px;
  }

  &__action + &__action {
    margin-left: 8px;
  }
}
</style>
