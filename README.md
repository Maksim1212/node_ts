### Solution checklist

- [x] User registration (email, name, password)
- [x] User login
- [x] User password update
- [x] Post(title, body, likes and comments, creation time)
- [x] Comments 
- [x] Like Comments 
- [x] Create post 
- [x] Update post (Update title and body - only post author)
- [x] Like post
- [x] Display single post
- [x] List of posts have to be filtered by: creation time (latest -> oldest, latest <- oldest, specific author), likes count
- [x] DB : seeds

### To run with npm you need :

- Clone the repository
- Run npm install
- Сreate database and user according to .env
- Run npm run start command:
```
npm run start
```
- If you need to fill the database, run the npm run migration:run command in the backend directory:
```
npm run migration:run
```
- If you need clear the database seed data, run command :
```
npm run migration:revert
```
After starting server go to http://localhost:3000/api-docs if you want to see swagger doc
