const { parseISO, isValid, format: formatFns } = require('date-fns');
const { ptBR } = require('date-fns/locale');

function parse (date) {
  if (typeof date === 'string' && date.includes('/')) return parseISO(date.split('/').reverse().join('-'));
  if (typeof date === 'string') return new Date(date);
  return date;
};

function format (date, style) {
  return formatFns(date, style, { locale: ptBR });
};

module.exports = {
  isValid: date => isValid(parse(date)),

  formatDate: (date, formatStyle) => format(parse(date), formatStyle),

  parseISO: date => {
    if (typeof date === 'string' && date.includes('/')) return parseISO(date.split('/').reverse().join('-'));
    if (typeof date === 'string') return new Date(date);
    return date;
  }
};
