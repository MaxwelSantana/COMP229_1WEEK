function parent() {
  const message = 'Hello World';

  function child() {
    alert(message);
  }

  child();
}

parent();
