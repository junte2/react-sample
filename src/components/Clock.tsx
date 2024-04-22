import React, {useState, useEffect} from "react";
// タイマーの周期
const UPDATE_CYCLE = 1000;

// localstorageで利用するキー
const KEY_LOCAL = 'KEY_LOCAL;';

enum Locale {
  US = 'en-US',
  JP = 'ja-JP',
}

const getLocalFromString = (text: string) => {
  switch (text) {
    case Locale.US:
      return Locale.US;
    case Locale.JP:
      return Locale.JP;
    default:
      return Locale.US;
  }
}
export const Clock = () => {
  const [timestamp, setTimestamp] = useState(new Date());
  const [locale, setLocal] = useState(Locale.US);

  // タイマーをセットするための副作用
  useEffect(
    () => {
      const timer = setInterval(() => {
        setTimestamp(new Date());
      }, UPDATE_CYCLE)

      // クリーンアップ関数を私、アンマウント時にタイマーを解除する
      return () => {
        clearInterval(timer);
      }
      // 初期化描画時のみ実行するため空配列を渡す
    }, []
  )

  // localstorageに保存されている値を取得する
  useEffect(() => {
    const saveLocale = localStorage.getItem(KEY_LOCAL);
    if (saveLocale !== null) {
      setLocal(getLocalFromString(saveLocale));
    }
  }, [])

  // localeが変化したときにlocalstorageに保存するための副作用
  useEffect(() => {
    localStorage.setItem(KEY_LOCAL, locale);
    // 依存配列にlocaleを私、localeが変化したときのみ実行する
  }, [locale]);

  return (
    <div>
      <p>
        <span id={"current-time-balel"}>現在時刻</span>
        <span>:{timestamp.toLocaleString(locale)}</span>
        <select
          value={locale}
          onChange={(e) => setLocal(getLocalFromString(e.target.value))}>
          <option value="en-US">en-US</option>
          <option value="ja-JP">ja-JP</option>
        </select>
      </p>
    </div>
  )
};

export default Clock;
