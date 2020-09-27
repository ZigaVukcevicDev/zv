```yaml
- name: 'Statistics'
  label: 'Statistics'
  format: 'json'
  file: 'content/statistics.json'
  widget: "object"
  fields:
    ...
    - label: "Text 3"
      name: "part3"
      widget: "object"
      fields:
        - { label: "Singular", name: "singular", widget: "string", required: true }
        - { label: "Plural", name: "plural", widget: "string", required: true }
```