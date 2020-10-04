Invoking component

```html
<skills id="skills-main" :content="doc.skills.main" />
```

Component itself

```html
<template>
  <c-box width="100%" padding-top="5">
    <c-heading :id="id" as="h2" margin-bottom="5">
      {{ content.heading }}
    </c-heading>
    <c-box width="75%" margin-left="5" v-html="$md.render(content.list)" />
  </c-box>
</template>
```