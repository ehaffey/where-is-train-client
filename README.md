# Commute Tracker

A browser based app that helps people get real-time live updates from the MBTA. Users can login, choose what trains to keep track of, and get live updates with timeframes on their trains.

![alt text](https://lh3.googleusercontent.com/hd3oWZmn3jzmdOIKwLqeiU_dKWLDqRWB6vYpMLx9FKCxJExrqS5pJU_qg1VJ-Y9MxObvkv69tMn8kpEvc5kqUObHMl0ERZA0xh07nunsr1nJWncOZMnXtdg_e1K1wSBqTqw-Ivk5wdP3FspdssNLTa0qbvwYNipdy3XtcIlCBvPE73mbVXWhryRSXiGUcSs1s_jCK79udkRuhBGoGhjztz0WxsShjLFzX6QL2JjimLncoPcqX26iGxndXKLNc_qZ_wAF143jlQix-1T_KxmA5itKyuhZ2QyC9Ax6kNOotaJrKqOAtDNyujV0SAbfv7K79z49N6qcion71zgZvApW0Lk-TSp0oHPyJSVK18QhExKLQ5mpFt6VE2SnrHf6zJXxYIjZCWfvaBuwsYFbVK1wyppphgJR4nTtdD6qVtJBlIdc1t2uPXfFrxkQsqKTOQ2SbqPx4aH-sCJJajPA_12W9D3BJnHlkySbENojHCP7kxxFD_r_KHeRf44Mtr_78udNykt7n-A1FEWFv2XBvlSRGd3XnSO1fez6TsVhUpfInq_4uNRzWZXcUzlC6i5I6T5HqzzQpidRrCRUjl6qRHyY9w2uObwyPZ3GktKu2MOoLW5mex8Hb_PqPBJShfEA3HOX20IJUnnjIAFe4PYegkcoFW6Zjn4WoUGvS4xZ6VoQlvn522LL8-mChDCx3HfH0YArdkzeaC1-HqYGwC4XtXl531SLaTj8_1ynGfJZg6LOHxiWGtCt=w912-h213-no)


### Setup

1. Clone or download this repository.
1. Run `npm install` to install dependencies
1. Use `npm start` to run the development server in your browser.

#### Links

https://github.com/ehaffey/where-is-train-client

https://ehaffey.github.io/where-is-train-client/#/

https://github.com/ehaffey/where-is-train-api

https://fierce-fjord-44347.herokuapp.com/

#### Technologies

- HTML
- CSS
- Bootstrap
- Javascript
- Axios
- Express
- Custom API
- MongoDB
- Mongoose
- Heroku

#### Planning and Development

-Planning-
1. Work through ideation, wireframes, and user stories
2. Develop working order of development tasks
3. Review scope for likely completion in alloted time

-Development-
1. Build out database and APIs
2. Test API interactions with curl-scripts
3. Deploy React template and test deployed authentication API
4. Setup skeleton features of app functionality and test with autentication and database access
5. Test MBTA API routes and responses
6. Build basic real-time updates and request button into app
7. Manage how alerts are rendered to control for missing/incomplete information from MBTA
8. Review/resolve outstanding bugs/issues
9. Deploy

#### Wireframes and user stories

- As a user I want to be able to register with a username and password
- As a user I want to be able to sign in with my username and password
- As a user I want to be able to change my password
- As a user I want to be able to save a train to track
- As a user I want to be able to view my stored trains
- As a user I want to be able to get realtime information about my trains
- As a user I want to be able to edit a saved train
- As a user I want to be able to delete a saved train
- As a user I want my saved trains to only be seen by me
- As a user I want to be able to logout

#### Front-end Wireframes




#### Problem Solving Strategy

I thought of the base idea after reading an article about an engineer who developed an app that tracked the new Orange line trains. Initially I hoped to create an app that would provide live updates on how far a train was from a specific station, but the way the MBTA provides real-time tracking information turned out to involve numerous technologies I was unfamiliar with. The MBTA offers a very deveroper friendly API to get on-demand information, so I pivoted to getting service alerts by train.

#### Future Development

1. Live location updates
2. Improved styling
3. Refactored codebase
4. Additional line options, such as Silver line and
