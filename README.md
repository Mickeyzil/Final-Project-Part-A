# EV Charge – Final Project Part A

## Authors
- Gil Cohen
- Mickey Zilberman

---

# Project Description

EV Charge is a modern web application designed to help electric vehicle drivers locate nearby charging stations and reserve charging spots quickly and easily.

The project includes:
- Interactive main menu
- Nearby charging stations page
- Reservation form with validation
- Dynamic station loading using JSON
- Responsive and user-friendly design inspired by Figma

---

# Technologies Used

- HTML5
- CSS3
- JavaScript
- JSON

---

# Project Structure

## Pages
- `MainMenu.html`
- `NearbyStations.html`
- `Form.html`

## Folders

- `CSS/`
  - Contains the main stylesheet (`style.css`)

- `JS/`
  - Contains JavaScript files:
    - `main.js`
    - `form.js`

- `data/`
  - Contains JSON data:
    - `Stations.json`

- `Images/`
  - Contains project images and logo

---

# Features

## Main Menu
- Interactive dashboard layout
- Navigation cards
- Hover effects and animations
- Responsive design
- Styled according to the Figma prototype

## Nearby Stations Page
- Dynamic station loading from JSON
- Availability indicators
- Charging power information
- Connector types
- Amenities display
- Reservation buttons

## Reservation Form
- Modern form design
- JavaScript validation
- Success confirmation screen
- Input validation for:
  - Full name
  - Email
  - Phone number
  - Arrival time
  - Car type
  - Connector type

---

# JSON Usage

Charging station data is stored inside:

```bash
data/Stations.json