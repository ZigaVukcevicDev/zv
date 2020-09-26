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
        <span v-html="doc.header.intro.heading.part1"></span>
      </c-heading>
      <c-text
        as="p"
        font-size="24px"
        margin-top="2"
        v-html="doc.header.intro.heading.part2"
      />
      <c-text as="p" margin-top="10">
        <span v-html="doc.header.intro.additionalText.textBefore" />
        <c-link :href="doc.header.intro.additionalText.link.href" is-external>
          {{ doc.header.intro.additionalText.link.text }}
          <c-icon name="external-link-alt" margin-left="2px" />
        </c-link>
        <span v-html="doc.header.intro.additionalText.textAfter" />
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

    {{ /* Stats  */ }}
    <c-box width="100%" padding="10">
      {{ /* Experince period */ }}
      <c-stat>
        <c-stat-number>
          {{ calculateExperiencePeriod('2007-06-01') }}
        </c-stat-number>
        <c-stat-label>
          {{ doc.stats.part1 }}
        </c-stat-label>
        <c-stat-number>
          {{ calculateExperiencePeriod('2012-01-01') }}
        </c-stat-number>
        <c-stat-label>
          {{ doc.stats.part2 }}
        </c-stat-label>
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
          <span v-if="numberOfCoffeeCupsDrank === 1">
            {{ doc.stats.part3.singular }}
          </span>
          <span v-if="numberOfCoffeeCupsDrank > 1">
            {{ doc.stats.part3.plural }}
          </span>
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
    </c-box>
    {{ /* / Stats */ }}

    {{ /* My main skills */ }}
    <c-box width="100%" padding="10">
      <c-heading as="h2" margin-top="10">My main skills</c-heading>
      <c-list style-type="disc" margin-top="5">
        {{ /* Fix key */ }}
        <!-- <c-list-item v-for="item in document['my-main-skills']" :key="item.key"> -->
        <!-- {{ item.skill[0].text }} -->
        <!-- </c-list-item> -->
      </c-list>
    </c-box>
    {{ /* / My main skills */ }}

    {{ /* My skills output */ }}
    <c-box width="100%" padding="10">
      <c-heading as="h2" margin-top="10">
        My skills to produce visual output
      </c-heading>
      <!-- <c-list style-type="disc" margin-top="5">
        {{ /* Fix key */ }}
        <c-list-item v-for="item in composeListOfSkills" :key="item.key">
          {{ item.text }}
          <c-list
            v-if="item.children.length > 0"
            style-type="disc"
            margin-left="5"
          >
            <c-list-item
              v-for="itemChild in item.children"
              :key="itemChild.key"
            >
              {{ itemChild }}
            </c-list-item>
          </c-list>
        </c-list-item>
      </c-list> -->
      {{ /* / My skills output */ }}

      <br />
      <hr />
      <br />
      <pre>{{ doc }}</pre>
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
  CIcon,
  CList,
  // CListItem
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
    CIcon,
    CList,
    // CListItem
  },
  async asyncData ({ $content }) {
    const docHeader = await $content('header').fetch();
    const docStats = await $content('statistics').fetch();

    const codeBlockExperiencePeriod = await $content('code-blocks/experience-period').fetch();
    const codeBlockNumberOfCoffeeCupsDrank = await $content('code-blocks/number-of-coffee-cups-drank').fetch();

    return {
      doc: {
        header: docHeader,
        stats: docStats,
      },
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
    },
    composeListOfSkills () {
      const list = [];

      this.document['my-skills-output'].forEach((item, index) => {
        item['skills-list'].forEach(itemChild => {
          if (item.level_of_list === 'Level 1') {
            list.push({
              text: itemChild.text,
              children: [],
            });
          } else if (item.level_of_list === 'Level 2') {
            list[index].children.push(itemChild.text)
          }
        });
      });

      return list;
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
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
}
</script>
