import React from "react";

// 名前を入力するためのテキストボックスを返す
const Name = () => {
  // input要素のonchangeイベントに対するコールバック関数を定義
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  }

  return (
    // styleオブジェクトのキーはキャメルケース
    <div style={{padding: '16px', backgroundColor: 'lightgray'}}>
      {/* テキストボックスを返す */}
      <label htmlFor={"name"}>名前</label>
      {/* input要素のvalue属性には空文字列を指定 */}
      <input id="name" className="input-name" type="text" value="" onChange={onChange}/>
    </div>
  )
}

export default Name;
