## Weather Application Documentation ( React With Typescript )
-----------------------------------------------
### Project Overview
<p>The weather application provides user real-time weather updates and forecast for locations worldwide.</p>
<br>
<p>This application is using modern web technologies to ensure a seamless and efficient user experience.</p>
<p>Resposive ui design at phone , tablet and laptop PC.</p>

### Features 
<ul>
  <li>Search for weather by city and location</li>
  <li>Display current weather, (temperature , humidity , wind speed and wind direction etc)</li>
  <li>Show a 7 days weather forecast</li>
  <li>Interactive and responseive UI.</li>
  <li>Get gelocation from your local machine for automatic weather updates</li>
</ul>

### Tech Stack
<ul>
  <li>Frontend : React with Typescript</li>
  <li>State management : Context API</li>
  <li>Styling : Css</li>
  <li>API Integration : <a href="https://api.weatherapi.com">https://api.weatherapi.com</a> </li>
  <li>Build Tool : Vite</li>
  <li>Version Control : Git </li>
  <li>Deployment : Vercel</li>
</ul>
<hr>

## Developer Guide
### Prerequisites
<p>Ensure the following tools are installed to your system</p>
<ul>
  <li>Node JS ( => 16.x )</li>
  <li>npm or yarn</li>
  <li>git</li>
</ul>

### Installation
<p>1. Clone the repository</p>

```bash
  git clone https://github.com/Kaung-Myat-Hun/weather-app.git
```

<p>2. Navigate to the project directory.</p>

```bash 
cd weather-app
```
<p>3. Install Dependencies</p>

  ```bash
    npm install
    # or
    yarn install
  ```

### Environment Setup
<ol>
  <li>Create a <code>.env</code> file in the root directory.</li>
  <li>Add the following environment variables:</li>
</ol>

  ```bash
    VITE_API_KEY=Your weather.com API Key
  ```

### Running The Application
<ol>
  <li>Start Development server</li>

  ```bash
    npm run dev
    # or 
    yarn dev
  ```

  <li>Open <a href="http://localhost:5173">http://localhost:5173</a>in your browser.</li>
</ol>

### Building production
<ol>
  <li>Build the application</li>

  ```bash
    npm run build
    # or 
    yarn build
  ```

  <li>Serve the production build locally</li>

  ```bash
    npm run preview
    # or 
    yarn preview
  ```
</ol>

### Testing 
<ol>
  <li>Testing with vitest run the command in terminal</li>

 ```bash
    npm run test
    # or 
    yarn test
  ```
</ol>

## Delivery Documentation
### Deployment 
<p>The application is deployed on Vercel. To access the live application, visit</p>
<a href="">Link</a>

### Deployment Steps
<ol>
  <li>Git push changes to <code>main</code> branch</li>
  <li>Vercel will automatically trigger a deployment.</li>
  <li>Monitor deployment status on the Vercel dashboard.</li>
</ol>

### API Integration
<p>
  The application integration with weatherapi.com for fetching weather information data. Ensure the API Key is activated.
</p>

#### Key Endpoints
<ul>
  <li>Current Weather Data:</li>

  ```bash
      GET http://api.weatherapi.com/v1/current.json?key=${key}&q=${locationString}&aqi=yes
      # locationString is city name or latitude,longitude will be passed as parameter
  ```

  <li>7 Days Forecast:</li>

  ```bash
    GET http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${locationString}&days=7&aqi=yes&alerts=no
    # locationString is city name or latitude,longitude will be passed as parameter
  ```
</ul>

### Troubleshooting
<ol>
  <li> API Error : 
    <ul>
      <li>Verify API key in the <code>.env</code></li>
      <li>Check the weatherapi.com api status</li>
    </ul>
  </li>
  <li>
    Build Error :
    <ul>
      <li>Delete <code>node_modules</code> directory and reinstall dependencies :</li>
    </ul>
    <code>
        rm -rf node_modules
        npm install 
        # or
        yarn install
      </code>
  </li>
    
  <li>
    Deployment Issue :
      <ul>
        <li>Verify environment variables in the Vercel dashboard.</li>
      </ul>
  </li>
</ol>