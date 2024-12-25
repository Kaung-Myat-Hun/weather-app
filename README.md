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
<code>
  git clone https://github.com/Kaung-Myat-Hun/weather-app.git
<code>
<p>2. Navigate to the project directory.</p>
<code>cd weather-app</code>
<p>3. Install Dependencies</p>
  <code>
    npm install
    yarn install
  </code>

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
  <code>
    npm run dev
    # or 
    yarn dev
  </code>
  <li>Open <a href="http://localhost:5173">http://localhost:5173</a>in your browser.</li>
</ol>

### Building production
<ol>
  <li>Build the application</li>
  <code>
    npm run build
    # or 
    yarn build
  </code>
  <li>Serve the production build locally</li>
  <code>
    npm run preview
    # or 
    yarn preview
  </code>
</ol>