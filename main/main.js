module.exports = (input) => {
  return input
    .split('')
    .map(toLCDDigit)
    .reduce((a, b) => a.map((c, i) => [...c, b[i]]), [[], [], []])
    .map((row) => row.join(' '))
    .join('\n');
};

toLCDDigit = (number)  => {
  return [['._.', '|.|', '|_|'],
          ['...', '..|', '..|'],
          ['._.', '._|', '|_.'],
          ['._.', '._|', '._|'],
          ['...', '|_|', '..|'],
          ['._.', '|_.', '._|'],
          ['._.', '|_.', '|_|'],
          ['._.', '..|', '..|'],
          ['._.', '|_|', '|_|'],
          ['._.', '|_|', '..|'],
  ][parseInt(number)];
}