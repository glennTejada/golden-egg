<h1 align="center" style="color:teal">Golden Egg</h1>

### Setup API
1. Install dependencies: `composer install`
2. Set environment file: 
   1. `cp .env.example .env` and add required changes, eg: <i>database credentials</i>
   2. `php artisan key:generate` to generate a new key
   3. `php artisan migrate` to create tables
   
### Run API
`php artisan serve`
<hr>

### Setup Frontend
1. Install dependencies: `npm install`
2. Compile frontend for development: `npm run dev`  
or,  
Compile frontend for production: `npm run prod`
