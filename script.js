// Enhanced rate calculation with animations
function rateChange() {
  const rateInput = document.getElementById("rate");
  const rateVal = document.getElementById("rate_val");
  const rate = parseFloat(rateInput.value);

  // Input validation
  if (!rate || rate <= 0) {
    showError(rateInput, "Please enter a valid amount");
    return;
  }

  // Clear any previous error
  clearError(rateInput);

  // Calculate with animation
  const calculatedRate = rate + (rate * 0.03 + 7);
  animateValue(rateVal, 0, calculatedRate, 800);

  // Add success animation
  rateVal.parentElement.classList.add("success-animate");
  setTimeout(() => {
    rateVal.parentElement.classList.remove("success-animate");
  }, 300);
}

// Enhanced commission calculation with animations
function commission() {
  const buyOfferInput = document.getElementById("buyDriveRate");
  const selectRateInput = document.getElementById("selectRate");
  const commissionElement = document.getElementById("commission");
  const appRateElement = document.getElementById("appRate");

  const buyOffer = parseFloat(buyOfferInput.value);
  const selectRatePack = parseFloat(selectRateInput.value);

  // Input validation
  if (!buyOffer || buyOffer <= 0) {
    showError(buyOfferInput, "Please enter a valid buy offer amount");
    return;
  }

  if (!selectRatePack || selectRatePack <= 0) {
    showError(selectRateInput, "Please enter a valid rate package amount");
    return;
  }

  // Clear any previous errors
  clearError(buyOfferInput);
  clearError(selectRateInput);

  // Calculate values
  const appRate = buyOffer + (buyOffer * 0.03 + 7);
  const calculatedCommission = selectRatePack - appRate;

  // Animate the results
  animateValue(commissionElement, 0, calculatedCommission, 800);
  animateValue(appRateElement, 0, appRate, 800);

  // Add success animations
  commissionElement.parentElement.classList.add("success-animate");
  appRateElement.parentElement.classList.add("success-animate");

  setTimeout(() => {
    commissionElement.parentElement.classList.remove("success-animate");
    appRateElement.parentElement.classList.remove("success-animate");
  }, 300);

  // Show profit/loss indicator
  updateCommissionIndicator(calculatedCommission, commissionElement);
}

// Animate number counting effect
function animateValue(element, start, end, duration) {
  const startTime = performance.now();
  const isDecimal = end % 1 !== 0;

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 0.2);

    // Easing function for smooth animation
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    const current = start + (end - start) * easeOutQuart;

    if (isDecimal) {
      element.textContent = current.toFixed(2);
    } else {
      element.textContent = Math.round(current);
    }

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = isDecimal ? end.toFixed(2) : Math.round(end);
    }
  }

  requestAnimationFrame(update);
}

// Show error with animation
function showError(input, message) {
  // Remove existing error
  clearError(input);

  // Add error styling
  input.classList.add("border-red-500", "bg-red-50");
  input.classList.remove("border-gray-200");

  // Create error message
  const errorDiv = document.createElement("div");
  errorDiv.className =
    "text-red-500 text-sm mt-1 animate-fade-in error-message";
  errorDiv.innerHTML = `<i class="fas fa-exclamation-circle mr-1"></i>${message}`;

  // Insert error message
  input.parentElement.appendChild(errorDiv);

  // Shake animation
  input.style.animation = "shake 0.5s ease-in-out";
  setTimeout(() => {
    input.style.animation = "";
  }, 500);
}

// Clear error styling and message
function clearError(input) {
  input.classList.remove("border-red-500", "bg-red-50");
  input.classList.add("border-gray-200");

  const errorMessage = input.parentElement.querySelector(".error-message");
  if (errorMessage) {
    errorMessage.remove();
  }
}

// Update commission indicator with color coding
function updateCommissionIndicator(commission, element) {
  const parent = element.parentElement;

  // Remove existing classes
  parent.classList.remove("from-red-50", "to-red-100", "border-red-200");
  parent.classList.remove("from-green-50", "to-green-100", "border-green-200");
  parent.classList.remove(
    "from-yellow-50",
    "to-yellow-100",
    "border-yellow-200"
  );

  if (commission > 0) {
    // Profit - Green
    parent.classList.add("from-green-50", "to-green-100", "border-green-200");
    element.classList.remove("text-red-600", "text-yellow-600");
    element.classList.add("text-green-600");
  } else if (commission < 0) {
    // Loss - Red
    parent.classList.add("from-red-50", "to-red-100", "border-red-200");
    element.classList.remove("text-green-600", "text-yellow-600");
    element.classList.add("text-red-600");
  } else {
    // Break-even - Yellow
    parent.classList.add(
      "from-yellow-50",
      "to-yellow-100",
      "border-yellow-200"
    );
    element.classList.remove("text-green-600", "text-red-600");
    element.classList.add("text-yellow-600");
  }
}

