<template>
  <Teleport to="body">
    <div class="notifications">
      <TransitionGroup
        name="list"
        tag="ul"
        class="notifications__list"
      >
        <li
          v-for="item in list"
          :key="item.id"
          class="notifications__item"
          :class="`notifications__item--${item.type}`"
        >
          {{ item.message }}
        </li>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script setup>
import useNotification from './useNotification';

const { list } = useNotification();
</script>

<style lang="scss">
.notifications {
  z-index: 105;
  position: fixed;
  bottom: 48px;
  left: 50%;
  transform: translateX(-50%);

  &__list {
    width: 100vw;
    max-width: 320px;
    padding: 0;
    list-style: none;
  }

  &__item {
    width: 100%;
    padding: 20px 10px;
    background: var(--color-primary);
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    font-size: 16px;
    line-height: 1.3;
    color: var(--color-background);
  }

  &__item--error {
    background-color: #ad0505;
  }

  &__item + &__item {
    margin-top: 16px;
  }
}

// list-transition
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-leave-active {
  position: absolute;
}
</style>
