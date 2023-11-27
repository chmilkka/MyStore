
export class UserCreateModel {
    email;
    password;
    role;
}
export class UserUpdateModel {
    id;
    firstName;
    lastName;
    photo; 
}
export class UserModel {
    id;
    firstName;
    lastName;
    password;
    email;
    role;
    photo;
}
export class UserLoginModel {
    email;
    password;
}

export const Roles = {
    User: 0,
    Admin: 1
}

