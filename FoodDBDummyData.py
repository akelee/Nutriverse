import csv
with open('NEVO2021.csv' ,'r') as csv_file:
        spreadsheet = csv.DictReader(csv_file)
        for row in spreadsheet:
                print(row)

# file = open('NEVO2021.csv')
# type(file)
# csvreader = csv.reader(file)
# header = []
# header = next(csvreader)
# header
#
# rows = []
# for row in csvreader:
#         rows.append(row)
# rows
# file.close()

# import pandas as pd
# import csv
# df = pd.read_csv(r'C:\Users\Alexis\Desktop\NEVO2021.csv')
# print (df)