export const prettydate = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const createHandler = (divisor: number, noun: string, restOfString: string) => {
    return (diff: number) => {
      const n = Math.floor(diff / divisor);
      const pluralizedNoun = noun + (n > 1 ? 's' : '');
      return '' + n + ' ' + ' ' + pluralizedNoun;
    };
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const prettyDate = (time: string) => {
    const date = new Date((time || '').replace(/-/g, '/').replace(/[TZ]/g, ' ')),
      diff = (new Date().getTime() - date.getTime()) / 1000,
      day_diff = Math.floor(diff / 86400);

    if (isNaN(day_diff) || day_diff < 0 ) return; //|| day_diff >= 31
    return (
      (day_diff == 0 &&
        ((diff < 60 && 'en este momento') ||
          (diff < 120 && '1 min') ||
          (diff < 3600 && Math.floor(diff / 60) + ' minutes ago') ||
          (diff < 7200 && '1 h') ||
          (diff < 86400 && Math.floor(diff / 3600) + ' hours ago'))) ||
      (day_diff == 1 && 'ayer') ||
      (day_diff < 7 && day_diff + ' días') ||
      (day_diff < 31 && Math.ceil(day_diff / 7) + ' semanas') || 
      (day_diff < 147 && Math.ceil(day_diff / 12) + ' meses') ||
      (day_diff < Infinity && Math.ceil(day_diff / 365) + (Math.ceil(day_diff / 365)>1? ' años': ' año'))
    );
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const formatters = [
    {
      threshold: 1,
      handler: function () {
        return 'en este momento';
      },
    },
    { threshold: 60, handler: createHandler(1, 'segundo', 'hace') },
    { threshold: 3600, handler: createHandler(60, 'minuto', 'hace') },
    { threshold: 86400, handler: createHandler(3600, 'hora', 'hace') },
    {
      threshold: 172800,
      handler: function () {
        return 'ayer';
      },
    },
    { threshold: 604800, handler: createHandler(86400, 'día', 'hace') },
    { threshold: 2592000, handler: createHandler(604800, 'semana', 'hace') },
    { threshold: 31536000, handler: createHandler(2592000, 'mes', 'hace') },
    { threshold: Infinity, handler: createHandler(31536000, 'año', 'hace') },
  ];

  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    /*format: function (date: Date) {
      const diff = (new Date().getTime() - date.getTime()) / 1000;
    
      for (let i = 0; i < formatters.length; i++) {
        if (diff < formatters[i].threshold) {
          return formatters[i].handler(diff);
        }
      }
      throw new Error('exhausted all formatter options, none found'); //should never be reached
    },*/
    format: function (date: string) {
      return prettyDate(date);
    },
  };
};
