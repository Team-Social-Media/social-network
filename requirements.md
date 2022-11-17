# Software Requirements

## Vision

Minimum Length: 3-5 sentences

**What is the vision of this product?**

To provide a platform for users to be able to share their interests with others, and only see content of that they choose. Users can keep track of all their favorite sources within the media, including books, movies, and songs. They'll be able to add personalized notes to refer back to and edit their favorites to keep them up to date.

**What pain point does this project solve?**

For users to be able to subscribe to only those things they are interested in, to hold a common space for media favorites and recommendations, to form discussions about your favorite things in the media (What did you think of episode 5? Did you like chapter 31? Consider this song for your wedding!).

**Why should we care about your product?**

A more personalized application that allows a user to not have their feed filled with topics not of interest to them.

## Scope (In/Out)

**IN - Product will:**
Allow users to sign-in, sign-up, edit and delete their content. Leave reviews or star ratings.

**OUT - Product will not:**

- No mobile (stretch goal)
- No live chat room (stretch goal)

## Minimum Viable Product vs

**What will your MVP functionality be?**

Render items on a page, like the items, leave comments, have full CRUD capabilities.

**What are your stretch goals?**

Add a public feed accessible to all users and have private chat functionality. Create mobile version.

**Stretch**
What stretch goals are you going to aim for?

Add a public feed accessible to all users and have private chat functionality.

## Functional Requirements

**Functionality of our product will include:**

An admin can create and delete user accounts
A user can update their profile information, edit their content, delete their content and give star ratings.
A user can search, and follow all of their interests, friends or family.

### Data Flow

[Figma Whiteboard](https://www.figma.com/file/kWyXOwDU82DmGUER6qTyOl/Social-App?node-id=4%3A1521&t=cgeAqUb9rvjb8j99-1)

### Non-Functional Requirements

1.Security - Auth0 utilized for login capabilities. Logging in gives the user access to their private profile where they can view their favorite items, add comments, and delete things as needed. No other users will have access to another user's private profile.

2.Usability-Create a role based access. We'll have a admin level, user level and possibly a moderator level that will have varying degrees of edit capabilities. The user should be able to edit, create, and delete any of their personal content. Admin is able to create, edit and delete any user or content.