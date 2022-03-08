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
    'QFA',
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
        flight: 5,
        city: "Team ORIX",
        gate: "",
        status: "A",
        remarks: "BOARDING"
      },
      {
        airline: "AAL",
        flight: 1,
        city: "LOK SIN TONG KU CHIU MAN SECONDARY SCHOOL",
        gate: "NT1",
        status: "B",
        remarks: "GATE OPEN"
      },
      {
        airline: "BAW",
        flight: 1,
        city: "Sai Kung Sung Tsun Catholic School (Secondary Section)",
        gate: "NT8",
        status: "B",
        remarks: "GATE OPEN"
      },
      {
        airline: "DAL",
        flight: 1,
        city: "Pui Ying Secondary School",
        gate: "HK1",
        status: "C",
        remarks: "LAST CALL"
      },
      {
        airline: "UAE",
        flight: 1,
        city: "St Paul's College",
        gate: "HK1",
        status: "B",
        remarks: "GATE OPEN"
      },
      {
        airline: "KLM",
        flight: 1,
        city: "Cognitio College (Kowloon)",
        gate: "KL3",
        status: "A",
        remarks: "BOARDING"
      },
      {
        airline: "DLH",
        flight: 1,
        city: "Munsang College",
        gate: "KL3",
        status: "C",
        remarks: "LAST CALL"
      },
      {
        airline: "ASA",
        flight: 1,
        city: "Yuen Long Merchants Association Secondary School",
        gate: "NT4",
        status: "C",
        remarks: "LAST CALL"
      },
      {
        airline: "UAL",
        flight: 1,
        city: "Ccc Tam Lee Lai Fun Memorial Secondary School",
        gate: "NT3",
        status: "B",
        remarks: "GATE OPEN"
      },
      {
        airline: "FDX",
        flight: 1,
        city: "True Light Middle School of Hong Kong",
        gate: "HK2",
        status: "B",
        remarks: "GATE OPEN"
      },
      {
        airline: "PXM",
        flight: 1,
        city: "Caritas St. Joseph Secondary School",
        gate: "NT1",
        status: "C",
        remarks: "LAST CALL"
      },
      {
        airline: "SKW",
        flight: 1,
        city: "SKH Lam Woo Memorial Secondary School",
        gate: "NT1",
        status: "C",
        remarks: "LAST CALL"
      },
      {
        airline: "JBU",
        flight: 1,
        city: "TWGHs Kap Yan Directors' College",
        gate: "NT5",
        status: "A",
        remarks: "BOARDING"
      },
      {
        airline: "ACA",
        flight: 1,
        city: "BISHOP HALL JUBILEE SCHOOL",
        gate: "KL3",
        status: "B",
        remarks: "GATE OPEN"
      },
      {
        airline: "QXE",
        flight: 1,
        city: "HKUGA College",
        gate: "HK4",
        status: "B",
        remarks: "GATE OPEN"
      },
      {
        airline: "NKS",
        flight: 1,
        city: "Caritas Ma On Shan Secondary School",
        gate: "NT7",
        status: "C",
        remarks: "LAST CALL"
      },
      {
        airline: "VIR",
        flight: 1,
        city: "Lok Sin Tong Yu Kan Hing Secondary School",
        gate: "KL4",
        status: "B",
        remarks: "GATE OPEN"
      },
      {
        airline: "LXJ",
        flight: 1,
        city: "Steward Pooi Kei College",
        gate: "NT7",
        status: "C",
        remarks: "LAST CALL"
      },
      {
        airline: "QFA",
        flight: 1,
        city: "Cheung Sha Wan Catholic Secondary School",
        gate: "KL2",
        status: "C",
        remarks: "LAST CALL"
      },
      {
        airline: "AAA",
        flight: 1,
        city: "Lok Sin Tong Wong Chung Ming Secondary school",
        gate: "KL4",
        status: "B",
        remarks: "GATE OPEN"
      },
      {
        airline: "AAB",
        flight: 1,
        city: "Notre Dame College",
        gate: "KL3",
        status: "C",
        remarks: "LAST CALL"
      },
      {
        airline: "AAC",
        flight: 1,
        city: "West Island School",
        gate: "HK1",
        status: "B",
        remarks: "GATE OPEN"
      },
      {
        airline: "AAD",
        flight: 2,
        city: "WONG SHIU CHI SECONDARY SCHOOL",
        gate: "NT6",
        status: "B",
        remarks: "GATE OPEN"
      },
      {
        airline: "AAE",
        flight: 1,
        city: "Tuen Mun Catholic Secondary School",
        gate: "NT3",
        status: "C",
        remarks: "LAST CALL"
      },
      {
        airline: "AAF",
        flight: 1,
        city: "Queen's College",
        gate: "HK1",
        status: "C",
        remarks: "LAST CALL"
      },
      {
        airline: "AAG",
        flight: 1,
        city: "Tai Kwong Hilary College",
        gate: "NT6",
        status: "B",
        remarks: "GATE OPEN"
      },
      {
        airline: "AAH",
        flight: 1,
        city: "Tsung Tsin College",
        gate: "NT3",
        status: "C",
        remarks: "LAST CALL"
      },
      {
        airline: "AAI",
        flight: 1,
        city: "PHC Wing Kwong College",
        gate: "KL4",
        status: "C",
        remarks: "LAST CALL"
      },
      {
        airline: "AAJ",
        flight: 1,
        city: "YING WA COLLEGE",
        gate: "KL2",
        status: "B",
        remarks: "GATE OPEN"
      },
      {
        airline: "AAK",
        flight: 1,
        city: "Lee Kau Yan Memorial School",
        gate: "KL4",
        status: "C",
        remarks: "LAST CALL"
      },
      {
        airline: "ZZZ",
        flight: 1,
        city: "Concordia Lutheran School",
        gate: "KL2",
        status: "B",
        remarks: "GATE OPEN"
      },
      {
        airline: "AAM",
        flight: 1,
        city: "Hong Kong Teachers' Association Lee Heng Kwei Secondary School",
        gate: "NT6",
        status: "B",
        remarks: "GATE OPEN"
      },
      {
        airline: "AAN",
        flight: 1,
        city: "NT Heung Yee Kuk Tai Po District Secondary School",
        gate: "NT6",
        status: "C",
        remarks: "LAST CALL"
      },
      {
        airline: "AAO",
        flight: 1,
        city: "St. Paul’s School (Lam Tin)",
        gate: "KL5",
        status: "C",
        remarks: "LAST CALL"
      },
      {
        airline: "AAP",
        flight: 1,
        city: "Carmel Alison Lam Foundation Secondary School",
        gate: "NT1",
        status: "C",
        remarks: "LAST CALL"
      },
      {
        airline: "AAQ",
        flight: 1,
        city: "San Wui Commercial Society Secondary School",
        gate: "NT3",
        status: "C",
        remarks: "LAST CALL"
      },
      {
        airline: "AAR",
        flight: 1,
        city: "TWGHs Chen Zao Men College",
        gate: "NT1",
        status: "C",
        remarks: "LAST CALL"
      },
      {
        airline: "AAS",
        flight: 1,
        city: "Yan Oi Tong Tin Ka Ping Secondary School",
        gate: "NT3",
        status: "C",
        remarks: "LAST CALL"
      },
      {
        airline: "AAT",
        flight: 1,
        city: "United Christian College (Kowloon East)",
        gate: "KL5",
        status: "B",
        remarks: "GATE OPEN"
      },
      {
        airline: "AAU",
        flight: 1,
        city: "Queen's College Old Boys' Association Secoondary School",
        gate: "HK1",
        status: "B",
        remarks: "GATE OPEN"
      },
      {
        airline: "AAV",
        flight: 1,
        city: "Christian and Missionary Alliance Sun Kei Secondary School",
        gate: "NT8",
        status: "C",
        remarks: "LAST CALL"
      },
      {
        airline: "AAW",
        flight: 1,
        city: "Man Kwan QualiEd College",
        gate: "NT8",
        status: "C",
        remarks: "LAST CALL"
      },
      {
        airline: "AAX",
        flight: 1,
        city: "Po Leung Kuk Lo Kit Sing (1983) College",
        gate: "NT1",
        status: "C",
        remarks: "LAST CALL"
      },
      {
        airline: "AAY",
        flight: 1,
        city: "Man Kwan Pak Kau College",
        gate: "NT4",
        status: "B",
        remarks: "GATE OPEN"
      },
      {
        airline: "AAZ",
        flight: 1,
        city: "St Stephen's College",
        gate: "HK4",
        status: "B",
        remarks: "GATE OPEN"
      },
      {
        airline: "ABA",
        flight: 1,
        city: "Ng Wah Catholic Secondary School",
        gate: "KL4",
        status: "C",
        remarks: "LAST CALL"
      },
      {
        airline: "ABB",
        flight: 1,
        city: "China Holiness Church Living Spirit College",
        gate: "NT6",
        status: "C",
        remarks: "LAST CALL"
      },
      {
        airline: "ABC",
        flight: 1,
        city: "The Methodist Church Hong Kong Wesley College",
        gate: "HK3",
        status: "C",
        remarks: "LAST CALL"
      },
      {
        airline: "ABD",
        flight: 1,
        city: "PLK Vicwood KT Chong Sixth Form College",
        gate: "KL1",
        status: "C",
        remarks: "LAST CALL"
      }
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
