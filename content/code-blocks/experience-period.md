```js
experiencePeriod () {
  const startingDates = {
    webIndustry: '2007-06-01',
    programming: '2012-01-01',
  }

  const calculatePeriod = (date) => {
    return Math.round(
      (new Date() - new Date(date)) / 1000 / 60 / 60 / 24 / 365
    );
  }

  return {
    webIndustry: calculatePeriod(startingDates.webIndustry),
    programming: calculatePeriod(startingDates.programming),
  };
},
```