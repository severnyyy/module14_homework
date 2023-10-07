const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;

const data = JSON.parse(jsonString);
const list = data.list;
const objects = [...list];

const result = [];
objects.forEach( object => {
    result.push({
      name: object.name,
      age: Number(object.age),
      prof: object.prof,
  });
});

console.log('result', result);