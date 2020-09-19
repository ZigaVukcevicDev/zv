<template>
  <div class="container">
    <CHeading text-align="center" mb="4"> Žiga Vukčevič </CHeading>
    <c-avatar name="Žiga Vukčevič" src="" />

    <CStat>
      <c-stat-number>
        {{ experiencePeriod.webIndustry }}
      </c-stat-number>
      <c-stat-number>
        {{ experiencePeriod.programming }}
      </c-stat-number>
      <nuxt-content :document="codeBlockExperiencePeriod" />
      <c-stat-number v-if="coffeesDrank">
        {{ coffeesDrank }}
      </c-stat-number>
      <nuxt-content :document="codeBlockCoffeesDrank" />
    </CStat>
  </div>
</template>

<script lang="js">
import {
  CAvatar,
  CHeading,
  CStat,
  CStatNumber
} from '@chakra-ui/vue'

export default {
  name: 'App',
  inject: ['$chakraColorMode', '$toggleColorMode'],
  components: {
    CAvatar,
    CHeading,
    CStat,
    CStatNumber
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
    return {}
  },
  computed: {
    experiencePeriod () {
      const datesStart = {
        webIndustry: '2007-06-01',
        programming: '2012-01-01',
      }

      const calculatePeriod = (dateStart) => {
        return Math.round(
          new Date(new Date() - new Date(dateStart)) / 1000 / 60 / 60 / 24 / 365
        );
      }

      return {
        webIndustry: calculatePeriod(datesStart.webIndustry),
        programming: calculatePeriod(datesStart.programming),
      };
    },
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
  methods: {},
}
</script>
