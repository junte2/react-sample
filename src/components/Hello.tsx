// Hello はクリックするとアラートを出すテキストを返す
const Hello = () => {
  const onClick = () => {
    alert('Hello');
  }
  const text = 'Hello, React!';

  // テキストに子を持つdiv要素を返す
  return (
    <div onClick={onClick}>
      {text}
    </div>
  )
}

// 外部からHelloを参照できるようにする
export default Hello;
