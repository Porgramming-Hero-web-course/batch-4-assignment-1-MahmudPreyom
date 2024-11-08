<!-- The significance of union and intersection types in Typescript. -->

# The Relevance of Union Types And Intersection Types In TypeScript Regarding Application

TypeScript, which is a strict syntactical superset of JavaScript, provides various advantages to developers as it allows for early error detection and code that is more expressive. Two of the types with the most love in type system of typescript are Union Types and Intersection Types. Making use of these types can enhance your TypeScript code significantly by making it more adaptable and secure. In this post, we’ll elaborate on these topics and illustrate how they are used as well as their significance.

# 1.  Union Types

A simple conclusion you can draw from this definition is that a Union Type allows a variable to contain either one of a set number of specified types, but never more than one of them. A particular value, which may be made up of several feasible types, may obtain any of them.

Why Use Union Types?

Flexibility: Union types enable you to implement a large number of input types without risking the loss of type-feature.

<!--Union Example Start-->

```
type SuccessResponse = {
    status: "success";
    data: string[];
};

type ErrorResponse = {
    status: "error";
    message: string;
}

function handleApiResponse(response: SuccessResponse | ErrorResponse) {
    if(response.status === "success"){
        console.log("Data:", response.data);
    } else {
        console.log("Error:", response.message)
    }
}

handleApiResponse();
```

<!--Union Example end -->


# 2. Intersection Types

An Intersection Type is a combination of two or more types into a single cohesive unit. It denotes a type that possesses each of the characteristics of any of the types that were joined together. This comes in handy when you want to you want to define a new type that combines two or more already defined types together.

Why Use Intersection Types?

Combining Types: Intersection types provide a means by which you can combine several primitive types into a single type therefore allowing for further conciseness in the code.

<!-- Intersection Type Example Start -->

```
type Admin = {
    adminId: number;
    permission: string[];
};

type User = {
    userId: number;
    userName: string;
};

type AdminUser = Admin & User;

const adminUser: AdminUser = {
    adminId: 1,
    userId: 101,
    userName: "Admin Vai",
    permissions: ["READ", "WRITE", "DELETE"],
};

console.log(`Admin User: ${adminUser.username}, Permissions: ${adminUser.permissions.join(", ")});
```

<!-- Intersection Type Example End -->