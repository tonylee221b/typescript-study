/* const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Tony',
  age: 24,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'],
};*/

// ENUM
enum Role {
  ADMIN = 'ADMIN',
  READ_ONLY = 100,
  AUTHOR = 200
};

const person = {
  name: 'Tony',
  age: 24,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};

/*
// tuple: FIXED-length array -> TypeScript Feature
// tuple accepts push method!!!
person.role.push('admin');
person.role[1] = 10;

// but does not support this!!
person.role = [0, 'admin', 'user'];
*/

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) console.log('is an Admin')