// Reset commission indicator styling
function resetCommissionIndicator() {
  const commissionElement = document.getElementById("commission");
  const appRateElement = document.getElementById("appRate");

  [commissionElement, appRateElement].forEach((element) => {
    const parent = element.parentElement;
    parent.classList.remove("from-red-50", "to-red-100", "border-red-200");
    parent.classList.remove(
      "from-green-50",
      "to-green-100",
      "border-green-200"
    );
    parent.classList.remove(
      "from-yellow-50",
      "to-yellow-100",
      "border-yellow-200"
    );
    element.classList.remove(
      "text-red-600",
      "text-green-600",
      "text-yellow-600"
    );
  });
}

// Live rate calculation (without animations for smooth real-time updates)
function rateChangeLive() {
  const rateInput = document.getElementById("rate");
  const rateVal = document.getElementById("rate_val");
  const rate = parseFloat(rateInput.value);

  if (rate && rate > 0) {
    const calculatedRate = rate + (rate * 0.03 + 7);
    rateVal.textContent = calculatedRate.toFixed(2);
  }
}

// Live commission calculation (without animations for smooth real-time updates)
function commissionLive() {
  const buyOfferInput = document.getElementById("buyDriveRate");
  const selectRateInput = document.getElementById("selectRate");
  const commissionElement = document.getElementById("commission");
  const appRateElement = document.getElementById("appRate");

  const buyOffer = parseFloat(buyOfferInput.value);
  const selectRatePack = parseFloat(selectRateInput.value);

  // Only calculate if both values are valid
  if (buyOffer && buyOffer > 0 && selectRatePack && selectRatePack > 0) {
    const appRate = buyOffer + (buyOffer * 0.03 + 7);
    const calculatedCommission = selectRatePack - appRate;

    appRateElement.textContent = appRate.toFixed(2);
    commissionElement.textContent = calculatedCommission.toFixed(2);

    // Update color indicator
    updateCommissionIndicator(calculatedCommission, commissionElement);
  } else if (buyOffer && buyOffer > 0) {
    // If only buy offer is entered, show app rate
    const appRate = buyOffer + (buyOffer * 0.03 + 7);
    appRateElement.textContent = appRate.toFixed(2);
    commissionElement.textContent = "0";
    resetCommissionIndicator();
  }
}

// Add shake animation keyframes
const shakeKeyframes = `
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
    20%, 40%, 60%, 80% { transform: translateX(5px); }
}
`;

// Inject shake animation
const style = document.createElement("style");
style.textContent = shakeKeyframes;
document.head.appendChild(style);

// Add input event listeners for real-time calculations
document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll('input[type="number"]');

  inputs.forEach((input) => {
    input.addEventListener("input", function () {
      if (this.value && parseFloat(this.value) > 0) {
        clearError(this);

        // Trigger live calculations based on input field
        if (this.id === "rate") {
          rateChangeLive();
        } else if (this.id === "buyDriveRate" || this.id === "selectRate") {
          commissionLive();
        }
      } else {
        // Clear results when input is empty or invalid
        if (this.id === "rate") {
          document.getElementById("rate_val").textContent = "0";
        } else if (this.id === "buyDriveRate" || this.id === "selectRate") {
          document.getElementById("commission").textContent = "0";
          document.getElementById("appRate").textContent = "0";
          // Reset commission indicator styling
          resetCommissionIndicator();
        }
      }
    });

    // Add enter key support
    input.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        if (this.id === "rate") {
          rateChange();
        } else if (this.id === "buyDriveRate" || this.id === "selectRate") {
          commission();
        }
      }
    });
  });

  // Add floating animation to icons
  const icons = document.querySelectorAll(".fa-calculator, .fa-users, .fa-car");
  icons.forEach((icon) => {
    icon.classList.add("float");
  });
});

// Add copy to clipboard functionality
function copyToClipboard(text, element) {
  navigator.clipboard.writeText(text).then(() => {
    // Show success feedback
    const originalText = element.textContent;
    element.textContent = "Copied!";
    element.classList.add("text-green-600");

    setTimeout(() => {
      element.textContent = originalText;
      element.classList.remove("text-green-600");
    }, 1000);
  });
}

// Make result values clickable to copy
document.addEventListener("DOMContentLoaded", function () {
  const resultElements = ["rate_val", "commission", "appRate"];

  resultElements.forEach((id) => {
    const element = document.getElementById(id);
    element.style.cursor = "pointer";
    element.title = "Click to copy";

    element.addEventListener("click", function () {
      if (this.textContent !== "0") {
        copyToClipboard(this.textContent, this);
      }
    });
  });
});
