<template>
  <c-box v-bind="mainStyles[colorMode]">
    {{ /* Container */ }}
    <c-box padding-left="10" padding-right="10">
      {{ /* Draft notice */ }}
      <c-box background-color="tomato" width="100%" padding="4" color="white">
        This is a page draft.
      </c-box>
      {{ /* / Draft notice */ }}

      {{ /* Side navigation */ }}
      <navigation-side :items="navigationItems" />

      {{ /* Main navigation */ }}
      <c-box display="flex" width="100%" justify-content="flex-end">
        <c-button
          size="xs"
          variant="outline"
          :is-disabled="true"
          margin-right="3"
        >
          Switch to mini page
        </c-button>

        <c-button
          size="xs"
          variant="outline"
          :is-disabled="true"
          margin-right="3"
        >
          Show wireframe
        </c-button>

        <c-icon-button
          :icon="colorMode === 'light' ? 'moon' : 'sun'"
          margin-right="3"
          aria-label="Switch color mode"
          @click="toggleColorMode"
        />
        <c-menu>
          <c-menu-button right-icon="chevron-down">
            <c-icon name="bars" />
          </c-menu-button>
          <c-menu-list min-width="180px">
            <c-menu-group title="Skills">
              <c-menu-item v-scroll-to="'#skills-main'" padding-left="10">
                Main skills
              </c-menu-item>
              <c-menu-item
                v-scroll-to="'#skills-visual-output'"
                padding-left="10"
              >
                To produce visual output
              </c-menu-item>
              <c-menu-item
                v-scroll-to="'#skills-programming-logic'"
                padding-left="10"
              >
                To work with programming logic
              </c-menu-item>
            </c-menu-group>
            <c-menu-divider />
            <c-menu-group title="Latest work">
              <c-menu-item v-scroll-to="'#project-1'" padding-left="10">
                Petrol
              </c-menu-item>
              <c-menu-item v-scroll-to="'#project-2'" padding-left="10"
                >NFL statistics</c-menu-item
              >
              <c-menu-item v-scroll-to="'#project-3'" padding-left="10"
                >Comtrade website</c-menu-item
              >
            </c-menu-group>
            <c-menu-divider
              v-show="
                doc.education.isVisible ||
                doc.certificatesAndConferences.isVisible
              "
            />
            <c-menu-group
              v-show="
                doc.education.isVisible ||
                doc.certificatesAndConferences.isVisible
              "
            >
              <c-menu-item
                v-show="doc.education.isVisible"
                v-scroll-to="'#education'"
              >
                Education
              </c-menu-item>
              <c-menu-item
                v-show="doc.certificatesAndConferences.isVisible"
                v-scroll-to="'#certificates-and-conferences'"
              >
                Certificates and conferences
              </c-menu-item>
            </c-menu-group>
            <c-menu-divider />
            <c-menu-item v-scroll-to="'#contact'">Contact me</c-menu-item>
          </c-menu-list>
        </c-menu>
      </c-box>
      {{ /* / Main navigation */ }}

      {{ /* About */ }}
      <c-box width="100%">
        <c-heading as="h1">
          <span v-html="doc.about.heading.part1"></span>
          <c-pseudo-box as="button" @click="pronunceName()">
            <c-icon name="volume-up" margin-left="2px" />
            <audio ref="audio-pronunce-name">
              <source
                :src="require('@/assets/audio/pronounce-name.mp3')"
                type="audio/mpeg"
              />
            </audio>
          </c-pseudo-box>
          <span v-html="doc.about.heading.part2"></span>
        </c-heading>
        <code-blocks
          :contents="[
            { id: 'template', panel: codeBlocks.pronunceName.template },
            { id: 'script', panel: codeBlocks.pronunceName.script },
          ]"
        />
        <c-text
          as="p"
          font-size="24px"
          margin-top="2"
          v-html="doc.about.heading.part3"
        />
        <c-text as="p" margin-top="10">
          <span v-html="doc.about.additionalText.textBefore" />
          <c-link :href="doc.about.additionalText.link.href" is-external>
            {{ doc.about.additionalText.link.text }}
            <c-icon name="external-link-alt" margin-left="2px" />
          </c-link>
          <span v-html="doc.about.additionalText.textAfter" />
        </c-text>
      </c-box>
      {{ /* / About */ }}

      {{ /* Stats  */ }}
      <c-box width="100%" padding-top="10" padding-bottom="10">
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
        <code-blocks
          :contents="[
            {
              id: 'template',
              panel: codeBlocks.experiencePeriod.template,
            },
            {
              id: 'script',
              panel: codeBlocks.experiencePeriod.script,
            },
            {
              id: 'cms',
              panel: [
                '@/assets/images/cms/experience-period.png',
                codeBlocks.experiencePeriod.cms,
              ],
            },
          ]"
        />
        {{ /* / Experince period */ }}
        {{ /* Number of coffee cups drank */ }}
        <c-stat v-show="numberOfCoffeeCupsDrank > 0">
          <c-stat-number>
            {{ numberOfCoffeeCupsDrank }}
          </c-stat-number>
          <c-stat-label>
            <span v-show="numberOfCoffeeCupsDrank === 1">
              {{ doc.stats.part3.singular }}
            </span>
            <span v-show="numberOfCoffeeCupsDrank > 1">
              {{ doc.stats.part3.plural }}
            </span>
          </c-stat-label>
        </c-stat>
        <code-blocks
          :contents="[
            {
              id: 'template',
              panel: codeBlocks.numberOfCoffeeCupsDrank.template,
            },
            {
              id: 'script',
              panel: codeBlocks.numberOfCoffeeCupsDrank.script,
            },
            {
              id: 'cms',
              panel: [
                require('@/assets/images/cms/number-of-coffee-cups-drank.png'),
                codeBlocks.numberOfCoffeeCupsDrank.cms,
              ],
            },
          ]"
        />
        {{ /* / Number of coffee cups drank */ }}
      </c-box>
      {{ /* / Stats */ }}

      {{ /* My main skills */ }}
      <skills
        id="skills-main"
        v-waypoint="{
          active: true,
          callback: onWaypoint,
          options: intersectionOptions,
        }"
        :content="doc.skills.main"
      />
      <code-blocks
        :contents="[
          {
            id: 'template',
            panel: codeBlocks.skills.main.template,
          },
          {
            id: 'cms',
            panel: [
              require('@/assets/images/cms/skills-main.png'),
              codeBlocks.skills.main.cms,
            ],
          },
        ]"
      />
      {{ /* / My main skills */ }}

      {{ /* Latest work - project 1 */ }}
      <latest-work
        id="project-1"
        v-waypoint="{
          active: true,
          callback: onWaypoint,
          options: intersectionOptions,
        }"
        :content="doc.latestWorks.project1"
        :has-swiper="true"
      />

      {{ /* Skills visual output */ }}
      <skills
        id="skills-visual-output"
        v-waypoint="{
          active: true,
          callback: onWaypoint,
          options: intersectionOptions,
        }"
        :content="doc.skills.visualOutput"
      />

      {{ /* Latest work - project 2 */ }}
      <latest-work
        id="project-2"
        v-waypoint="{
          active: true,
          callback: onWaypoint,
          options: intersectionOptions,
        }"
        :content="doc.latestWorks.project2"
      />

      {{ /* Skills programming logic */ }}
      <skills
        id="skills-programming-logic"
        v-waypoint="{
          active: true,
          callback: onWaypoint,
          options: intersectionOptions,
        }"
        :content="doc.skills.programmingLogic"
      />

      {{ /* Latest work - project 3 */ }}
      <latest-work
        id="project-3"
        v-waypoint="{
          active: true,
          callback: onWaypoint,
          options: intersectionOptions,
        }"
        :content="doc.latestWorks.project3"
      />

      {{ /* Education */ }}
      <c-box
        v-show="doc.education.isVisible"
        id="education"
        v-waypoint="{
          active: true,
          callback: onWaypoint,
          options: intersectionOptions,
        }"
        width="100%"
        padding-top="10"
      >
        <c-heading as="h2" margin-bottom="5">
          {{ doc.education.heading }}
        </c-heading>
        <c-box width="75%" v-html="$md.render(doc.education.richText)" />
      </c-box>
      {{ /* / Education */ }}

      {{ /* Certificates and conferences */ }}
      <c-box
        v-show="doc.certificatesAndConferences.isVisible"
        id="certificates-and-conferences"
        v-waypoint="{
          active: true,
          callback: onWaypoint,
          options: intersectionOptions,
        }"
        width="100%"
        padding-top="10"
      >
        <c-heading as="h2" margin-bottom="5">
          {{ doc.certificatesAndConferences.heading }}
        </c-heading>
        <c-box
          width="75%"
          margin-left="5"
          v-html="$md.render(doc.certificatesAndConferences.list)"
        />
      </c-box>
      {{ /* / Certificates and conferences */ }}

      {{ /* Contact */ }}
      <contact
        id="contact"
        v-waypoint="{
          active: true,
          callback: onWaypoint,
          options: intersectionOptions,
        }"
        :content="doc.contact"
      />

      {{ /* Footer */ }}
      <c-box width="100%" padding-top="10" padding-bottom="10" margin-top="20">
        <c-text>
          Copyright 2015-{{ currentTimeStamp(true) }} © zigavukcevic.dev
        </c-text>
        <c-text as="small">
          Website last generated {{ currentTimeStamp() }}.
        </c-text>
      </c-box>
      <!-- <br />
      <pre>{{ doc }}</pre> -->
    </c-box>
  </c-box>
