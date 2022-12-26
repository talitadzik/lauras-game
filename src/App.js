import styles from "./App.module.scss";

function App() {
  return (
    <div className="App">
      <div className={styles.warning}>
        <img src="https://i.postimg.cc/FsmS9pNk/image.png" />
      </div>
      <div className={styles.container}>
        <div className={styles.buttonsRooms}>
          <div className={styles.buttonsRoomsRow}>
            <div>
              <img src="https://i.postimg.cc/KYBwr0TD/image.png" />
            </div>
            <div>
              <img src="https://i.postimg.cc/9Mc8PCCc/image.png" />
            </div>
            <div>
              <img src="https://i.postimg.cc/Hk4bw5x7/image.png" />
            </div>
            <div>
              <img src="https://i.postimg.cc/KYBwr0TD/image.png" />
            </div>
            <div>
              <img src="https://i.postimg.cc/9Mc8PCCc/image.png" />
            </div>
          </div>
          <div className={styles.buttonsRoomsRow}>
            <div>
              <img src="https://i.postimg.cc/Hk4bw5x7/image.png" />
            </div>
            <div>
              <img src="https://i.postimg.cc/KYBwr0TD/image.png" />
            </div>
            <div>
              <img src="https://i.postimg.cc/9Mc8PCCc/image.png" />
            </div>
            <div>
              <img src="https://i.postimg.cc/Hk4bw5x7/image.png" />
            </div>
            <div>
              <img src="https://i.postimg.cc/Hk4bw5x7/image.png" />
            </div>
          </div>
          <hr />
          <div className={styles.buttonsActions}>
            <div>
              <img src="https://i.postimg.cc/Hk4bw5x7/image.png" />
            </div>
            <div>
              <img src="https://i.postimg.cc/Hk4bw5x7/image.png" />
            </div>
            <div>
              <img src="https://i.postimg.cc/Hk4bw5x7/image.png" />
            </div>
            <div>
              <img src="https://i.postimg.cc/Hk4bw5x7/image.png" />
            </div>
            <div>
              <img src="https://i.postimg.cc/Hk4bw5x7/image.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
