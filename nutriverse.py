import csv

vitamin_types = ['A', 'B6', 'B12']
genders = ['Male', 'Female']
pregnancy_statuses = ['Pregnant', 'Lactating', 'Neither']
age_lower_bounds = [0.0, 0.5, 1.0, 4.0, 9.0, 14.0, 19.0, 31.0, 51.0, 70.0]

data = {
    gender: {
        pregnancy_status: {
            age_lower_bound: {
                vitamin_type: None for vitamin_type in vitamin_types
            } for age_lower_bound in age_lower_bounds
        } for pregnancy_status in pregnancy_statuses
    } for gender in genders
}

with open('vitamins.csv', 'r') as csv_file:
    spreadsheet = csv.DictReader(csv_file)
    for row in spreadsheet:
        pregnancy_status = 'Pregnant' if row['Pregnant'] else 'Lactating' if row['Lactating'] else 'Neither'
        age_lower_bound = float(row['Age_range_lower'])
        vitamin_type = row['Vitamin_type']
        for gender in 'Male', 'Female':
            data[gender][pregnancy_status][age_lower_bound][vitamin_type] = float(row[f'RDA_{gender}'] or 0)


def find_values_for_age(age, values):
    return values[max(filter(lambda k: k <= age, values))]


def find_values_for_category(gender, pregnancy_status, age):
    return find_values_for_age(age, data[gender][pregnancy_status])


print(find_values_for_category('Female', 'Neither', 27))

# age, gender, status, bmi (weight/height)