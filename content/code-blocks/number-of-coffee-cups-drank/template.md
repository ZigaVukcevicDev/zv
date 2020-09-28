```html
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
```