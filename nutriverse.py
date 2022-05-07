import csv, json

vitamin_types = ['A', 'B6', 'B12', 'Biotin', 'C']  # add vitamins as required
genders = ['Male', 'Female']
pregnancy_statuses = ['Pregnant', 'Lactating', 'N/A']
statuses = ['']
age_lower_bounds = [0.0, 0.5, 1.0, 4.0, 9.0, 14.0, 19.0, 31.0, 51.0, 70.0]


# initializing the data structure with 'None' values
data_females = {
    gender: {
        status: {
            age_lower_bound: {
                vitamin_type: None for vitamin_type in vitamin_types
            } for age_lower_bound in age_lower_bounds
        } for status in pregnancy_statuses
    } for gender in genders if gender == 'Female'
}

data_males = {
    gender: {
        status: {
            age_lower_bound: {
                vitamin_type: None for vitamin_type in vitamin_types
            } for age_lower_bound in age_lower_bounds
        } for status in statuses
    } for gender in genders if gender == 'Male'
}

# print(data_males, data_females)

with open('vitamins.csv', 'r') as csv_file:
    spreadsheet = csv.DictReader(csv_file)
    for row in spreadsheet:
        status = ''
        pregnancy_status = 'Pregnant' if row['Pregnant'] else 'Lactating' if row['Lactating'] else 'N/A'
        # print(pregnancy_status)
        age_lower_bound = float(row['Age_range_lower'])
        # print(float(row['Age_range_lower']))
        vitamin_type = row['Vitamin_type']
        # print(vitamin_type)

        for gender in 'Male', 'Female':
            if gender == 'Male':
                data_males[gender][status][age_lower_bound][vitamin_type] = float(row[f'RDA_{gender}'] or 0)
            else:
                data_females[gender][pregnancy_status][age_lower_bound][vitamin_type] = float(row[f'RDA_{gender}'] or 0)

print(json.dumps(data_males, indent=2, sort_keys=True))
print()
print(json.dumps(data_females, indent=2, sort_keys=True))


def find_values_for_age(age, values):
    print(values[max(filter(lambda k: k <= age, values))])
    return values[max(filter(lambda k: k <= age, values))]


def find_values_for_category(gender, pregnancy_status, age):
    print(find_values_for_age(age, data[gender][pregnancy_status]))
    return find_values_for_age(age, data[gender][pregnancy_status])


# print(find_values_for_category('Female', 'Neither', 27))

