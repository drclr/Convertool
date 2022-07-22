

const app = Vue.createApp({
  data() {
    return {
      initialUnit: '',
      unitWanted: '',
      numberToConvert: 0,
    }
  },
  computed: {
    toConvert() {
      window.scrollTo(0, 0);

      const TabsUnitConversion = [["lb", "g", "453.59237"], ["lb", "kg", "0.45359237"], ["kg", "lb", "2.20462262"], ["kg", "metric ton", "0.001"]];

      if (this.initialUnit === this.unitWanted) {
        return this.numberToConvert;
      }

      if ((this.initialUnit === 'lb') && (this.unitWanted === 'metric ton')) {
        return this.numberToConvert * Number(TabsUnitConversion[1][2]) * Number(TabsUnitConversion[3][2])
      }

      if ((this.initialUnit === 'metric ton') && (this.unitWanted === 'lb')) {
        return this.numberToConvert * (TabsUnitConversion[2][2]) * (1 / Number(TabsUnitConversion[3][2]))

      }

      if ((this.initialUnit === 'g') && (this.unitWanted === 'kg')) {
        return this.numberToConvert * Number(TabsUnitConversion[3][2])
      }

      if ((this.initialUnit === 'kg') && (this.unitWanted === 'g')) {
        return this.numberToConvert * (1 / Number(TabsUnitConversion[3][2]))
      }

      if ((this.initialUnit === 'g') && (this.unitWanted === 'metric ton')) {
        return this.numberToConvert * Number(TabsUnitConversion[3][2]) * Number(TabsUnitConversion[3][2])
      }

      if ((this.initialUnit === 'metric ton') && (this.unitWanted === 'g')) {
        return this.numberToConvert * (1 / (Number(TabsUnitConversion[3][2]) * Number(TabsUnitConversion[3][2])))
      }

      for (const tab of TabsUnitConversion) {
        if ((tab[0] === this.initialUnit) && (tab[1] === this.unitWanted)) {
          return this.numberToConvert * Number(tab[2])
        }
        if ((tab[1] === this.initialUnit) && (tab[0] === this.unitWanted)) {
          return this.numberToConvert * (1 / Number(tab[2]))
        }
      }


    }
  }
});
app.mount("#app");