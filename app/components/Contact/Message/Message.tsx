import { messageContent } from "./Message.data";
import { messageStyles } from "./styles";

export function Message() {
  return (
    <div className={messageStyles.wrapper}>
      <div className={messageStyles.header}>
        <p className={messageStyles.eyebrow}>
          {messageContent.eyebrow}
        </p>

        <h2 className={messageStyles.title}>
          {messageContent.title}
        </h2>

        <p className={messageStyles.description}>
          {messageContent.description}
        </p>
      </div>

      <form className={messageStyles.form}>
        <div className={messageStyles.field}>
          <label htmlFor="name" className={messageStyles.label}>
            {messageContent.fields.name}
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            className={messageStyles.input}
          />
        </div>

        <div className={messageStyles.field}>
          <label htmlFor="email" className={messageStyles.label}>
            {messageContent.fields.email}
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            className={messageStyles.input}
          />
        </div>

        <div className={messageStyles.field}>
          <label htmlFor="subject" className={messageStyles.label}>
            {messageContent.fields.subject}
          </label>

          <input
            id="subject"
            name="subject"
            type="text"
            required
            className={messageStyles.input}
          />
        </div>

        <div className={messageStyles.field}>
          <label htmlFor="message" className={messageStyles.label}>
            {messageContent.fields.message}
          </label>

          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className={messageStyles.textarea}
          />
        </div>

        <button type="submit" className={messageStyles.button}>
          {messageContent.button}
          <span aria-hidden="true">→</span>
        </button>
      </form>
    </div>
  );
}