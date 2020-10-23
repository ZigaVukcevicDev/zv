<template>
  <ul class="navigation-side">
    <li v-for="item in items" :key="item.key">
      <a
        v-if="item.isVisibleInNavigationSide"
        v-scroll-to="`#${item.id}`"
        href="#"
      >
        {{ item.text }}
      </a>
    </li>
  </ul>
</template>

<script lang="js">
export default {
  name: 'NavigationSide',
  props: {
    items: {
      type: Array,
      default: null,
    }
  },
  methods: {},
}
</script>

<style>
.navigation-side {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
  z-index: 1000;
  font-size: 12px;
  list-style-type: none;
}

.navigation-side li {
  text-align: right;
  margin-right: 20px;
  display: block;
  height: 30px;
  position: relative;
  margin-bottom: 3px;
  padding-right: 10px;
  min-width: 250px;
}

.navigation-side li::before {
  content: '';
  position: absolute;
  display: block;
  top: 7px;
  right: 0;
  height: 5px;
  width: 5px;
  border-radius: 50px;
  background-color: #000;
}
</style>
