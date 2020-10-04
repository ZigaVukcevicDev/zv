```js
async asyncData ({ $content }) {
  const doc = {
    stats: await $content('statistics').fetch(),
    ...
  }

  return { doc }
},
```

```yaml
- name: 'Statistics'
  label: 'Statistics'
  format: 'json'
  file: 'content/statistics.json'
  widget: "object"
  fields:
    - { label: "Text 1", name: "part1", widget: "string", required: true }
    - { label: "Text 2", name: "part2", widget: "string", required: true }
    ...
```