</template>

<script lang="js">
import {
  CHeading,
  CStat,
  CStatNumber,
  CStatLabel,
  CButton,
  CBox,
  CText,
  CLink,
  CIcon,
  CMenu,
  CMenuButton,
  CMenuList,
  CMenuItem,
  CMenuGroup,
  CMenuDivider,
  CPseudoBox,
  CIconButton,
} from '@chakra-ui/vue';
import NavigationSide from '@/components/NavigationSide';
import Skills from '@/components/Skills';
import LatestWork from '@/components/LatestWork';
import Contact from '@/components/Contact';
import CodeBlocks from '@/components/CodeBlocks';

export default {
  name: 'App',
  inject: ['$chakraColorMode', '$toggleColorMode'],
  components: {
    CHeading,
    CStat,
    CStatNumber,
    CStatLabel,
    CButton,
    CBox,
    CText,
    CLink,
    CIcon,
    CMenu,
    CMenuButton,
    CMenuList,
    CMenuItem,
    CMenuGroup,
    CMenuDivider,
    CPseudoBox,
    CIconButton,
    NavigationSide,
    LatestWork,
    Skills,
    CodeBlocks,
    Contact,
  },
  async asyncData ({ $content }) {
    const doc = {
      about: await $content('about').fetch(),
      stats: await $content('statistics').fetch(),
      skills: await $content('skills').fetch(),
      education: await $content('education').fetch(),
      certificatesAndConferences: await $content('certificates-and-conferences').fetch(),
      latestWorks: await $content('latest-works').fetch(),
      contact: await $content('contact').fetch(),
    }

    const codeBlocks = {
      pronunceName: {
        template: await $content('code-blocks/pronunce-name/template').fetch(),
        script: await $content('code-blocks/pronunce-name/script').fetch(),
      },
      experiencePeriod: {
        template: await $content('code-blocks/experience-period/template').fetch(),
        script: await $content('code-blocks/experience-period/script').fetch(),
        cms: await $content('code-blocks/experience-period/cms').fetch(),
      },
      numberOfCoffeeCupsDrank: {
        template: await $content('code-blocks/number-of-coffee-cups-drank/template').fetch(),
        script: await $content('code-blocks/number-of-coffee-cups-drank/script').fetch(),
        cms: await $content('code-blocks/number-of-coffee-cups-drank/cms').fetch(),
      },
      skills: {
        main: {
          template: await $content('code-blocks/skills/main/template').fetch(),
          cms: await $content('code-blocks/skills/main/cms').fetch(),
        }
      }
    }

    return {
      doc,
      codeBlocks,
    }
  },
  data () {
    return {
      mainStyles: {
        dark: {
          bg: 'gray.700',
          color: 'whiteAlpha.900'
        },
        light: {
          bg: 'white',
          color: 'gray.900'
        }
      },
      navigationItems: [
        {
          id: 'skills-main',
          text: 'Skills / Main skills',
          isVisibleInNavigationSide: false,
        },
        {
          id: 'skills-visual-output',
          text: 'Skills / To produce visual output',
          isVisibleInNavigationSide: false,
        },
        {
          id: 'skills-programming-logic',
          text: 'Skills / To work with programming logic',
          isVisibleInNavigationSide: false,
        },
        {
          id: 'project-1',
          text: 'Latest work / Petrol',
          isVisibleInNavigationSide: false,
        },
        {
          id: 'project-2',
          text: 'Latest work / NFL statistics',
          isVisibleInNavigationSide: false,
        },
        {
          id: 'project-3',
          text: 'Latest work / Comtrade website',
          isVisibleInNavigationSide: false,
        },
        {
          id: 'education',
          text: 'Education',
          isVisibleInNavigationSide: false,
        },
        {
          id: 'certificates-and-conferences',
          text: 'Certificates and conferences',
          isVisibleInNavigationSide: false,
        },
        {
          id: 'contact',
          text: 'Contact me',
          isVisibleInNavigationSide: false,
        },
      ],
      isVisible: {
        experiencePeriod: false,
        numberOfCoffeeCupsDrank: false,
        pronunceName: false,
      },
      intersectionOptions: {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: [0, 1] // [0.25, 0.75] if you want a 25% offset!
      }
    }
  },
  computed: {
    colorMode ()  {
      return this.$chakraColorMode();
    },
    toggleColorMode () {
      return this.$toggleColorMode;
    },
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
        // Any other time (covers cases from 0:00 to 7:59 - usually sleeping at that time)
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
    },
  },
  methods: {
    pronunceName () {
      this.$refs['audio-pronunce-name'].play();
    },
    calculateExperiencePeriod (startDate) {
      const numberOfYears = Math.round(
        (new Date() - new Date(startDate)) / 1000 / 60 / 60 / 24 / 365
      );
      const suffixSign = '+';

      return `${numberOfYears}${suffixSign}`;
    },
    currentTimeStamp(isOnlyYearShown) {
      const date = new Date();
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const hours = date.getHours();
      const minutes = (`0${date.getMinutes()}`).slice(-2);

      const timeStamp = (isOnlyYearShown)
        ? year
        : `${day}.${month}.${year} at ${hours}:${minutes}`;

      return timeStamp;
    },
    onWaypoint ({ el, going, direction }) {
      // going: in, out
      // direction: top, right, bottom, left

      console.log(el.id);
      this.toggleNavigationSideItems(el.id);

      if (going === this.$waypointMap.GOING_IN) {
        console.log('waypoint going in!')
      }

      if (direction === this.$waypointMap.DIRECTION_TOP) {
        console.log('waypoint going top!')
      }
    },
    toggleNavigationSideItems (id) {
      this.navigationItems.forEach(item => {
        if (item.id === id) {
          item.isVisibleInNavigationSide = true;
        } else {
          item.isVisibleInNavigationSide = false;
        }
      });
    },
  },
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
}
</script>
