
# Instalog 

Simple Full Stack activity log app for tracking actions created by team members, Events contain information relevant to actions taken by users in the application. 

## Features

#### Backend
- Pagination
- Search	
- Filters based on actor_id, target_id, action_id 

#### Frontend
- Listing
- Details
- Load more
- Search





## Tech Stack

**UI:** React, TypeScript, Chakra UI

**API:** Node, TypeScript, Express, Prisma

**Database:** Postgres

**Hosted:** Heroku(API) , Firebase(Client)





## Demo

https://installog-26d55.web.app/


## Run Locally

1. Clone the project

```bash
  git clone https://link-to-project
```

2. Install server dependencies

```bash
  cd server
  npm install
```

3. Setup database

```bash
  npx prisma migrate
```

4. Start the server

```bash
  npm run start
```
5. Install client dependencies

```bash
  cd client
  npm install
```
6. Start the project

```bash
  npm run start
```  



## API Reference

#### Get all Events

```http
  GET /api/events?page={page}&search={search}&search={search}&search={search}&search={search}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `page` | `number` | page number to fetch |
`serach` | `serch` | search by name, email or action |
`actor_id` | `number` | filter by actor_id |
`action_id` | `number` |filter by action_id  |
`target_id` | `number` | filter by target_id  |

#### Get Event

```http
  GET /api/events/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of event to fetch |


#### Add Event

```http
  POST /api/events
```



### More Details
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/15238048-30817ae8-3819-4dcb-8fe5-c7e86b6f30a9?action=collection%2Ffork&collection-url=entityId%3D15238048-30817ae8-3819-4dcb-8fe5-c7e86b6f30a9%26entityType%3Dcollection%26workspaceId%3D064bda05-e3d4-4dea-b7eb-ba7c5cba33e4)




