# concat-json
Library to concatenate JSONs 

# Install

`bower install --save concat-json`

# Example

```
var json1 = {
  name: 'Sebastián',
  last: 'Osorio',
  from: 'Colombia'
}
,   json2 = {
  name: 'Carlos',
  last: 'Parada',
  age: '20',
  height: '170'
};

json1.concat(json2);

console.log(json1);

/*
{
  name: 'Carlos',
  last: 'Parada',
  from: 'Colombia',
  age: '20',
  height: '170'
}
*/
```
