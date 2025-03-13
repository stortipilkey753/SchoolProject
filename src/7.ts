function getRandomTsCode(): string {
  const randNum = Math.floor(Math.random() * 100);
  return `const foo${randNum} = () => console.log('Hello from Foo ${randNum}');`;
}
