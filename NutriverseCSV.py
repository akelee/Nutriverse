import csv
field_names = ['Age', 'Gender', 'Weight_kg', 'Height_cm', 'Activity_level', 'Status']

# data = [{'Age': 25, 'Gender': 'Female', 'Weight_kg': 64, 'Height_cm': 168, 'Activity_level': 'Moderate', 'Status': 'Pregnant'},
#         {'Age': 35, 'Gender': 'Female', 'Weight_kg': 68, 'Height_cm': 173, 'Activity_level': 'Low', 'Status': 'Lactating'},
#         {'Age': 30, 'Gender': 'Female', 'Weight_kg': 55, 'Height_cm': 160, 'Activity_level': 'High', 'Status': 'Pregnant'},
#         {'Age': 27, 'Gender': 'Male', 'Weight_kg': 62, 'Height_cm': 178, 'Activity_level': 'Moderate', 'Status': 'None'},
#         {'Age': 21, 'Gender': 'Male', 'Weight_kg': 76, 'Height_cm': 180, 'Activity_level': 'High', 'Status': 'None'},
#         {'Age': 21, 'Gender': 'Male', 'Weight_kg': 76, 'Height_cm': 180, 'Activity_level': 'High', 'Status': 'None'},
#         ]
#
# with open('nutriverse.csv', 'w+') as csv_file:
#     spreadsheet = csv.DictWriter(csv_file, fieldnames = field_names)
#     spreadsheet.writeheader()
#     spreadsheet.writerows(data)
data = [{'Age': 28, 'Gender': 'Female', 'Weight_kg': 66, 'Height_cm': 166, 'Activity_level': 'Moderate', 'Status': 'Pregnant'},
        {'Age': 21, 'Gender': 'Male', 'Weight_kg': 88, 'Height_cm': 194, 'Activity_level': 'Low', 'Status': 'None'},


        ]
with open('nutriverse.csv', 'a+') as csv_file:
    field_names = ['Age', 'Gender', 'Weight_kg', 'Height_cm', 'Activity_level', 'Status']
    writer = csv.DictWriter(csv_file, fieldnames = field_names)
    writer.writerows(data)
