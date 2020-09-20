<template>
  <div class="container">
    <c-heading text-align="center" mb="4"> Žiga Vukčevič </c-heading>

    {{ /* Stats */ }}
    <c-stat>
      {{ /* Experince period */ }}
      <c-stat-number>
        {{ calculateExperiencePeriod('2007-06-01') }}
      </c-stat-number>
      <c-stat-number>
        {{ calculateExperiencePeriod('2012-01-01') }}
      </c-stat-number>
      <c-button
        size="xs"
        variant="outline"
        variant-color="black"
        @click="isVisible.experiencePeriod = !isVisible.experiencePeriod"
      >
        <span v-if="isVisible.experiencePeriod">Hide code</span>
        <span v-if="!isVisible.experiencePeriod">Show code</span>
      </c-button>
      <c-collapse :is-open="isVisible.experiencePeriod">
        <nuxt-content :document="codeBlockExperiencePeriod" />
      </c-collapse>
      {{ /* / Experince period */ }}
      {{ /* Coffees drank */ }}
      <c-stat-number v-if="coffeesDrank">
        {{ coffeesDrank }}
      </c-stat-number>
      <c-button
        size="xs"
        variant="outline"
        variant-color="black"
        @click="isVisible.coffeesDrank = !isVisible.coffeesDrank"
      >
        <span v-if="isVisible.coffeesDrank">Hide code</span>
        <span v-if="!isVisible.coffeesDrank">Show code</span>
      </c-button>
      <c-collapse :is-open="isVisible.coffeesDrank">
        <nuxt-content :document="codeBlockCoffeesDrank" />
      </c-collapse>
      {{ /* / Coffees drank */ }}
    </c-stat>
    {{ /* / Stats */ }}
  </div>
</template>

<script lang="js">
import {
  CHeading,
  CStat,
  CStatNumber,
  CCollapse,
  CButton
} from '@chakra-ui/vue'

export default {
  name: 'App',
  inject: ['$chakraColorMode', '$toggleColorMode'],
  components: {
    CHeading,
    CStat,
    CStatNumber,
    CCollapse,
    CButton
  },
  async asyncData ({ $content }) {
    const codeBlockExperiencePeriod = await $content('code-blocks/experience-period').fetch()
    const codeBlockCoffeesDrank = await $content('code-blocks/coffees-drank').fetch()

    return {
      codeBlockExperiencePeriod,
      codeBlockCoffeesDrank,
    }
  },
  data () {
    return {
      isVisible: {
        experiencePeriod: false,
        coffeesDrank: false,
      }
    }
  },
  computed: {
    coffeesDrank () {
      const currentLocalHour = new Date().getHours();
      let numberOfCups;

      switch(true) {
        // From 8:00 to 10:59
        case (currentLocalHour >= 8 && currentLocalHour <= 10):
          numberOfCups = 1;
          break;
        // From 11:00 to 16:59
        case (currentLocalHour >= 11 && currentLocalHour <= 16):
          numberOfCups = 2;
          break;
        // From 17:00 to 23:59
        case (currentLocalHour >= 17 && currentLocalHour <= 23):
          numberOfCups = 3;
          break;
        // Any other time (covers from 0:00 to 7:59 - usually sleeping at that time)
        default:
          numberOfCups = 0;
      }

      return numberOfCups;
    }
  },
  methods: {
    calculateExperiencePeriod (startDate) {
      return Math.round(
        (new Date() - new Date(startDate)) / 1000 / 60 / 60 / 24 / 365
      );
    },
  },
}
</script>
