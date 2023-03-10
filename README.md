# Rank List Builder

## Description

This project is a full stack web application built with a React frontend, PostgresSQL database, and a Ruby on Rails backend that allows users to view possible residency programs and leave reviews about their experience with the people, rotations, hospitals and programs overall. 

## User Experience

When users first get to the site they will be welcomed by the login/sign-up page. Once they are done with logging-in or signing up and authenticated as being a member of the project. They will be able to browse through the list of programs and be able to select a program and the list of details about the program and the reviews they have from other users or create their own. They will only be able to edit or delete their own reviews. They also will have access to updating their own account information, password included.

## Setup And Deployment

**Requirements**

- Ruby on Rails installed locally
- NodeJS, and npm

When you're ready to run this project, **_cd_** into the main directory and run:

```sh
npm install --prefix client
bundle install
rails db:create
rails db:migrate
```


## Deploying Locally

Now that everything is set up, to deploy it's best to set up the backend first. You can do so by opening a terminal and running:

```console
rails s
```

This will run the backend server on [http://localhost:3000](http://localhost:3000)


Leave that running, and open a new terminal. Then set up the frontend with the command:

```console
npm start --prefix client
```

This will run the frontend on [http://localhost:4000](http://localhost:4000) which you can see the _view_ in the browser.


## Resources and Notes

**Note:** to use SQLite instead of PostgreSQL:

1. In the `Gemfile`, replace `gem 'pg', '~> 1.1'` with `gem 'sqlite3', '~> 1.4'`.

2. In the `database.yml` file, change the line `adapter: postgresql` to `adapter: sqlite3`.

- [Flatiron School](https://flatironschool.com/)

**Future Stretch Goals:**

    -To be added...

###### StephenthatsPH, 2023