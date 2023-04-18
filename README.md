
# Society Mangement System

This is a web application for managing a society's activities such as Student manangement as user and administrator that control user and much more. The project is built using Javascript, a REST API, MySQL database, and Postman for testing.

## Getting Started
## Prerequisites
To run this project, you'll need:

- Node.js (v14 or higher)

- MySQL server (v5.7 or higher)

- Postman (for testing the REST API)
## Installation
1) Clone the repositry

```bash
  https://github.com/Junaid7040/Society-Managment-System
```

2) Install dependencies:

```terminal
  npm init
  npm install express
  npm install cors
  npm intall mysql2
```

3) Create a new MySQL database and import the SQL file database.sql located in the sql folder.
```Database name
  Database Name: societymanagmentsystem
```


## Usage
To start the application, run:
```bash
   npm start
```
The application should now be running at http://localhost:3007.

You can use Postman to test the REST API endpoints. Import the Society Management System.postman_collection.json file located in the postman folder to get started.
## Features

The Society Management System includes the following features:
- Login page

- Register Admin

- Register Users

- Take Users Free slots

- Important Announcements

- Technology related Blogs from Admin and Users

- Comments Rights to Users and Admin
## API Reference
## Admin Panel
#### Admin Comment Announcement

```http
  localhost:3007/api/adCommAnoucs
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `ID` | `string` | **Required**.  ID to acces |

#### Admin Blog Comment

```http
  localhost:3007/api/adCommBlogs
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `ID` | `string` | **Required**.ID to access |

#### Admin 

```http
  localhost:3007/api/admins
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `ID` | `string` | **Required**. ID to access |

#### Announcements

```http
  localhost:3007/api/announcements
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `ID` | `string` | **Required**. ID to access |


#### Blog Write

```http
  localhost:3007/api/blogwrites
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `ID` | `string` | **Required**. ID to access |

## User Panel
#### Give Comments to Announcements

```http
  localhost:3007/api/CommAnoucs
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `ID` | `string` | **Required**. ID to access |

#### Give Comment to Blogs

```http
  localhost:3007/api/CommBlogs
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `ID` | `string` | **Required**. ID to access |

#### Give slots from Timetable

```http
  localhost:3007/api/timetables
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `ID` | `string` | **Required**. ID to access |

#### User

```http
  localhost:3007/api/users
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `ID` | `string` | **Required**. ID to access |

## Authors

- ### Juniad Ahmad
  
  Make API's for Admin Module 

- ### Hussain Zaidi

  Make API's for User Module
## 🚀 About Me
I'm a full stack developer...


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://katherineoelsner.com/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/)


## License

[FAST NUCES CFD Campus](https://cfd.nu.edu.pk/)

