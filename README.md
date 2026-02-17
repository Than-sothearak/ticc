## Getting Started
First, run the development server:

```bash
npm install
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.
This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## ENV 
## GOOGLE AUTH ADMIN LOGIN 
GOOGLE_ID=
GOOGLE_SECRET=

## DATA BASE URL MONGODB
MONGODB_URI=

## AWS S3 IAM USER AND BUCKET FOR STORE IMAGES
S3_ACCESS_KEY=
S3_SECRET_ACCESS_KEY=
S3_BUCKET_NAME=

## NEXT AUTH
NEXTAUTH_URL =http://localhost:3000/
AUTH_TRUST_HOST="true"
AUTH_SECRET=


## DATABASE MODEL IMAGE VIEW 
https://drive.google.com/file/d/1s7S75-GDunPzEvLOUfOdvNTi9GFYan1W/view?usp=sharing
## DATABASE JSON
{
  "collections": {
    "ticcDb.admins": {
      "ns": "ticcDb.admins",
      "jsonSchema": {
        "bsonType": "object",
        "required": [
          "_id",
          "email"
        ],
        "properties": {
          "_id": {
            "bsonType": "objectId"
          },
          "email": {
            "bsonType": "string"
          }
        }
      }
    },
    "ticcDb.contents": {
      "ns": "ticcDb.contents",
      "jsonSchema": {
        "bsonType": "object",
        "required": [
          "_id",
          "__v",
          "apply_link",
          "information",
          "slide_show"
        ],
        "properties": {
          "_id": {
            "bsonType": "objectId"
          },
          "__v": {
            "bsonType": "int"
          },
          "apply_link": {
            "bsonType": "object",
            "properties": {
              "deadline": {
                "bsonType": "date"
              },
              "enabled": {
                "bsonType": "bool"
              },
              "src": {
                "bsonType": "string"
              },
              "title": {
                "bsonType": "string"
              }
            },
            "required": [
              "deadline",
              "enabled",
              "src",
              "title"
            ]
          },
          "information": {
            "bsonType": "object",
            "properties": {
              "enabled": {
                "bsonType": "bool"
              },
              "poster": {
                "bsonType": "array",
                "items": {
                  "bsonType": "string"
                }
              },
              "weeks": {
                "bsonType": "object",
                "properties": {
                  "week1": {
                    "bsonType": "date"
                  },
                  "week2": {
                    "bsonType": "date"
                  },
                  "week3": {
                    "bsonType": "date"
                  },
                  "week4": {
                    "bsonType": "date"
                  }
                },
                "required": [
                  "week1",
                  "week2",
                  "week3",
                  "week4"
                ]
              }
            },
            "required": [
              "enabled",
              "poster",
              "weeks"
            ]
          },
          "slide_show": {
            "bsonType": "object",
            "properties": {
              "images": {
                "bsonType": "array",
                "items": {
                  "bsonType": "string"
                }
              }
            },
            "required": [
              "images"
            ]
          }
        }
      }
    },
    "ticcDb.events": {
      "ns": "ticcDb.events",
      "jsonSchema": {
        "bsonType": "object",
        "required": [
          "_id",
          "__v",
          "createdAt",
          "description",
          "images",
          "postby",
          "prototypes",
          "season",
          "title",
          "updatedAt",
          "year"
        ],
        "properties": {
          "_id": {
            "bsonType": "objectId"
          },
          "__v": {
            "bsonType": "int"
          },
          "createdAt": {
            "bsonType": "date"
          },
          "description": {
            "bsonType": "string"
          },
          "images": {
            "bsonType": "array",
            "items": {
              "bsonType": "string"
            }
          },
          "postby": {
            "bsonType": "string"
          },
          "prototypes": {
            "bsonType": "array",
            "items": {
              "bsonType": "string"
            }
          },
          "season": {
            "bsonType": "string"
          },
          "title": {
            "bsonType": "string"
          },
          "updatedAt": {
            "bsonType": "date"
          },
          "year": {
            "bsonType": "int"
          }
        }
      }
    },
    "ticcDb.mentors": {
      "ns": "ticcDb.mentors",
      "jsonSchema": {
        "bsonType": "object",
        "required": [
          "_id",
          "__v",
          "createdAt",
          "name",
          "title",
          "updatedAt",
          "year"
        ],
        "properties": {
          "_id": {
            "bsonType": "objectId"
          },
          "__v": {
            "bsonType": "int"
          },
          "createdAt": {
            "bsonType": "date"
          },
          "image": {
            "bsonType": "string"
          },
          "name": {
            "bsonType": "string"
          },
          "title": {
            "bsonType": "string"
          },
          "updatedAt": {
            "bsonType": "date"
          },
          "year": {
            "bsonType": "int"
          }
        }
      }
    },
    "ticcDb.partners": {
      "ns": "ticcDb.partners",
      "jsonSchema": {
        "bsonType": "object",
        "required": [
          "_id",
          "__v",
          "createdAt",
          "logos",
          "updatedAt"
        ],
        "properties": {
          "_id": {
            "bsonType": "objectId"
          },
          "__v": {
            "bsonType": "int"
          },
          "createdAt": {
            "bsonType": "date"
          },
          "logos": {
            "bsonType": "array",
            "items": {
              "bsonType": "string"
            }
          },
          "updatedAt": {
            "bsonType": "date"
          }
        }
      }
    }
  },
  "relationships": []
}