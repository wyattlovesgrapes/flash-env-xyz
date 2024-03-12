.
├── directory_tree.txt
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
└── src
    ├── App
    │   ├── App.css
    │   ├── App.js
    │   └── App.test.js
    ├── Assets
    │   └── Images
    │       └── flash-env-logo.webp
    ├── Components
    │   ├── ContactForm
    │   │   ├── ContactForm.js
    │   │   └── ContactSubSuccess.js
    │   └── LandingPage
    │       ├── LandingPage.css
    │       └── LandingPage.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── reportWebVitals.js
    └── setupTests.js

8 directories, 23 files


tree -I 'node_modules|.*' > directory_tree.txt