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