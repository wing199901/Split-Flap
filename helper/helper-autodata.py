from __future__ import print_function

import os.path
import os
import numpy as np
import itertools
from datetime import datetime

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError



# To generate JS data for split-flap
# 1. Open command prompt
# 2. Edit IDX_START and IDX_END as needed
# 3. Type and execute:   python helper-autodata.py
# 4. Wait until file is ready

# !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
# ALL YOU NEED TO CHANGE IS THIS:
# "idx_<..>" is based on row number on Google Sheets
# by default (IDX_START = -1, IDX_END = -1), the JS data produced will be from beginning (2nd row) to end (whichever is the last filled row)
IDX_START = -1 
IDX_END = -1
# !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!




# ====================== SHEETS API =======================

# If modifying these scopes, delete the file token.json.
SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly']

# The ID and range of a sample spreadsheet.
SAMPLE_SPREADSHEET_ID = '1bNgaXSP4SPA4aZcauzQWv7UaWxae1jsa9XzEcNOYNkw'
SAMPLE_RANGE_NAME = 'Version 1!A2:E'


def main():
    global IDX_START, IDX_END
    """Shows basic usage of the Sheets API.
    Prints values from a sample spreadsheet.
    """
    creds = None
    # The file token.json stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
    if os.path.exists('token.json'):
        creds = Credentials.from_authorized_user_file('token.json', SCOPES)
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                'credentials.json', SCOPES)
            creds = flow.run_local_server(port=0)
        # Save the credentials for the next run
        with open('token.json', 'w') as token:
            token.write(creds.to_json())
    # =======================================================

    try:
        service = build('sheets', 'v4', credentials=creds)

        # Call the Sheets API
        sheet = service.spreadsheets()
        result = sheet.values().get(spreadsheetId=SAMPLE_SPREADSHEET_ID,
                                    range=SAMPLE_RANGE_NAME).execute()
        values = result.get('values', [])

        if not values:
            print('No data found.')
            return

        # =================== CODE BEGIN =================== #
        '''
        # FORMAT
        {
                airline: "SWA",
                flight: 1, // Team qty
                city: "BISHOP HALL JUBILEE SCHOOL", // School Name
                gate: "KL3", // School Code
                status: "A", // A, B, or C -- follows remarks
                remarks: "ON TIME" // Status
        },
        '''
        # AIRLINE
        arr_airline = []
        # AAA, AAB, AAC, ...  :
        arr_airline.extend(list(map(''.join, itertools.islice(itertools.product('ABCDEFGHIJKLMNOPQRSTUVWXYZ', repeat=3),100))))

        # FLIGHT       
        arr_flight = []

        # CITY
        arr_city = []

        # GATE
        arr_gate = []

        # REMARKS
        arr_remarks = []

        for row in values:
            # Print columns A and E, which correspond to indices 0 and 4.
            #print('%s, %s, %s, %s' % (row[1], row[2], row[3], row[4]))
            arr_flight.append(row[3])
            arr_city.append(row[1])
            arr_gate.append(row[2])
            arr_remarks.append(row[4])

        # STATUS
        # Follows remarks; indicates color
        arr_status = []
        for remarks in arr_remarks:
            if remarks == "BOARDING":
                arr_status.append("A")
            elif remarks == "GATE OPEN":
                arr_status.append("B")
            else:
                arr_status.append("C")

        # TRIM ARRAYS AS NECESSARY
        # "idx_<..>" is based on row number on Google Sheets MINUS ONE
        if IDX_START == -1:
            IDX_START = 0
        if IDX_END == -1:
            IDX_END = len(arr_city)
        arr_flight = arr_flight[IDX_START:IDX_END]
        arr_city = arr_city[IDX_START:IDX_END]
        arr_gate = arr_gate[IDX_START:IDX_END]
        arr_remarks = arr_remarks[IDX_START:IDX_END]

        # PRINT FOR APP.JS
        # print(len(arr_remarks)==len(arr_gate)==len(arr_city)==len(arr_flight)==len(arr_airline))
        time = datetime.now()
        #time = datetime.strptime("03/02/21 6:30", "%d/%m/%y %H:%M")
        pathname = os.getcwd() + "\{:04d}{:02d}{:02d}-{:02d}{:02d}\\".format(time.year, time.month, time.day, time.hour, time.minute)
        os.makedirs(os.path.dirname(pathname), exist_ok=True)
        filename = pathname + "splitflap-{:04d}{:02d}{:02d}-{:02d}{:02d}.txt".format(time.year, time.month, time.day, time.hour, time.minute)
        if(1):
            with open(filename, 'w') as f:
                for idx in range(len(arr_gate)):
                    f.write("{\n")
                    f.write("        airline: \"" + arr_airline[idx] + "\",\n")
                    f.write("        flight: " + str(arr_flight[idx]) + ",\n")
                    f.write("        city: \"" + arr_city[idx] + "\",\n")
                    f.write("        gate: \"" + arr_gate[idx] + "\",\n")
                    f.write("        status: \"" + arr_status[idx] + "\",\n")
                    f.write("        remarks: \"" + arr_remarks[idx] + "\"\n")
                    if idx < len(arr_gate)-1:
                        f.write("},\n")
                    else:
                        f.write("}")
            print("Text file is ready at "+filename)
        
        # PRINT FOR CUSTOM.CSS
        filename = pathname + "splitflap-css-{:04d}{:02d}{:02d}-{:02d}{:02d}.txt".format(time.year, time.month, time.day, time.hour, time.minute)
        if(1):
            with open(filename, 'w') as f:
                '''
                .splitflap .image span.AAA {
                background-position: 0px -840px;
                }
                '''
                y = []
                y.extend(np.arange(-80,-80+(-40*len(arr_gate)),-40))

                for idx in range(len(arr_gate)):
                    f.write(".splitflap .image span." + arr_airline[idx] + " {\n")
                    f.write("background-position: 0px max(" + str(y[idx]) + "px,"+ str(y[idx]) +"/1200*100vw)"+ ";\n")
                    f.write("}\n")
            print("Text file is ready at "+filename)

        filename = pathname + "splitflap-customjs-{:04d}{:02d}{:02d}-{:02d}{:02d}.txt".format(time.year, time.month, time.day, time.hour, time.minute)
        if(1):
            with open(filename, 'w') as f:
                for idx in arr_airline:
                    f.write("'" + idx + "',\n")
            print("Text file is ready at "+filename)

    except HttpError as err:
        print(err)

def remove_all_before(item, border):
    try:
    #search for the item
        index = item.index(border)
        print(f'the border is found at index {index}')
        return item[index:]
    except ValueError:
        print('border not present')
        return item

if __name__ == '__main__':
    main()
