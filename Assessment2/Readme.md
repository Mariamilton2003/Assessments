---

# Update JSON Data Script

This Python script updates a specific donut entry in a JSON file (`ex5.json`) by adding a new batter to the "Old Fashioned" donut.

## Script Overview

The script performs the following actions:
- Loads JSON data from `ex5.json`.
- Searches for the donut entry with the name "Old Fashioned".
- Adds a new batter (`{ "id": "1005", "type": "Tea" }`) to the list of batters for the "Old Fashioned" donut.
- Writes the updated JSON data back to `ex5.json`.

## Usage

1. Ensure you have Python installed on your machine.
2. Place the `ex5.json` file in the same directory as the Python script (`modify_json_data.py`).
3. Run the script by executing the following command in the terminal or command prompt:

   ```bash
   python modify_json_data.py
   ```

4. After running the script, check the `ex5.json` file to see the updated JSON data.

## Example Output

Upon successful execution, the script will display the following message in the console:

<img src="https://drive.google.com/file/d/1kpXf3dI2kCil4XSuhHw4DMBzw19yH6N7/view?usp=sharing" alt="output image"/>



## Dependencies

- Python 3.x
- `json` module (standard library)

---
