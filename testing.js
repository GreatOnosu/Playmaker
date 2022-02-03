const array = [
    {id: 12, name: 'toto'},
    {id: 12, name: 'toto'},
    {id: 42, name: 'tutu'},
    {id: 12, name: 'toto'},
  ];
  

  const count = array.filter((obj) => obj.name === "toto").length;
  
  console.log(count);