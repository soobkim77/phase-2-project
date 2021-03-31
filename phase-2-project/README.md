# gitLit - A Tool for Bookworms

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## The Journey 
 “AND I KNEW EXACTLY WHAT TO DO. BUT IN A MUCH MORE REAL SENSE, I HAD NO IDEA WHAT TO DO.” -Michael Scott

 Although reading is a quintessential part of the human experience, it is often neglected. Many may wonder why. Research from the Pew Research Center in 2019 has indicated that 27% of Americans have not read a book in the last year. Co-Developer Evan and I found ourselves as part of this category, but we did identify that we both believed that reading is important enough that we needed to adopt it.

 This became the basis for our project. gitLit was designed as the first step for those who wish to finally become more complete humans. It seeks to solve one of the largest hurdles known to man. 

 ## What do I read?
 This pivotal question is often one of the easiest excuses for neglecting to read. If I don't even know where to start, why bother starting?

 ### API
 One of the easiest ways for an individual to find out what to read, eat, or watch, is by listening to someone who knows what they're talking about. The [New York Times](https://www.nytimes.com/books/best-sellers/) has a compendium of lists that are created as recommendations for readers. They formulated an API that contains the same data as their site, which we have used to create an app that is more personalized. To access their API, you can follow this [link](https://developer.nytimes.com/) to sign up as a developer.

 ## User Experience
 gitLit focuses on providing a user with personalized experience. There are two critical factors for providing a catered experience. Developing a reader profile, as well as engaging in a reading community. 

 ### Reading Profile
 In order to access our application, a reader must log in to an account. If they are a new user, they will be able to create an account, and set a preference for a genre.

#### Home  
The Home page of this application contains a section for Fiction and Non-Fiction best sellers. The reason that these two lists were included by default, was based on the fact that an individual who is just starting to build their reading preferences, can easily access a variety of books that fit under these two categories. As the reader develops this profile, or if they already have a reading identity, they can also select a preference upon registration, that generates as a third list. 

#### Lists
The NYT API lists contain 15 books, ranked 1-15, but our app displays only 5 of each list at a time. You can scroll through the list by pressing the button located on the right of each container. This allows you to see information on each book and if one piques your interest, the about button will take you to a new page with a more in-depth look at each book.

##### Book Information
The book information page was created to provide a reader a pathway to actually reading the book. There are 3 core functions that exist on the book information page. The first, is to add a book to a user's profile. We call this, the Wishlist. The second links to buy a book. Simply adding a book to your profile is not always enough, but a link to directly buy a book leaves few reasons to not obtain the book. The third part, is the ability to add a review that can be viewed by other users. 

#### Community Engagement
A core feature of our application is in the community experience. Reviews are a tool that can help supplement a reader's decision making when it comes to a book. If all the reviews are negative, then it's likely that a user would shy away from adding the book to their list. gitLit is useful for engaging in a mini-book club without ever leaving your home. 
