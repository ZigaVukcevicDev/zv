```js
calculateExperiencePeriod (startDate) {
  return Math.round(
    (new Date() - new Date(startDate)) / 1000 / 60 / 60 / 24 / 365
  );
},
```