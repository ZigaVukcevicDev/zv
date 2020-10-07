<template>
  <c-box width="50%" padding-top="10">
    <c-heading :id="id" as="h2" margin-bottom="5">Contact me</c-heading>
    <c-text margin-bottom="5">{{ content.text1 }}</c-text>
    <form name="form-contact" netlify>
      <c-box margin-bottom="3">
        <c-form-control is-required is-invalid>
          <c-form-label for="nameFull">Your full name</c-form-label>
          <c-input id="nameFull" type="text" @blur="handleInputChange" />
        </c-form-control>
      </c-box>
      <c-box margin-bottom="3">
        <c-form-control is-required>
          <c-form-label for="emailAddress">Your email address</c-form-label>
          <c-input id="emailAddress" type="email" @blur="handleInputChange" />
        </c-form-control>
      </c-box>
      <c-box margin-bottom="3">
        <c-form-control is-required>
          <c-form-label for="emailAddress">Your message</c-form-label>
          <c-textarea
            placeholder="Your message ..."
            @blur="handleTextAreaChange"
          />
        </c-form-control>
      </c-box>
      <c-button>Send message</c-button>
    </form>
    <c-text margin-top="5" margin-bottom="5">
      {{ content.text2 }}
    </c-text>
    <c-box>
      <c-link :href="content.link1.href" is-external>
        <c-icon :name="content.link1.icon" />
        {{ content.link1.text }}
      </c-link>
    </c-box>
    <c-box>
      <c-link :href="content.link2.href" is-external>
        <c-icon :name="content.link2.icon" />
        {{ content.link2.text }}
      </c-link>
    </c-box>
  </c-box>
</template>

<script lang="js">
import {
  CBox,
  CHeading,
  CInput,
  CTextarea,
  CLink,
  CIcon,
  CText,
  CButton,
  CFormControl,
  CFormLabel,
} from '@chakra-ui/vue';

export default {
  name: 'Contact',
  components: {
    CBox,
    CHeading,
    CInput,
    CTextarea,
    CLink,
    CIcon,
    CText,
    CButton,
    CFormControl,
    CFormLabel,
  },
  props: {
    id: {
      type: String,
      default: null,
    },
    content: {
      type: Object,
      default: () => ({}),
    },
  },
  data () {
    return {}
  },
  methods: {
    handleInputChange () {
      console.log(event.target.value);
    },
    handleTextAreaChange () {
      console.log(event.target.value);
    }
  },
}
</script>
