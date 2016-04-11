# FreeCodeCamp URL Shortener
This is a Node.js (with Express.js) little application which is part of the FCC Back End Certification. It allows you to get shorter URL for a given original URL.
> Cheers from Marseille (France), Lior Chamla

# User stories:
> 1. I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.
> 2. If I pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.
> 3. When I visit that shortened URL, it will redirect me to my original link.

# Usage for creation :
```
https://url-shortener-liorchamla.c9users.io/add/https://www.google.com
```
Will give :
```
{ "original_url":"https://www.google.com", "short_url":"https://url-shortener-liorchamla.c9users.io/p/1755w" }
```
# Usage for redirection :
```
https://url-shortener-liorchamla.c9users.io/p/1755w
```
Will redirect to:
```
https://www.google.com/
```

# Installation
First, you will have to launch the mongo deamon : 
```
mongod --nojournal --port 27017 --dbpath=./data
```
Then the server
```
node server.js
```