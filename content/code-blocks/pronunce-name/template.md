```html
<c-pseudo-box as="button" @click="pronunceName()">
  <c-icon name="volume-up" margin-left="2px" />
  <audio ref="name-pronunciation">
    <source
      :src="require('@/assets/audio/pronounce-ziga.mp3')"
      type="audio/mpeg"
    />
  </audio>
</c-pseudo-box>
```