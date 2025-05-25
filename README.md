# Digital Flexiload Rate Calculator

A modern, responsive web application for calculating commission rates and app rates for Digital Flexiload packages. Built with HTML5, CSS3, JavaScript, and styled with Tailwind CSS and DaisyUI.

![Digital Flexiload Rate Calculator](https://img.shields.io/badge/Status-Active-brightgreen) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black) ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)

## 🚀 Features

### 📱 **Responsive Design**

- Mobile-first approach with touch-optimized interface
- Adaptive layout for desktop, tablet, and mobile devices
- Progressive Web App (PWA) capabilities

### 💰 **Multiple Calculator Types**

#### 1. **Family/Special Pack Calculator**

- Calculate app rates for family packages
- Formula: `App Rate = Buy Offer + (Buy Offer × 0.03 + 7)`
- Real-time calculation with smooth animations

#### 2. **Drive Pack Calculator**

- Calculate commission and app rates for drive packages
- **Commission**: `Regular Amount - App Rate`
- **App Rate**: `Buy Offer + (Buy Offer × 0.03 + 7)`
- Color-coded profit/loss indicators

#### 3. **My GP/Banglalink/Bkash/Nagad Pack Calculator**

- Calculate cash back and commission rates
- Specialized for telecom and mobile financial services
- Real-time validation and error handling

### ✨ **User Experience Features**

- **Smooth Animations**: Fade-in, slide-up, and bounce effects
- **Real-time Validation**: Instant input validation with error messages
- **Number Animation**: Smooth counting animations for calculated values
- **Visual Feedback**: Color-coded results (green for profit, red for loss)
- **Touch Optimized**: Enhanced touch targets for mobile devices

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS, DaisyUI
- **Icons**: Font Awesome 6.0
- **Animations**: Custom CSS animations with JavaScript
- **Build Tool**: Tailwind CLI

## 📁 Project Structure

```
digital-flexiload-rate-change/
├── index.html              # Main HTML file
├── style.css               # Custom CSS styles
├── script.js               # JavaScript functionality
├── tailwind.config.js      # Tailwind configuration
├── logo-update-december.ico # Favicon
├── .gitattributes          # Git attributes
└── README.md               # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for CDN resources)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/digital-flexiload-rate-change.git
   cd digital-flexiload-rate-change
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your preferred browser
   # Or use a local server
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

### Alternative: Direct Download

1. Download the ZIP file from the repository
2. Extract to your desired location
3. Open `index.html` in your web browser

## 📖 Usage

### Family/Special Pack Calculator

1. Enter the **Buy Offer Amount** in the input field
2. The **App Rate** will be calculated automatically
3. Formula used: `App Rate = Buy Offer + (Buy Offer × 3% + 7)`

### Drive Pack Calculator

1. Enter the **Buy Offer Amount**
2. Enter the **Regular Amount** (rate package amount)
3. View calculated **Commission** and **App Rate**
4. Commission is color-coded:
   - 🟢 **Green**: Profit (positive commission)
   - 🔴 **Red**: Loss (negative commission)
   - 🟡 **Yellow**: Break-even (zero commission)

### Special Pack Calculator (GP/Banglalink/Bkash/Nagad)

1. Enter the **Cash Back Amount**
2. Enter the **Regular Amount**
3. View calculated **Commission** and **App Rate**

## 🎨 Customization

### Modifying Calculation Formulas

Edit the calculation functions in `script.js`:

```javascript
// Family pack calculation
const calculatedRate = rate + (rate * 0.03 + 7);

// Drive pack calculation
const appRate = buyOffer + (buyOffer * 0.03 + 7);
const calculatedCommission = selectRatePack - appRate;
```

### Styling Customization

- Modify `style.css` for custom styles
- Update `tailwind.config.js` for Tailwind customizations
- Colors and animations can be adjusted in the CSS variables

### Adding New Calculator Types

1. Add HTML structure in `index.html`
2. Create calculation functions in `script.js`
3. Add event listeners for real-time updates

## 🔧 Configuration

### Tailwind Configuration

The project uses a custom Tailwind configuration with extended animations:

```javascript
// tailwind.config.js
tailwind.config = {
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "bounce-in": "bounceIn 0.8s ease-out",
      },
    },
  },
};
```

## 📱 Mobile Optimization

- **Touch-friendly**: Large touch targets and optimized spacing
- **Responsive**: Adapts to all screen sizes
- **Performance**: Optimized for mobile networks
- **PWA Ready**: Can be installed as a mobile app

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Joy Tarafder**

- Website: [Digital Flexiload](https://digitalflexiload.net/)

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [DaisyUI](https://daisyui.com/) for beautiful UI components
- [Font Awesome](https://fontawesome.com/) for the icon library
- Digital Flexiload team for the business requirements

## 📞 Support

For support, email support@digitalflexiload.net or visit [Digital Flexiload](https://digitalflexiload.net/).

---

**Made with ❤️ for Digital Flexiload**
