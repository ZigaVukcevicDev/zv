```js
async asyncData ({ $content }) {
  const doc = {
    skills: await $content('skills').fetch(),
    ...
  }

  return { doc }
},
```

```yaml
- name: 'skills'
  label: 'Skills'
  format: 'json'
  file: 'content/skills.json'
  fields:
    - label: "Main"
      name: "main"
      widget: "object"
      fields:
        - { label: "Heading", name: "heading", widget: "string", required: true }
        - { label: "List", name: "list", widget: "markdown", buttons: ["bold", "link", "bulleted-list"], editor_components: [], mode: "rich_text", minimal: true, required: true }
```