const { buildSchema } = require('graphql');


module.exports = buildSchema(`
type Post {
    _id: ID!
    title: String!
    content: String
    price: Float
    author: String
    status: Boolean
    image: String
    category: categoryType
    email: String
    creator: String
    createdAt: String
    updatedAt: String
}



enum categoryType {
    Apparel
    Electronics
    Entertainment
    Family
    FreeStuff
    Hobbies
    Other
    Outdoor
}

input PostInput {
    title: String!
    content: String!
    price: Float!
    status: Boolean
    image: String!
    email: String!
    creator: String!
    category: categoryType = Other
}

input PostUpdateInput {
    title: String
    content: String
    price: Float
    status: Boolean
    image: String
    category: categoryType
}

type RootQuery {
    post(email: String, category: categoryType, _id: ID): [Post!]!
}

type RootMutation {
    createPost(postInput: PostInput): Post
    deletePost(postId: ID!): Post
    updatePost(postId: ID!, postUpdateInput: PostUpdateInput): Post
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`)

