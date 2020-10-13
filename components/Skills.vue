<template>
  <c-box width="100%" padding-top="5">
    <c-heading as="h2" margin-bottom="5">
      {{ content.heading }}
    </c-heading>
    <c-box width="75%" margin-left="5" v-html="$md.render(content.list)" />
  </c-box>
</template>

<script lang="js">
import {
  CBox,
  CHeading,
} from '@chakra-ui/vue';

export default {
  name: 'Skills',
  components: {
    CBox,
    CHeading,
  },
  props: {
    content: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>
