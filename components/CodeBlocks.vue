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
            <div v-show="content.id === 'cms'">
              <c-text as="p" margin-bottom="5">Input fields in CMS</c-text>
              <c-image :src="require(content.panel[0])" alt="CMS" w="800px" />
              <c-text as="p" margin-top="5" margin-bottom="5"
                >Script and configuration
              </c-text>
              <nuxt-content :document="content.panel[1]" />
            </div>
            <div v-show="content.id !== 'cms'">
              <nuxt-content :document="content.panel" />
            </div>
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
    CBox
  },
  props: {
    contents: {
      type: Array,
      default: () => ([]),
    },
  },
  data () {
    return {
      isVisible: false,
      tabTitles: {
        template: 'Template',
        script: 'Script',
        cms: 'CMS integration',
      }
    }
  },
}
</script>
