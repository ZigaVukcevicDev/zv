```html
<c-stat>
  <c-stat-number>
    {{ calculateExperiencePeriod('2007-06-01') }}
  </c-stat-number>
  <c-stat-label>
    {{ doc.stats.part1 }}
  </c-stat-label>
  <c-stat-number>
    {{ calculateExperiencePeriod('2012-01-01') }}
  </c-stat-number>
  <c-stat-label>
    {{ doc.stats.part2 }}
  </c-stat-label>
</c-stat>
```