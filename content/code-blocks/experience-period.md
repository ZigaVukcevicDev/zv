<br />
<p>Template</p>

```html
<c-stat>
  <c-stat-number>
    {{ calculateExperiencePeriod('2007-06-01') }}
  </c-stat-number>
  <c-stat-label>years in the web industry</c-stat-label>
  <c-stat-number>
    {{ calculateExperiencePeriod('2012-01-01') }}
  </c-stat-number>
  <c-stat-label>years of active programming</c-stat-label>
</c-stat>
```

<p>Script</p>

```js
methods: {
  calculateExperiencePeriod (startDate) {
    const numberOfYears = Math.round(
      (new Date() - new Date(startDate)) / 1000 / 60 / 60 / 24 / 365
    );
    const suffixSign = '+';

    return `${numberOfYears}${suffixSign}`;
  },
},
```