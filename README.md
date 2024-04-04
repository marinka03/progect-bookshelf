
# Bookshelf

## Review
Bookshelf is a responsive web application designed to find a variety of books in available categories. Each of the books can be purchased from three different resources and added to your "Shopping List" collection.
![screenshot](![36shots_so](https://github.com/marinka03/project-bookshelf/assets/97391927/31b9a942-2a34-48cc-845f-b6724347fe09)
)
## Main components
### Header
Header: Visible on all pages, contains a shopping list page for authorized users, a theme toggle, and a logout feature.

### Home(page)
The Home (page) at the first download displays a collection of Best Sellers books and a selection of the best books from other categories. If you click on a book, a modal window will open with detailed information and links to three different online stores where you can buy the book you liked.

### Shopping List(page)
Shopping list (page) This page is only available to registered users. On this page, you can save the books that the user liked so that he can return to them in the future. It is possible to both add and remove elements from the collection.

### Sidebar
The sidebar contains both individual categories and books from all categories.

### Support Ukraine(part)💙💛
This block contains a reminder for each of the users about the horrors of war and the need to support Ukraine in such a difficult period.

## User flow
Unauthorized users: have access to the Home, registration and login pages. Authorized users: chan acces the "Shopping List" page.

## Authentication
The platform supports user authentication with registration and login features, providing secure access and a personalized user experience.

## Run Locally

Clone the project with HTTPS/SSH

```bash
  git clone https://github.com/marinka03/project-bookshelf.git
  git clone git@github.com:marinka03/project-bookshelf.git
```

Go to the project directory

```bash
  cd project-bookshelf
```

Install dependencies

```bash
  npm install
```

Start

```bash
  npm start
```
