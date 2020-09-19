```js
coffeesDrank () {
  const currentLocalHour = new Date().getHours();
  let numberOfCups;

  switch(true) {
    // From 8:00 to 10:59
    case (currentLocalHour >= 8 && currentLocalHour <= 10):
      numberOfCups = 1;
      break;
    // From 11:00 to 16:59
    case (currentLocalHour >= 11 && currentLocalHour <= 16):
      numberOfCups = 2;
      break;
    // From 17:00 to 23:59
    case (currentLocalHour >= 17 && currentLocalHour <= 23):
      numberOfCups = 3;
      break;
    // Any other time (covers from 0:00 to 7:59 - usually sleeping at that time)
    default:
      numberOfCups = 0;
  }

  return numberOfCups;
},
```