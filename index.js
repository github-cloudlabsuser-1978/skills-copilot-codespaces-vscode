const data = [
    [
      { name: 'John', age: 28 },
      { name: 'Jane', age: 32 }
    ],
    [
      { name: 'Bob', age: 24 }
    ]
  ];
  
  const names = data.flatMap(innerArray => innerArray.map(item => item.name));
  
  console.log(names); // Output: ['John', 'Jane', 'Bob']