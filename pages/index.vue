<template>
  <div class="container">
    {{ /* Draft notice */ }}
    <c-box background-color="tomato" width="100%" padding="4" color="white">
      This is a page draft.
    </c-box>
    {{ /* / Draft notice */ }}

    {{ /* Header */ }}
    <c-box background-color="black" width="100%" padding="10" color="white">
      <c-heading as="h1">
        Hi,<br />my name is Žiga and I'm a <strong>Lead engineer</strong>,
        focused on front-end web development.
      </c-heading>
      <c-text>
        I have been working in the web industry over a decade. My current spot
        is at company
        <c-link href="https://www.endava.com/" is-external>
          Endava <c-icon name="external-link-alt" margin-left="2px" />
        </c-link>
        .
      </c-text>
      <c-box padding-top="5">
        <c-button
          size="xs"
          variant="outline"
          variant-color="white"
          :is-disabled="true"
        >
          Show wireframe
        </c-button>
        <c-button
          size="xs"
          variant="outline"
          variant-color="white"
          :is-disabled="true"
        >
          Enable dark mode
        </c-button>
      </c-box>
    </c-box>
    {{ /* / Header */ }}

    <c-box width="100%" padding="10">
      {{ /* Stats */ }}
      {{ /* Experince period */ }}
      <c-stat>
        <c-stat-number>
          {{ calculateExperiencePeriod('2007-06-01') }}
        </c-stat-number>
        <c-stat-label>years in the web industry</c-stat-label>
        <c-stat-number>
          {{ calculateExperiencePeriod('2012-01-01') }}
        </c-stat-number>
        <c-stat-label>years of active programming</c-stat-label>
      </c-stat>
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
      {{ /* Number of coffee cups drank */ }}
      <c-stat v-if="numberOfCoffeeCupsDrank > 0">
        <c-stat-number>
          {{ numberOfCoffeeCupsDrank }}
        </c-stat-number>
        <c-stat-label>
          cup<span v-if="numberOfCoffeeCupsDrank > 1">s</span>
          of coffee drank today
        </c-stat-label>
      </c-stat>
      <c-button
        size="xs"
        variant="outline"
        variant-color="black"
        @click="
          isVisible.numberOfCoffeeCupsDrank = !isVisible.numberOfCoffeeCupsDrank
        "
      >
        <span v-if="isVisible.numberOfCoffeeCupsDrank">Hide code</span>
        <span v-if="!isVisible.numberOfCoffeeCupsDrank">Show code</span>
      </c-button>
      <c-collapse :is-open="isVisible.numberOfCoffeeCupsDrank">
        <nuxt-content :document="codeBlockNumberOfCoffeeCupsDrank" />
      </c-collapse>
      {{ /* / Number of coffee cups drank */ }}
      {{ /* / Stats */ }}
    </c-box>
  </div>
</template>

<script lang="js">
import {
  CHeading,
  CStat,
  CStatNumber,
  CStatLabel,
  CCollapse,
  CButton,
  CBox,
  CText,
  CLink,
  CIcon
} from '@chakra-ui/vue'

export default {
  name: 'App',
  inject: ['$chakraColorMode', '$toggleColorMode'],
  components: {
    CHeading,
    CStat,
    CStatNumber,
    CStatLabel,
    CCollapse,
    CButton,
    CBox,
    CText,
    CLink,
    CIcon
  },
  async asyncData ({ $content }) {
    const codeBlockExperiencePeriod = await $content('code-blocks/experience-period').fetch()
    const codeBlockNumberOfCoffeeCupsDrank = await $content('code-blocks/number-of-coffee-cups-drank').fetch()

    return {
      codeBlockExperiencePeriod,
      codeBlockNumberOfCoffeeCupsDrank,
    }
  },
  data () {
    return {
      isVisible: {
        experiencePeriod: false,
        numberOfCoffeeCupsDrank: false,
      }
    }
  },
  computed: {
    numberOfCoffeeCupsDrank () {
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
      const numberOfYears = Math.round(
        (new Date() - new Date(startDate)) / 1000 / 60 / 60 / 24 / 365
      );
      const suffixSign = '+';

      return `${numberOfYears}${suffixSign}`;
    },
  },
}
</script>
