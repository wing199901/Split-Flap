/* global require console process Promise module */

const express = require('express'),
  app = express();

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getTail() {
  let c = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  return `N${getRandomInt(9999)}${c[getRandomInt(c.length - 1)]}`;
}

function getAirline() {
  const airlines = [
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
    'QFA'
  ];
  return airlines[getRandomInt(airlines.length - 1)];
}

function getTime() {
  return '01:23';
}

function getFlight() {
  return getRandomInt(2000);
}

function getHeading() {
  return getRandomInt(359)
    .toString()
    .padStart(3, '0');
}

function getGate() {
  const t = ['A', 'B', 'C'][getRandomInt(2)];
  const g = getRandomInt(30);
  return `${t}${g}`;
}

function getCity() {
  const cities = [
    'Atlanta',
    'Baltimore',
    'Charleston',
    'Durban',
    'Edinburgh',
    'Frankfurt',
    'Galveston',
    'Havana',
    'Iowa City',
    'Jakarta',
    'Karachi',
    'Los Angeles',
    'Mexico City',
    'Nairobi',
    'Ontario',
    'Pittsburgh',
    'Quebec City',
    'Roanoake',
    'San Diego',
    'Tallahassee'
  ];
  return cities[getRandomInt(20)];
}

function getTime() {
  let hrs = getRandomInt(23)
    .toString()
    .padStart(2, '0');
  let mins = getRandomInt(59)
    .toString()
    .padStart(2, '0');
  return `${hrs}${mins}`;
}

// ========================================================================
// API

app.use('/api/arrivals', (req, res) => {
  let r = {

    data: [
      {
        airline: "SWA",
        city: "BISHOP HALL JUBILEE SCHOOL",
        remarks: "ON TIME"
      },
      {
        airline: "AAL",
        city: "Ccc Tam Lee Lai Fun Memorial Secondary School",
        remarks: "ON TIME"
      },
      {
        airline: "BAW",
        city: "Cognitio College (Kowloon)",
        remarks: "ON TIME"
      },
      {
        airline: "DAL",
        city: "HKUGA College",
        remarks: "ON TIME"
      },
      {
        airline: "UAE",
        city: "LOK SIN TONG KU CHIU MAN SECONDARY SCHOOL",
        remarks: "ON TIME"
      },
      {
        airline: "KLM",
        city: "Lok Sin Tong Wong Chung Ming Secondary school",
        remarks: "ON TIME"
      },
      {
        airline: "DLH",
        city: "Lok Sin Tong Yu Kan Hing Secondary School",
        remarks: "ON TIME"
      },
      {
        airline: "ASA",
        city: "PHC Wing Kwong College",
        remarks: "ON TIME"
      },
      {
        airline: "UAL",
        city: "Sai Kung Sung Tsun Catholic School (Secondary Section)",
        remarks: "ON TIME"
      },
      {
        airline: "FDX",
        city: "St Paul's College",
        remarks: "ON TIME"
      },
      {
        airline: "PXM",
        city: "Tai Kwong Hilary College",
        remarks: "ON TIME"
      },
      {
        airline: "SKW",
        city: "TWGHs Kap Yan Directors' College",
        remarks: "ON TIME"
      },
      {
        airline: "JBU",
        city: "West Island School",
        remarks: "ON TIME"
      },
      {
        airline: "ACA",
        city: "WONG SHIU CHI SECONDARY SCHOOL",
        remarks: "ON TIME"
      },
      {
        airline: "QXE",
        city: "YING WA COLLEGE",
        remarks: "ON TIME"
      },
      {
        airline: "NKS",
        city: "Concordia Lutheran School",
        remarks: "ON TIME"
      },
      {
        airline: "VIR",
        city: "Hong Kong Teachers' Association Lee Heng Kwei Secondary School",
        remarks: "ON TIME"
      },
      {
        airline: "LXJ",
        city: "True Light Middle School of Hong Kong",
        remarks: "ON TIME"
      },
      {
        airline: "QFA",
        city: "Man Kwan Pak Kau College",
        remarks: "ON TIME"
      },
      {
        airline: "SSC",
        city: "St Stephen's College",
        remarks: "ON TIME"
      },
      {
        airline: "UCC",
        city: "United Christian College (Kowloon East)",
        remarks: "ON TIME"
      },
    ]
  };

  // for (let i = 0; i < 18; i++) {
  //   // Create the data for a row.
  //   let data = {
  //     airline: getAirline(),
  //     flight: getFlight(),
  //     city: getCity(),
  //     gate: getGate(),
  //     scheduled: getTime()
  //   };

  //   // Let's add an occasional delayed flight.
  //   data.status = getRandomInt(10) > 7 ? 'B' : 'A';
  //   if (data.status === 'B') {
  //     data.remarks = `Delayed ${getRandomInt(50)}M`;
  //   }

  //   // Add the row the the response.
  //   r.data.push(data);
  // }

  res.json(r);
});

// ========================================================================
// STATIC FILES
app.use('/', express.static('public'));

// ========================================================================
// WEB SERVER
const port = process.env.PORT || 3000;
app.listen(port);
console.log('split flap started on port ' + port);
