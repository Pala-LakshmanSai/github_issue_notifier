import { useEffect, useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [url, setUrl] = useState("");
  useEffect(() => {
    const getCurrentTabUrl = async () => {
      let queryOptions = { active: true, lastFocusedWindow: true };
      let [tab]: any = await chrome.tabs.query(queryOptions);
      setUrl(tab.url);
    };
    getCurrentTabUrl();
  }, []);

  const onClickHandler = () => {
    alert(`added repo ${url}`);
  };

  return (
    <div style={{ width: 300, padding: 20 }}>
      <h2>Issue Notifier</h2>
      <input
        id="urlValue"
        type="text"
        value={url}
        style={{ width: "100%", marginBottom: 10 }}
      />
      <button onClick={onClickHandler}>Add this repo</button>
    </div>
  );
};

export default App;
