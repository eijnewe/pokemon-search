# 🔍 Pokemon Search Interface

A beautiful, responsive web application for searching Pokemon information using the PokeAPI. Built with vanilla HTML, CSS, and JavaScript.

## ✨ Features

- **Search Pokemon by name** - Enter any Pokemon name to get detailed information
- **Beautiful UI** - Modern gradient design with smooth animations
- **Responsive design** - Works perfectly on desktop and mobile devices
- **Real-time search** - Instant results with loading states
- **Detailed Pokemon info** - View ID, height, weight, types, and abilities
- **Error handling** - Graceful handling of invalid searches

## 🚀 How to Use

1. Open `index.html` in your web browser
2. Enter a Pokemon name in the search field (e.g., "pikachu", "charizard", "mewtwo")
3. Click "Go" or press Enter to search
4. View the Pokemon's details including image, stats, and abilities

## 🛠️ Technical Details

### Files Structure

- `index.html` - Main HTML structure with search form
- `main.js` - JavaScript logic for API calls and DOM manipulation
- `style.css` - Modern CSS styling with gradients and animations

### API Integration

- Uses [PokeAPI](https://pokeapi.co/) for Pokemon data
- Fetches Pokemon information by name or ID
- Displays comprehensive Pokemon details including:
  - Official artwork
  - Pokemon ID number
  - Height and weight (converted to meters/kilograms)
  - Type(s)
  - Abilities

### Key Features

- **Input validation** - Requires minimum 3 characters
- **Loading states** - Shows "Searching..." during API calls
- **Error handling** - Displays user-friendly error messages
- **Case insensitive** - Works with any capitalization
- **Smooth animations** - CSS transitions and keyframe animations

## 🎨 Design Features

- **Gradient backgrounds** - Beautiful color transitions
- **Card-based layout** - Clean, modern Pokemon display cards
- **Hover effects** - Interactive elements with smooth transitions
- **Mobile responsive** - Optimized for all screen sizes
- **Accessibility** - Proper semantic HTML and ARIA labels

## 🔧 Development

To run this project locally:

1. Clone or download the repository
2. Open `index.html` in a web browser
3. No build process required - pure vanilla web technologies!

## 📱 Browser Compatibility

Works in all modern browsers that support:

- ES6+ JavaScript features
- CSS Grid and Flexbox
- Fetch API
- CSS Custom Properties

## 🎯 Future Enhancements

Potential improvements could include:

- Pokemon type filtering
- Search history
- Favorites functionality
- Evolution chain display
- Move sets and stats
- Comparison between Pokemon
