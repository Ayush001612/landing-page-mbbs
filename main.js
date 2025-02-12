// Initialize Lucide icons
lucide.createIcons();

// Data
const countries = [
  {
    name: "Russia",
    imageUrl: "https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&q=80&w=2000",
    features: ["Top Medical Universities", "Affordable Education", "Quality Infrastructure"]
  },
  {
    name: "Uzbekistan",
    imageUrl: "https://images.unsplash.com/photo-1528644495100-e7f1cd363796?auto=format&fit=crop&q=80&w=2000",
    features: ["Modern Facilities", "Cultural Experience", "Recognition Worldwide"]
  },
  {
    name: "Kazakhstan",
    imageUrl: "https://images.unsplash.com/photo-1558588942-930faae5a389?auto=format&fit=crop&q=80&w=2000",
    features: ["Advanced Technology", "International Standards", "Research Opportunities"]
  },
  {
    name: "Philippines",
    imageUrl: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&q=80&w=2000",
    features: ["English Medium", "Clinical Experience", "Affordable Living"]
  },
  {
    name: "Georgia",
    imageUrl: "https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&q=80&w=2000",
    features: ["European Standards", "Rich Heritage", "Modern Healthcare"]
  },
  {
    name: "Kyrgyzstan",
    imageUrl: "https://images.unsplash.com/photo-1569531955323-33c6b2dca44b?auto=format&fit=crop&q=80&w=2000",
    features: ["Practical Training", "Diverse Culture", "Growing Medical Hub"]
  },
  {
    name: "Egypt",
    imageUrl: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&q=80&w=2000",
    features: ["Historical Excellence", "Clinical Exposure", "Rich Medical Heritage"]
  }
];

const benefits = [
  {
    icon: "graduation-cap",
    title: "World-Class Education",
    description: "Access to internationally recognized medical programs and cutting-edge facilities"
  },
  {
    icon: "globe-2",
    title: "Global Exposure",
    description: "Experience diverse healthcare systems and multicultural environments"
  },
  {
    icon: "clipboard-check",
    title: "Affordable Excellence",
    description: "Quality medical education at a fraction of domestic costs"
  }
];

const eligibilityCriteria = [
  "Minimum 50% in Physics, Chemistry & Biology",
  "NEET Qualification",
  "Age: 17-25 years",
  "English Proficiency",
  "Valid Passport"
];

const applicationSteps = [
  "Submit Application Form",
  "Document Verification",
  "Admission Letter",
  "Visa Processing",
  "Travel Arrangements"
];

// Populate Benefits Section
document.getElementById('benefits').innerHTML = benefits.map(benefit => `
  <div class="text-center p-6 bg-white rounded-lg shadow-lg">
    <div class="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
      <i data-lucide="${benefit.icon}" class="h-8 w-8"></i>
    </div>
    <h3 class="text-xl font-semibold mb-3">${benefit.title}</h3>
    <p class="text-gray-600">${benefit.description}</p>
  </div>
`).join('');

// Populate Countries Section
document.getElementById('countries').innerHTML = countries.map(country => `
  <div class="bg-white rounded-lg overflow-hidden shadow-lg">
    <div class="h-48 overflow-hidden">
      <img 
        src="${country.imageUrl}" 
        alt="${country.name}"
        class="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
      />
    </div>
    <div class="p-6">
      <h3 class="text-xl font-semibold mb-4">${country.name}</h3>
      <ul class="space-y-2">
        ${country.features.map(feature => `
          <li class="flex items-center text-gray-600">
            <i data-lucide="check-circle-2" class="h-5 w-5 text-green-500 mr-2"></i>
            ${feature}
          </li>
        `).join('')}
      </ul>
    </div>
  </div>
`).join('');

// Populate Eligibility Criteria
document.getElementById('eligibility').innerHTML = eligibilityCriteria.map(item => `
  <li class="flex items-start">
    <i data-lucide="check-circle-2" class="h-5 w-5 text-green-500 mr-2 mt-1"></i>
    <span>${item}</span>
  </li>
`).join('');

// Populate Application Steps
document.getElementById('steps').innerHTML = applicationSteps.map((step, index) => `
  <li class="flex items-center">
    <span class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
      ${index + 1}
    </span>
    ${step}
  </li>
`).join('');

// Populate Country Select Options
const countrySelect = document.querySelector('select[name="country"]');
countries.forEach(country => {
  const option = document.createElement('option');
  option.value = country.name;
  option.textContent = country.name;
  countrySelect.appendChild(option);
});

// Form Handling
document.getElementById('applicationForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());
  console.log('Form submitted:', data);
  this.reset();
  alert('Thank you for your application! We will contact you soon.');
});

// Reinitialize Lucide icons after dynamic content is added
lucide.createIcons();