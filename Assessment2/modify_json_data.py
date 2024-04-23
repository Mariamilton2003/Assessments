import json
# Define the filename for the JSON data file
json_filename = "Assessment2/ex5.json"
# Load the JSON data from the file
with open(json_filename, "r") as json_file:
    data = json.load(json_file)
# Find the specific donut with name "Old Fashioned"
for donut in data:
    if donut["name"] == "Old Fashioned" and donut["type"] == "donut":
        # Add a new batter to the specified donut
        new_batter = {"id": "1005", "type": "Tea"}  # Use a new id for the batter
        donut["batters"]["batter"].append(new_batter)
        break  # Stop looping once we"ve updated the donut

# Write the updated JSON data back to the file
with open(json_filename, "w") as json_file:
    json.dump(data, json_file, indent=4)

print(f'Updated {json_filename} with a new batter for "Old Fashioned" donut.')
print(json.dumps(data, indent=4))