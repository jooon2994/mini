from flask import Blueprint, jsonify, request
import json
import os

api_bp = Blueprint('api', __name__)

PRODUCTS_FILE = os.path.join(os.path.dirname(__file__), 'products.json')

# Load products from JSON file
def load_products():
    with open(PRODUCTS_FILE, 'r') as file:
        return json.load(file)

# Save products to JSON file
def save_products(products):
    with open(PRODUCTS_FILE, 'w') as file:
        json.dump(products, file, indent=4)

# Get all products
@api_bp.route('/products', methods=['GET'])
def get_products():
    products = load_products()
    return jsonify(products)

# Add a new product (Admin only)
@api_bp.route('/products', methods=['POST'])
def add_product():
    product = request.json
    products = load_products()
    products.append(product)
    save_products(products)
    return jsonify({"message": "Product added successfully"}), 201

# Handle orders (example route)
@api_bp.route('/orders', methods=['POST'])
def handle_orders():
    order_details = request.json
    # Process order logic here
    return jsonify({"message": "Order received! Our customer care will contact you within an hour."})
