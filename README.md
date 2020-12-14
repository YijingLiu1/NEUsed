# Hi, Welcome to NEUsed

**This is a web application that supports NEU students to sell and buy items. Users can post their items for sale, edit and delete their post and explore things by different categories.**

**Website Link: [Click Here!](https://neused.herokuapp.com/)**

## Design by Team: softaware

Development Process: **Agile Development(Scrum).**
Committing way: feature branch workflow by committing branches and submit pull requests to have code reviewed and committed to the master branch

- [Siyu Chen](https://github.com/syche55)
- [Yijing Liu](https://github.com/YijingLiu1)
- [Jing Shen](https://github.com/jshen1110)
- [Yixuan Yu](https://github.com/nancyyu17)

## Tech Stack & Design

- Font-end: React, CSS, JavaScript.  
    * Navbar: [React-Bootstrap API](https://react-bootstrap.github.io/)
    * SideBar: [React Pro Sidebar API](https://www.npmjs.com/package/react-pro-sidebar)
    * Login: [Google Sign-In API](https://developers.google.com/identity) 
- Back-end: Node.js, Express, Mongoose, MongoDB 
   *  Backend: [MongoDB](https://www.mongodb.com/)
    * Client communication: [GraphQL API](https://graphql.org/)
 
### Test Strategy Design

Our team developed a testing documentation with specific testing rules based on app features, covering technical reviews, database review, development testing, qualification testing, and acceptance testing. We tested frontend and backend seperately initially and test the merged work together. Please see the Test Plan doc for the details. The test doc also serves as an issue tracker with test log, issue assignee and status record.

### Frontend Design

- Navbar
    * [x] About: a page that explains our mission and design of the site.
    * [x] Discover: a page for exploring items for sales.
    * [x] Sell: authenticated user may enter item description, category, price and item image url when adding a new post
- Sidebar 
    * [x] Category: a list of categories to guide users exploring items (eg: apparel, electronics, hobbies etc.)

### Backend Design

- Model
    * [x] Post{title; content; price; creator; status; mage url; category; email; date]
    * Post can be edit, delete, add. 
- User
    * [x] Account info from Google Sign in API
    * User can sign in and out.

## [Project documentation](https://github.ccs.neu.edu/2020FACS5500SV/project-NEUsed/tree/master/docs)

- [x] [Project Organization](https://github.ccs.neu.edu/2020FACS5500SV/project-NEUsed/blob/master/docs/Project%20Organization%20-%20NEUsed.pdf)
- [x] [Project Requirements](https://github.ccs.neu.edu/2020FACS5500SV/project-NEUsed/blob/master/docs/Requirements%20Document%20-%20NEUsed.pdf)
- [x] [Project Features](https://github.ccs.neu.edu/2020FACS5500SV/project-NEUsed/blob/master/docs/Features%20-%20NEUsed%20.pdf)
- [x] [Project Functionality APIs](https://github.ccs.neu.edu/2020FACS5500SV/project-NEUsed/blob/master/docs/Project%20Functionality%20APIs%20-%20NEUsed.pdf)
- [x] [Project Design](https://github.ccs.neu.edu/2020FACS5500SV/project-NEUsed/blob/master/docs/Design%20Doc%20-%20NEUsed.pdf)
- [x] [Project Communications Plans](https://github.ccs.neu.edu/2020FACS5500SV/project-NEUsed/blob/master/docs/Communications%20Plan.pdf)
- [x] [Project Test Plans](https://github.ccs.neu.edu/2020FACS5500SV/project-NEUsed/blob/master/docs/Test%20Plans%20-%20NEUsed.pdf)
- [x] [Daily Standup Report](https://github.ccs.neu.edu/2020FACS5500SV/project-NEUsed/blob/master/docs/Daily%20Standup%20Report%20-%20NEUsed.pdf)


## Features

- Sign in with Google
![Recordit GIF](https://github.ccs.neu.edu/2020FACS5500SV/project-NEUsed/blob/master/docs/images/signin.gif)

- Discover Posts By Different Categories
- Explore Most recent Posts
- See Your Historic Posts
![Recordit GIF](https://github.ccs.neu.edu/2020FACS5500SV/project-NEUsed/blob/master/docs/images/category.gif)

- Checkout Content of Individual Posts
- Connect with Post Creator
![Recordit GIF](https://github.ccs.neu.edu/2020FACS5500SV/project-NEUsed/blob/master/docs/images/buy.gif)

- Edit Your Post and Update anything you want
![Recordit GIF](https://github.ccs.neu.edu/2020FACS5500SV/project-NEUsed/blob/master/docs/images/edit.gif)

- Delete Your Post
![Recordit GIF](https://github.ccs.neu.edu/2020FACS5500SV/project-NEUsed/blob/master/docs/images/delete.gif)




## Other Info

**Copyright 2020 © Softaware**

[Project Wiki](https://github.ccs.neu.edu/2020FACS5500SV/project-NEUsed/wiki)
[Project Public Webpage](https://pages.github.ccs.neu.edu/2020FACS5500SV/project-NEUsed/)
[Project Board](https://github.ccs.neu.edu/2020FACS5500SV/project-NEUsed/projects)
