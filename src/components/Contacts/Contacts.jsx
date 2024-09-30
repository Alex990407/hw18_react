import React from "react";
import styles from "./Contacts.module.css";
import snapchatLogo from "../../assets/snapchat.svg";
import facebookLogo from "../../assets/facebook.svg";
import twitterLogo from "../../assets/twitter.jpeg.svg";

const Contacts = () => {
  return (
    <section className={styles.contactsSection}>
      <div className={styles.contactInfo}>
        <h1>Контакты</h1>
        <ul>
          <li>Телефон: +1 (123) 456-7890</li>
          <li>Email: example@example.com</li>
        </ul>

        <form className={styles.contactForm}>
          <input
            type="text"
            placeholder="Ваше имя"
            className={styles.inputField}
          />
          <input
            type="email"
            placeholder="Ваш email"
            className={styles.inputField}
          />
          <textarea
            placeholder="Ваше сообщение"
            className={styles.textArea}
          ></textarea>
          <button type="submit" className={styles.submitButton}>
            Отправить
          </button>
        </form>
      </div>

      <div className={styles.socialLinks}>
        <p>Найдите нас на:</p>
        <a
          href="https://www.snapchat.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={snapchatLogo}
            alt="Snapchat"
            className={styles.socialIcon}
          />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={facebookLogo}
            alt="Facebook"
            className={styles.socialIcon}
          />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitterLogo} alt="Twitter" className={styles.socialIcon} />
        </a>
      </div>
    </section>
  );
};

export default Contacts;
