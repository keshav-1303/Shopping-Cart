# Shopping Cart App using React

A simple shopping cart application built with React and Redux that allows users to manage items in their cart.

## Features

- Add items to cart
- Remove items from cart
- Calculate total price
- Persist cart state across components

## Tech Stack

- **React** - UI library for building the user interface
- **Redux** - State management for cart data
- **React-Redux** - Official React bindings for Redux

## Installation

```bash
npm install
npm start
```


## Available Actions

- `addToCart(item)` - Add item to cart
- `removeFromCart(id)` - Remove item from cart

## Components

### Cart
Main cart component that displays all cart items and totals.

### CartItem
Individual cart item component with quantity controls and remove button.

### Product
Sample product list to demonstrate adding items to cart.

