<template>
  <c-box width="75%">
    <c-button
      size="xs"
      variant="outline"
      variant-color="black"
      @click="isVisible = !isVisible"
    >
      <span v-show="isVisible">Hide code</span>
      <span v-show="!isVisible">Show code</span>
    </c-button>
    <c-tabs v-show="isVisible" variant="enclosed-colored" align="end">
      <c-tab-list>
        <c-tab v-for="content in contents" :key="content.id">{{
          tabTitles[content.id]
        }}</c-tab>
      </c-tab-list>
      <c-tab-panels>
        <c-tab-panel v-for="content in contents" :key="content.id">
          <c-box margin-top="5">
            <client-only>
              <div v-if="content.id === 'cms'">
                <c-text as="p" margin-bottom="5">Input fields in CMS</c-text>
                <c-image :src="content.panel[0]" />
                <c-text as="p" margin-top="5" margin-bottom="5"
                  >Script and configuration
                </c-text>
                <nuxt-content :document="content.panel[1]" />
              </div>
              <div v-if="content.id !== 'cms'">
                <nuxt-content :document="content.panel" />
              </div>
            </client-only>
          </c-box>
        </c-tab-panel>
      </c-tab-panels>
    </c-tabs>
  </c-box>
</template>

<script lang="js">
import {
  CButton,
  CTabList,
  CTab,
  CTabs,
  CTabPanel,
  CTabPanels,
  CImage,
  CText,
  CBox,
} from '@chakra-ui/vue';
// import ClientOnly from 'vue-client-only'

export default {
  name: 'CodeBlocks',
  components: {
    CButton,
    CTabList,
    CTab,
    CTabs,
    CTabPanel,
    CTabPanels,
    CImage,
    CText,
    CBox,
//    ClientOnly,
  },
  props: {
    contents: {
      type: Array,
      default: () => ([]),
    },
    image: {
      type: String,
      default: 'test'
    }
  },
  data () {
    return {
      isVisible: false,
      tabTitles: {
        template: 'Template',
        script: 'Script',
        cms: 'CMS integration',
      },
    }
  },
}
</script>
