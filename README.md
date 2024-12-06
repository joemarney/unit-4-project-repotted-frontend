# Project 4: Repotted

![homescreen screenshot with 2 carousels showing the user's rooms and their wishlist of houseplants](/unit-4-project-repotted-frontend/public/images/repotted.png)

## The Idea

The application was thought of because I own houseplants but I have a terrible memory. Certain plants are picky with their requirements and how often they are watered. I have killed plants in the past due to overwatering, underwatering and just not giving them the right amount of sunlight! I wanted to create an app that could help the user remember everything important to keep their plants alive.

[Test the app][app]

[app]: https://repotted.netlify.app/

## Accessing the code

You can check out the code in my [GitHub repo][git]

[git]: https://github.com/joemarney/unit-4-project-repotted-frontend

## Brief

- Public Notion page
  - User Stories
  - Wireframe
  - Routing table
  - ERD
- The app utilises Django to build a RESTful API.
- PostgreSQL is used as the database management system.
- The app uses JWT to implement token-based authentication.
- Authorisation is implemented - Guests should not have CUD(create, update & delete) capabilities.
- At least one data entity in addition to the User model.
- At least one entity must have a relationship with the User model.
- Full CRUD functionality.
- The app is deployed online.

### Timeframe

Working individually we had 10 days to complete the project.

## Technologies Used

- Notion
- Figma
- dbDiagram.io
- Google sheets
- Python
- Django
- Neon
- PostgreSQL
- TablePlus
- Postman
- VS Code
- React
- Netlify
- Heroku
- Firefox dev tools
- Chrome dev tools
- GitHub
- Bootstrap
- ChatGPT
- Google Fonts
- Cloudinary

### Dependencies

- axios
- bootstrap
- framer-motion
- hamburger-react
- react
- react-bootstrap
- react-dom
- react-icons
- react-images-uploading
- react-native-background-timer
- react-router-dom
- react-use
- sass

## Planning

I decided to use Notion again for my planning stage. I was focused on getting the deliverables sorted first to be able to be signed off. I started with the Routing Table, then the ERD, then User stories and finally the Wireframe design.

I knew I wanted to do something a bit different for this project compared to my previous ones. I wanted to split up the CRUD functionality so it was not all on one data entity. I also toyed with the idea of using an external API for my plant details. I ultimately ended up leaving this idea as the free available choices were slow and filled with plants that did not fit my app.

I made sure I had some interesting stretch goals as I intend on continuing this project in my free time post course.

## Build Process

1. Create Notion page.
2. Deliverables
   - Routing table
   - ERD
   - User stories
   - Wireframe design
3. Make GitHub repositories.
4. Create files and folders and link the repositories.
5. Backend
   - Create Neon database
     - Move sensitive information to .env
   - Create file structure
   - Install dependencies/packages
   - Create Apps for each model
   - Code the views and serializers for each App
   - Test routes on Postman
6. Frontend
   - Create file structure
   - Install dependencies/packages
   - Code utilities and services (interceptors, axios requests and token functions)
   - Create all the routes within App.jsx
   - I created a quick Navbar for myself during development.
   - Created all the pages and components.
   - I had to learn how to use Bootstrap as that is how I had chosen to create my NavBar component.
   - Tested all CRUD functionality.
7. Styling
   - Using SASS I applied styles across my site. I was aware of how long the styling may take so I made sure I started it early enough to still have time at the end for bugfixing.
   - Trying to style the Bootstrap NavBar was fairly counter-intuitive and took up a lot of time.
8. Backend deployment
   - I deployed the backend using Heroku. This was the first time doing so and it did take a few tries to get it to deploy properly.
   - Testing the front end communicated with the deployed front end.
9. Frontend deployment
   - I deployed the frontend on Netlify. I had used Netlify for my previous projects so it went smoothly.
   - I tested the the fully deployed application on multiple devices and sent it to family members for them to test it out too.
10. Bugfixing
    - There were a few bugs with images on the sites and general styling.

## Challenges

I had a horrible time using Bootstrap components. I had seen Bootstrap navbars on the internet and I decided that would be good to learn. I couldn't believe how difficult the styling was and the fact you cant just override them with your own SASS file.
Once I got the hang of finding the variables and the order in which to alter the themes it wasn't too bad.

Another challenge I faced was having to work out what needed to be on the model on the backend. This was the first time for me doing anything remotely difficult in Python. After 3 previous projects of coding in JavaScript I found the transition to Python/Django a bit jarring.

## Wins

Again I enjoyed using SASS to apply styles. I find it intuitive and it suits my coding styles with nested elements perfectly. I love how you do not need to apply a class or id to every element. Just add a class to the parent element and then you can control everything within it!

I managed to reuse my carousel component I made for my previous project. It was useful to have that code ready to move over and it was really easy to alter to fit the new project.

## Future Improvements

I intend to continue to work on this project. There were a few features I wanted to add at the start but didn't have enough time to get around to.
The app was designed to have a tracker for each plant so you start a timer when you water it and it will alert you when the next watering is to take place. I managed to get about half way through adding this functionality. I can start a timer but it is not being stored anywhere so the timer resets if you navigate away from that page.

I want to add more and more plants to the application. It has 30 currently but I want to add more. I think it will then need a search bar to filter the plants.
