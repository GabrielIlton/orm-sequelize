const { parseISO, isValid } = require('date-fns');

class DateHelper {
  #parse (date) {
    if (typeof date === 'string' && date.includes('/')) return parseISO(date.split('/').reverse().join('-'));
    if (typeof date === 'string') return new Date(date);
    return date;
  }

  isValid (date) {
    return isValid(this.#parse(date));
  }

  parseISO (date) {
    if (typeof date === 'string' && date.includes('/')) return parseISO(date.split('/').reverse().join('-'));
    if (typeof date === 'string') return new Date(date);
    return date;
  }
};

module.exports = DateHelper;
