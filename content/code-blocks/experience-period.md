```js
experiencePeriod () {
  const datesStart = {
    webIndustry: '2007-06-01',
    programming: '2012-01-01',
  }

  const calculatePeriod = (dateStart) => {
    return Math.round(
      new Date(new Date() - new Date(dateStart)) / 1000 / 60 / 60 / 24 / 365
    );
  }

  return {
    webIndustry: calculatePeriod(datesStart.webIndustry),
    programming: calculatePeriod(datesStart.programming),
  };
},
```