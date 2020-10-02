<template>
  <c-box v-bind="mainStyles[colorMode]">
    {{ /* Container */ }}
    <c-box padding-left="10" padding-right="10">
      {{ /* Draft notice */ }}
      <c-box background-color="tomato" width="100%" padding="4" color="white">
        This is a page draft.
      </c-box>
      {{ /* / Draft notice */ }}

      {{ /* Menu */ }}
      <c-box display="flex" width="100%" justify-content="flex-end">
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
                Project 1
              </c-menu-item>
              <c-menu-item padding-left="10">Project 2</c-menu-item>
              <c-menu-item padding-left="10">Project 3</c-menu-item>
            </c-menu-group>
            <c-menu-divider
              v-if="
                doc.education.isVisible ||
                doc.certificatesAndConferences.isVisible
              "
            />
            <c-menu-group
              v-if="
                doc.education.isVisible ||
                doc.certificatesAndConferences.isVisible
              "
            >
              <c-menu-item
                v-if="doc.education.isVisible"
                v-scroll-to="'#education'"
              >
                Education
              </c-menu-item>
              <c-menu-item
                v-if="doc.certificatesAndConferences.isVisible"
                v-scroll-to="'#certificates-and-conferences'"
              >
                Certificates and conferences
              </c-menu-item>
            </c-menu-group>
            <c-menu-divider />
            <c-menu-item v-scroll-to="'#contact'"> Contact me</c-menu-item>
          </c-menu-list>
        </c-menu>
      </c-box>
      {{ /* / Menu */ }}

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
        <c-button
          size="xs"
          variant="outline"
          variant-color="black"
          @click="isVisible.pronunceName = !isVisible.pronunceName"
        >
          <span v-show="isVisible.pronunceName">Hide code</span>
          <span v-show="!isVisible.pronunceName">Show code</span>
        </c-button>
        <c-tabs
          v-show="isVisible.pronunceName"
          variant="enclosed-colored"
          align="end"
        >
          <c-tab-list>
            <c-tab>Template</c-tab>
            <c-tab>Script</c-tab>
          </c-tab-list>
          <c-tab-panels>
            <c-tab-panel>
              <nuxt-content :document="codeBlocks.pronunceName.template" />
            </c-tab-panel>
            <c-tab-panel>
              <nuxt-content :document="codeBlocks.pronunceName.script" />
            </c-tab-panel>
          </c-tab-panels>
        </c-tabs>
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
        <c-button
          size="xs"
          variant="outline"
          variant-color="black"
          @click="isVisible.experiencePeriod = !isVisible.experiencePeriod"
        >
          <span v-show="isVisible.experiencePeriod">Hide code</span>
          <span v-show="!isVisible.experiencePeriod">Show code</span>
        </c-button>
        <c-tabs
          v-show="isVisible.experiencePeriod"
          variant="enclosed-colored"
          align="end"
        >
          <c-tab-list>
            <c-tab>Template</c-tab>
            <c-tab>Script</c-tab>
            <c-tab>CMS integration</c-tab>
          </c-tab-list>
          <c-tab-panels>
            <c-tab-panel>
              <nuxt-content :document="codeBlocks.experiencePeriod.template" />
            </c-tab-panel>
            <c-tab-panel>
              <nuxt-content :document="codeBlocks.experiencePeriod.script" />
            </c-tab-panel>
            <c-tab-panel>
              <c-text as="p" margin-top="5" margin-bottom="5">
                Input fields in CMS
              </c-text>
              <c-image
                :src="require('@/assets/images/cms/experience-period.png')"
                alt="CMS"
                w="800px"
              />
              <c-text as="p" margin-top="5" margin-bottom="5">
                Configuration
              </c-text>
              <nuxt-content :document="codeBlocks.experiencePeriod.cms" />
            </c-tab-panel>
          </c-tab-panels>
        </c-tabs>
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
        <c-button
          size="xs"
          variant="outline"
          variant-color="black"
          @click="
            isVisible.numberOfCoffeeCupsDrank = !isVisible.numberOfCoffeeCupsDrank
          "
        >
          <span v-show="isVisible.numberOfCoffeeCupsDrank">Hide code</span>
          <span v-show="!isVisible.numberOfCoffeeCupsDrank">Show code</span>
        </c-button>
        <c-tabs
          v-show="isVisible.numberOfCoffeeCupsDrank"
          variant="enclosed-colored"
          align="end"
        >
          <c-tab-list>
            <c-tab>Template</c-tab>
            <c-tab>Script</c-tab>
            <c-tab>CMS integration</c-tab>
          </c-tab-list>
          <c-tab-panels>
            <c-tab-panel>
              <nuxt-content
                :document="codeBlocks.numberOfCoffeeCupsDrank.template"
              />
            </c-tab-panel>
            <c-tab-panel>
              <nuxt-content
                :document="codeBlocks.numberOfCoffeeCupsDrank.script"
              />
            </c-tab-panel>
            <c-tab-panel>
              <c-text as="p" margin-top="5" margin-bottom="5">
                Input fields in CMS
              </c-text>
              <c-image
                :src="
                  require('@/assets/images/cms/number-of-coffee-cups-drank.png')
                "
                alt="CMS"
                w="800px"
              />
              <c-text as="p" margin-top="5" margin-bottom="5">
                Configuration
              </c-text>
              <nuxt-content
                :document="codeBlocks.numberOfCoffeeCupsDrank.cms"
              />
            </c-tab-panel>
          </c-tab-panels>
        </c-tabs>
        {{ /* / Number of coffee cups drank */ }}
      </c-box>
      {{ /* / Stats */ }}

      {{ /* My main skills */ }}
      <c-box width="100%" padding-top="5">
        <c-heading id="skills-main" as="h2" margin-bottom="5">
          {{ doc.skills.main.heading }}
        </c-heading>
        <c-box
          width="75%"
          margin-left="5"
          v-html="$md.render(doc.skills.main.list)"
        />
      </c-box>
      {{ /* / My main skills */ }}

      {{ /* Latest work - project 1 */ }}
      <c-box width="75%" padding-top="20" padding-bottom="10">
        <p>Latest work</p>
        <c-heading id="project-1" as="h2" margin-bottom="5">
          {{ doc.latestWorks.project1.title }}
        </c-heading>
        <c-box
          margin-bottom="10"
          v-html="$md.render(doc.latestWorks.project1.description)"
        />
      </c-box>
    </c-box>
    {{ /* / Container */ }}
    <c-box width="100%" padding-bottom="10">
      <div class="swiper">
        <swiper ref="swiper" :options="swiperOptions">
          <swiper-slide>Slide 1</swiper-slide>
          <swiper-slide>
            <img :src="require('@/static/img/cat-1.jpg')" alt="" />
          </swiper-slide>
          <swiper-slide>Slide 3</swiper-slide>
          <swiper-slide>Slide 4</swiper-slide>
          <swiper-slide>Slide 5</swiper-slide>
          <swiper-slide>Slide 6</swiper-slide>
          <swiper-slide>Slide 7</swiper-slide>
          <swiper-slide>Slide 8</swiper-slide>
          <swiper-slide>Slide 9</swiper-slide>
          <img
            slot="pagination"
            class="iphone-mockup"
            :src="require('@/assets/images/carousel/iphone-mockup.png')"
            alt=""
          />
          <div slot="pagination" class="swiper-pagination"></div>
          <div slot="button-prev" class="swiper-button-prev"></div>
          <div slot="button-next" class="swiper-button-next"></div>
        </swiper>
      </div>
      <c-box
        margin-top="5"
        v-html="$md.render(doc.latestWorks.project1.technologies)"
      />
      <p>Client {{ doc.latestWorks.project1.client }}</p>
      {{ /* / Latest work - project 1 */ }}
    </c-box>
    {{ /* Container */ }}
    <c-box padding-left="10" padding-right="10">
      {{ /* My visual output skills */ }}
      <c-box width="100%" padding-top="10">
        <c-heading id="skills-visual-output" as="h2" margin-bottom="5">
          {{ doc.skills.visualOutput.heading }}
        </c-heading>
        <c-box
          width="75%"
          margin-left="5"
          v-html="$md.render(doc.skills.visualOutput.list)"
        />
      </c-box>
      {{ /* / My visual output skills */ }}

      {{ /* My programming logic skills */ }}
      <c-box width="100%" padding-top="10">
        <c-heading id="skills-programming-logic" as="h2" margin-bottom="5">
          {{ doc.skills.programmingLogic.heading }}
        </c-heading>
        <c-box
          width="75%"
          margin-left="5"
          v-html="$md.render(doc.skills.programmingLogic.list)"
        />
      </c-box>
      {{ /* / My programming logic skills */ }}

      {{ /* Education */ }}
      <c-box v-show="doc.education.isVisible" width="100%" padding-top="10">
        <c-heading id="education" as="h2" margin-bottom="5">
          {{ doc.education.heading }}
        </c-heading>
        <c-box width="75%" v-html="$md.render(doc.education.richText)" />
      </c-box>
      {{ /* / Education */ }}

      {{ /* Certificates and conferences */ }}
      <c-box
        v-show="doc.certificatesAndConferences.isVisible"
        width="100%"
        padding-top="10"
      >
        <c-heading id="certificates-and-conferences" as="h2" margin-bottom="5">
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
      <c-box width="100%" padding-top="10">
        <c-heading id="contact" as="h2" margin-bottom="5">
          Contact me
        </c-heading>
        <c-text>{{ doc.contact.text1 }}</c-text>
        <form name="form-contact" netlify>
          <p>
            <label>Your full name <input type="text" name="full-name" /></label>
          </p>
          <p>
            <label
              >Your email address <input type="email" name="email"
            /></label>
          </p>
          <p>
            <label>Your message <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send message</button>
          </p>
        </form>
        <c-text>{{ doc.contact.text2 }}</c-text>
        <c-box>
          <c-link :href="doc.contact.link1.href" is-external>
            <c-icon :name="doc.contact.link1.icon" margin-left="2px" />
            {{ doc.contact.link1.text }}
          </c-link>
        </c-box>
        <c-box>
          <c-link :href="doc.contact.link2.href" is-external>
            <c-icon :name="doc.contact.link2.icon" margin-left="2px" />
            {{ doc.contact.link2.text }}
          </c-link>
        </c-box>
      </c-box>
      {{ /* / Contact */ }}

      {{ /* Footer */ }}
      <c-box width="100%" padding-top="10" padding-bottom="10" margin-top="20">
        <c-text>
          Copyright 2015-{{ currentTimeStamp(true) }} © zigavukcevic.dev
        </c-text>
        <c-text as="small">
          Website last generated {{ currentTimeStamp() }}.
        </c-text>
      </c-box>

      <br />
      <pre>{{ doc }}</pre>
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
  CTabs,
  CTabList,
  CTabPanels,
  CTab,
  CTabPanel,
  CImage,
  CMenu,
  CMenuButton,
  CMenuList,
  CMenuItem,
  CMenuGroup,
  CMenuDivider,
  CPseudoBox,
  CIconButton,
} from '@chakra-ui/vue';

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
    CTabs,
    CTabList,
    CTabPanels,
    CTab,
    CTabPanel,
    CImage,
    CMenu,
    CMenuButton,
    CMenuList,
    CMenuItem,
    CMenuGroup,
    CMenuDivider,
    CPseudoBox,
    CIconButton,
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
        cms: await $content('code-blocks/experience-period/cms-integration').fetch(),
      },
      numberOfCoffeeCupsDrank: {
        template: await $content('code-blocks/number-of-coffee-cups-drank/template').fetch(),
        script: await $content('code-blocks/number-of-coffee-cups-drank/script').fetch(),
        cms: await $content('code-blocks/number-of-coffee-cups-drank/cms-integration').fetch(),
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
      isVisible: {
        experiencePeriod: false,
        numberOfCoffeeCupsDrank: false,
        pronunceName: false,
      },
      swiperOptions: {
        loop: false,
        slidesPerView: 3,
        spaceBetween: 140,
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          // when window width is >= 480px
          // 480: {
          //   slidesPerView: 3,
          //   spaceBetween: 30
          // },
          // when window width is >= 640px
          // 640: {
          //   slidesPerView: 4,
          //   spaceBetween: 40
          // }
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
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
  },
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
}
</script>

<style>
.swiper {
  height: auto;
  width: 100%;
  position: relative !important;
  margin-top: 30px;
}

.swiper .swiper-container {
  padding-top: 0;
  padding-bottom: 100px;
  position: static !important;
}

.swiper .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ghostwhite;
  border-radius: 40px;
}

.swiper .swiper-slide img {
  width: 206px;
}

.swiper .swiper-pagination-bullets {
  bottom: 0;
}

.swiper .swiper-pagination-bullet-active {
  background-color: #000;
}

.swiper .swiper-button-prev,
.swiper .swiper-button-next {
  top: calc(50% - 60px);
  color: #000;
}

.swiper .swiper-button-prev {
  right: auto !important;
}

.swiper .swiper-button-next {
  left: auto !important;
}

.swiper .iphone-mockup {
  width: 320px;
  height: 484px;
  position: absolute;
  top: calc(50% - 290px);
  left: calc(50% - 160px);
  z-index: 1;
}
</style>
