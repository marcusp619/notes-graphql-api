# notes-graphql-api


## Quick Setup

You need to have Node 6 or higher installed.

```
npm install -g serverless
npm install -g yarn
```

Install Dependencies.
```
yarn install
```

URL to Query
```
https://hfi519bvp7.execute-api.us-east-1.amazonaws.com/dev/notes
```

 **create note Query for Postman**
```
    mutation {
      createNote (title: "hello", noteDescription: "testing", tag: "Work"){
      	id,
      	noteDescription,
      	tag,
        title,
        addedAt
      }
    }
```

 **list notes Query for Postman**
```
    query{
      listNotes{
        id,
        tag,
        noteDescription,
        addedAt
     }
    }
```

 **view specific note Query for Postman**
```
 query {
      viewNote(id: "1784a38d-cc5f-47c5-92e8-6f595265a08f") {
        title,
        addedAt
      }
    }
```

 **remove specific note Query for Postman**
```
  mutation {
      removeNote(id: "505d34b5-ac28-4c44-969f-f0ed5f6cfc8d")
   }
```

 **filter note by category Query for Postman**
```
query{
	filterNotes(tag: "Work")
		{id,
		tag,
		noteDescription,
		addedAt
		}
	}
```


 **filter by date Query for Postman**
 ```
query{
	filterDates(addedAt: "15459919")
		{id,
		tag,
		noteDescription,
		addedAt
		}
	}
```

