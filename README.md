# Cork board

A simple single page application for storing your notes and share it with others


## Current dev plan
### 1. Add main functionality and try core logic
1.2 Add Header/Board/Menu

1.3 Add cards with responsive layout

1.4 Add CRUD operations

### 2. Setup local devserver with mock files
2.1 Investigate is it possible to use vite

2.2 If not find modern solution

2.3 As a rescue plan: use JSexpress

2.4 Add corresponded tasks to  package.json

### 3. Create some test API
3.1 Implement some Basic easiest authentication

3.1.1 Create separated structure for FE and BE

3.1.2 Add Login form to FE

3.1.3 Implement auth API on BE side

3.1.4 Plug In FE and BE each other

3.2 Add API for managing users (mock files must be rewritable)

### 4. Add Community block
by design we have 3 groups: Family/Friends/Other
all of these groups must be stored in corresponded subtab

4.1 Add a functional popup

4.2 Add user search (by ID) and ADD features 

4.3 Add drag&drop feature to put user in corresponded group

### 5. Add Share notes feature
5.1 Add share button to each note, shared note could be Removed, but still displays on recipient's board

5.2 Highlight recieved and shared notes, also mentioned cards must contain info about reciever and sender (names mapped to id)
