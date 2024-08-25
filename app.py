from flask import Flask, request, jsonify

app = Flask(__name__)

# POST method: Process the input data and return the response
@app.route('/bfhl', methods=['POST'])
def process_data():
    try:
        data = request.json.get('data')
        if not data:
            return jsonify({"is_success": False, "message": "Invalid input"}), 400
        
        # Separate numbers and alphabets
        numbers = [item for item in data if item.isdigit()]
        alphabets = [item for item in data if item.isalpha()]
        highest_lowercase = [max([item for item in alphabets if item.islower()])] if any(c.islower() for c in alphabets) else []

        response = {
            "is_success": True,
            "user_id": "tushar_panwar_03082002",
            "email": "tushar@college.edu",
            "roll_number": "21BCE1074",
            "numbers": numbers,
            "alphabets": alphabets,
            "highest_lowercase_alphabet": highest_lowercase
        }
        return jsonify(response)
    
    except Exception as e:
        return jsonify({"is_success": False, "message": str(e)}), 500

# GET method: Return a hardcoded operation_code
@app.route('/bfhl', methods=['GET'])
def get_operation_code():
    return jsonify({"operation_code": 1}), 200

if __name__ == '__main__':
    app.run(debug=True)
