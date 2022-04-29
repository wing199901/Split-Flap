sf.display.ImageDrum = function () {
  return [
    ' ',
    // REPLACE STARTS HERE //
    'AAA',
    'AAB',
    'AAC',
    'AAD',
    'AAE',
    'AAF',
    'AAG',
    'AAH',
    'AAI',
    'AAJ',
    'AAK',
    'AAL',
    'AAM',
    'AAN',
    'AAO',
    'AAP',
    'AAQ',
    'AAR',
    'AAS',
    'AAT',
    'AAU',
    'AAV',
    'AAW',
    'AAX',
    'AAY',
    'AAZ',
    'ABA',
    'ABB',
    'ABC',
    'ABD',
    'ABE',
    'ABF',
    'ABG',
    'ABH',
    'ABI',
    'ABJ',
    'ABK',
    'ABL',
    'ABM',
    'ABN',
    'ABO',
    'ABP',
    'ABQ',
    'ABR',
    'ABS',
    'ABT',
    'ABU',
    'ABV'
    // REPLACE ENDS HERE //
  ];
};

sf.plugins.arrivals = {
  dataType: 'json',

  url: function (options) {
    return 'api/arrivals';
  },

  formatData: function (response) {
    return response.data;
  }
};
