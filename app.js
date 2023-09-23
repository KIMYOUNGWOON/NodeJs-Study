const express = require('express');
const app = express();
const PORT = 3000;

const users = [
  { id: 1, name: 'elice' },
  { id: 2, name: 'node' },
  { id: 3, name: 'package' },
];

app.get('/', (req, res) => {
  res.send('Hello Node Js');
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  const user = users.filter((user) => user.id === parseInt(id));
  if (user.length === 0) {
    res.status(404).send('해당 유저를 찾을 수 없습니다.');
  } else {
    res.status(200).json(user);
  }
});

app.listen(PORT, () => {
  console.log(`Server is Listening on Port ${PORT}`);
});
