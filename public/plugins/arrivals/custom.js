sf.display.ImageDrum = function() {
  return [
    ' ',
    'SWA',
    'AAL',
    'BAW',
    'DAL',
    'UAE',
    'KLM',
    'DLH',
    'ASA',
    'UAL',
    'FDX',
    'PXM',
    'SKW',
    'JBU',
    'ACA',
    'QXE',
    'NKS',
    'VIR',
    'LXJ',
    'QFA',
    'SSC',
    'UCC',
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
    'ZZZ',
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
    'ABJ'
  ];
};

sf.plugins.arrivals = {
  dataType: 'json',

  url: function(options) {
    return 'api/arrivals';
  },

  formatData: function(response) {
    return response.data;
  }
};
