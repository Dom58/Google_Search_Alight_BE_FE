# Google Front Page Clone

## Context

This repository contains two projects one for the `Backend side` to get all the necessary APIs for searching in Google Front Page and also the one for the `Fronted side` as a web of Google Front Page Clone.

This repository contains also two Parts <br/>

1. [Frontend](#frontend-project)
2. [Backend](#backend-project)

## Prerequisites

- Laptop/Desktop
- Node
- Web Browser
- Stable Internet

# Technology used

## Frontend (FE)

- JavaScript
- CSS
- React.js
- NextJs
- TailwindCSS
- Axios

## Backend(BE)

- JavaScript
- Nodejs
- Express
- Postman

# Get Started

## Frontend Project

[Frontend](A. Setup Frontend Project)

1. Clone the repository
   `https://github.com/Dom58/Alight-Coding-Challenge-BE_FE.git`

In your terminal, run
`cd Alight-Coding-Challenge-BE_FE` and then
`cd frontend` or simply run `cd Alight-Coding-Challenge-BE_FE/frontend`
to navigate to the Google front project for the frontend codebase.

After you navigate to the frontend project/folder, follow the below steps to run the project

2. Install dependencies

   `pnpm install`or `yarn install` or `npm install` depends on your favorite

3. Create your environment variable(`.env` file)

Copy and paste the `.env.example` file and rename the copied file to `.env`.

## Start the project

### For Development

1. `pnpm dev` or `yarn dev` or `npm dev` depends on your favorite

### For Build

To Build the project start by running in your terminal `pnpm build` or `yarn build` or `npm build` to serve the project

1. `pnpm start` or `yarn start` or `npm start` depends on your favorite

2. The browser will open itself.
   Otherwise, please Copy and Paste this to [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Some Screenshots

### Homescreen of the Project

![image](https://github.com/Dom58/Alight-Coding-Challenge-BE_FE/assets/33524053/e047bbd0-cc98-43b7-a6a2-9fdd5df81c86)

### User gets an error when clicking on search button by not providing the search Keyword

![image](https://github.com/Dom58/Alight-Coding-Challenge-BE_FE/assets/33524053/192ff9d0-bcc2-4ce4-a968-514fdc899785)


### Responsiveness

#### Big Screen

![image](https://github.com/Dom58/Alight-Coding-Challenge-BE_FE/assets/33524053/95b8c543-c6c4-420e-9e1f-d3091d9cf60c)

#### IPad

![image](https://github.com/Dom58/Alight-Coding-Challenge-BE_FE/assets/33524053/6751e0b0-103e-4efd-86bd-98ed86d36edf)

#### Phone

![image](https://github.com/Dom58/Alight-Coding-Challenge-BE_FE/assets/33524053/8443a591-eaca-453a-ab56-2237e401addd)

### Filtered Products/Items

#### Search with the keyword `Electronic`, where the API searches in product names and categories

![image](https://github.com/Dom58/Alight-Coding-Challenge-BE_FE/assets/33524053/d24c66fa-8a26-4497-a4e1-01d7b5b4e609)

#### Search with the keyword `Electricity`, and you will find no data

![image](https://github.com/Dom58/Alight-Coding-Challenge-BE_FE/assets/33524053/97272dda-cf61-4d73-97dd-1e756396894d)

### Video

https://github.com/Dom58/Alight-Coding-Challenge-BE_FE/assets/33524053/9f036ea8-0ea4-408a-8a8c-6260e942dc19

### Video with Search Product functionalities

https://github.com/Dom58/Alight-Coding-Challenge-BE_FE/assets/33524053/e307633b-06af-4d69-88d2-af6226bf1bdc





## Backend Project

[Backend](B. Setup Backend Project)

1. In the same repository from the `A` section, just to the root folder of the cloned project

In your new terminal, run
`cd Alight-Coding-Challenge-BE_FE` and then
`cd backend` or simply run `cd Alight-Coding-Challenge-BE_FE/backend`
to navigate to the Google front project for the backend codebase.

After you navigate to the backend project/folder, follow the below steps to run the backend project.

2. Install dependencies

   `pnpm install` or `yarn install` or `npm install`

3. Create your environment variable(`.env` file)

Copy and paste the `.env.example` file and rename the copied file to `.env`.

## Start the project

### For Development

1. `pnpm dev` or `yarn dev` or `npm dev` depends on your favourite

### For Build

- To Build the project start by running in your terminal <br />
  `pnpm build` or `yarn build` or `npm build` depends on your favorite <br/>

- To serve the project<br/>
  `pnpm start` or `yarn start` or `npm start` depends on your favorite

## EndPoints (APIS)

### NOTE

By default, there are `50 items` that are hardcoded in the Backend project
To add more products to view this endpoint, you can use `Postman` to create and display more items.

### APIs Testing with Postman [Screenshots]

#### Create a new item

![image](https://github.com/Dom58/Alight-Coding-Challenge-BE_FE/assets/33524053/22812fe7-b3cd-45e8-b8c0-9d8f07e62a1e)

#### Search a created item

![image](https://github.com/Dom58/Alight-Coding-Challenge-BE_FE/assets/33524053/936fe50f-6dd9-4152-879e-3ea77fafcd72)

### APIs

| Method | Endpoint           | Description                                                           | API Example                                |
| ------ | ------------------ | --------------------------------------------------------------------- | ------------------------------------------ |
| POST   | /items/create      | Create an item                                                        | http://localhost:8000/items/create         |
| GET    | /items             | Fetch all items                                                       | http://localhost:8000/items                |
| GET    | /items/<id>        | Get a single id by ID                                                 | http://localhost:8000/items/2              |
| GET    | /search?q=:keyword | search items by `category` or by `name`, `keyword` should be anything | http://localhost:8000/search?q=electronics |
|        |                    |                                                                       |                                            |
