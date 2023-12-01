<script lang="ts" setup>
import { computed, ref } from 'vue'

const props = defineProps({
  text: {
    type: String
  },
  cssClass: {
    type: String
  },
  isIcon: {
    type: Boolean,
    default: false
  }
})

const ripples = ref([] as any)
const tiBtn = ref()

const animateRipple = (e: any) => {
  let el = tiBtn.value
  let pos = el.getBoundingClientRect()

  ripples.value?.push({
    x: e.clientX - pos.left,
    y: e.clientY - pos.top,
    show: true
  })
}
const rippleEnd = (i: any) => {
  ripples.value[i].show = false
}

const filteredRipples = computed(() => {
  if (!ripples.value) {
    return
  }
  return ripples.value.filter((val: any) => val.show === true)
})
</script>

<template>
  <button class="ti-btn" ref="tiBtn" :class="props.cssClass" @click="animateRipple">
    <div v-if="props.isIcon" class="plus-icon">
      <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z"
          fill="#7C5DFA"
          fill-rule="nonzero"
        />
      </svg>
    </div>
    <p>
      {{ props.text }}
    </p>
    <transition-group>
      <span
        class="ripple"
        v-bind:ref="'ripple-' + i"
        v-bind:key="'ripple' + i"
        v-for="(val, i) in filteredRipples"
        v-bind:style="{ top: val.y + 'px', left: val.x + 'px' }"
        :animationend="rippleEnd(i)"
      >
      </span>
    </transition-group>
  </button>
</template>

<style lang="scss" scoped>
@import '../assets/sass/variables.scss';
.ti-btn {
  overflow: hidden;
  position: relative;
  display: inline-block;
  border-radius: 100vh;
  padding: 0.8rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    color: var(--white);
    font-size: 0.9375rem;
    font-weight: 700;
    letter-spacing: -0.25px;
  }

  &.primary {
    background-color: var(--mainPurple);
  }

  &.red {
    background-color: var(--red);
  }

  .plus-icon {
    background-color: var(--white);
    border-radius: 50%;
    display: grid;
    place-items: center;
    width: 32px;
    height: 32px;
    margin: -1rem 0 -1rem -1rem;
  }

  .ripple {
    background-color: darkgray;
    width: 1rem;
    height: 1rem;
    position: absolute;
    border-radius: 50%;
    transform: translateX(-100%) translateY(-100%);
    mix-blend-mode: screen;
    animation:
      ripple 1000ms ease-out forwards,
      fade 500ms ease-out forwards;
  }

  @keyframes ripple {
    0% {
      transform: translate(-100%, -100%);
    }
    80% {
      transform: translate(-100%, -100%) scale(20);
    }
    100% {
      transform: translate(-100%, -100%) scale(20);
      opacity: 0;
    }
  }

  @keyframes fade {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
}
</style>
