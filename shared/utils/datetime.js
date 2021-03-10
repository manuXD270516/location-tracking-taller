const DATES_EQUALS = 1;
const DATE_FIRST_HIGHER = 2;
const DATE_FIRS_LESS = 3;

module.exports = {
  /**
   * compareParam:
   * 0: fechas iguales,
   * 1: fecha A mayor que fecha B
   * 2: fecha A menor que fecha B
   */
  compareDates: (dateA, dateB, compareParam = DATES_EQUALS) => {
    dateA = new Date(dateA).getTime();
    dateB = new Date(dateB).getTime();
    if (compareParam == DATES_EQUALS) {
      return dateA == dateB;
    } else if (compareParam == DATE_FIRST_HIGHER) {
      return dateA > dateB;
    } else {
      return dateA < dateB;
    }
  },
  CodeCompareTo: {
    DATES_EQUALS,
    DATE_FIRST_HIGHER,
    DATE_FIRS_LESS,
  },
};
