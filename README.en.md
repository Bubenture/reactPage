# reactPage

</br>
<div>
    <a href="README.md">
        <img src="https://img.shields.io/badge/README-RU-blue?color=006400&labelColor=006400&style=for-the-badge">
    </a>
    <a href="README.en.md">
        <img src="https://img.shields.io/badge/README-ENG-blue?color=44944a&labelColor=1C2325&style=for-the-badge">
    </a>
</div>
</br>

The project is a web application for managing a cryptocurrency portfolio. Users can add assets, view information about cryptocurrencies, analyze data using charts and tables, and receive updates on the current state of their portfolio.

### Main Features of the Application:

#### Portfolio View:
- Displays the total value of the portfolio.
- Asset distribution chart.
- Table with data for each asset (name, price, quantity).

![Portfolio View](frontend/public/PortfolioView.png)

#### Adding Assets:
- A form for adding a new asset, specifying quantity, price, and purchase date.
- Automatic recalculation of total value and profit.

![Adding Assets](frontend/public/AddingAssets.png)

#### Cryptocurrency Information:
- A modal window with detailed information about the selected cryptocurrency (price, market capitalization, changes over 1 hour/day/week).

![Cryptocurrency Information](frontend/public/CryptocurrencyInfo.png)

#### Sidebar:
- Cards with information about each asset (profit, growth percentage, total quantity).

![Sidebar](frontend/public/Sidebar.png)

### Technologies Used in the Project:

#### Frontend:
- **React**
- **Vite**
- **Ant Design**
- **JavaScript**
- **CSS**

#### Backend:
- **Node.js**
- **Express.js**

### Project Structure:

#### Frontend:
- **src/**: Source code of the application
- **components/**: Interface components
- **layout/**: Components for building the layout (header, sidebar, content)
- **AddAssetForm.jsx**: Form for adding a new asset
- **PortfolioChart.jsx**: Asset distribution chart
- **AssetsTable.jsx**: Table with cryptocurrency data
- **context/**: Context for managing application state
- **api.js**: Fake API functions for retrieving cryptocurrency and asset data
- **data.js**: Static data about cryptocurrencies and assets
- **utils.js**: Utilities, e.g., for calculating percentage differences
- **vite.config.js**: Vite configuration
- **index.html**: Main HTML file of the application

#### Backend:
- **server.js**: Server using Express.js

### Notes:

- The project uses static data (data.js) and fake API functions (api.js) to simulate server interactions.
- Minimal styling is applied using CSS and built-in styles from Ant Design components.
- The project is easily scalable due to the use of React Context API and a modular component structure.
