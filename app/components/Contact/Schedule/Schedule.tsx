import { Calendly } from "../../ui/Calendly/Calendly";
import { scheduleContent } from "./Schedule.data";
import { scheduleStyles } from "./styles";

export function Schedule() {
  return (
    <div className={scheduleStyles.wrapper}>
      <div className={scheduleStyles.header}>
        <p className={scheduleStyles.eyebrow}>
          {scheduleContent.eyebrow}
        </p>

        <h2 className={scheduleStyles.title}>
          {scheduleContent.title}
        </h2>

        <p className={scheduleStyles.description}>
          {scheduleContent.description}
        </p>
      </div>

      <Calendly url={scheduleContent.calendlyUrl} title={scheduleContent.calendlyTitle} />
    </div>
  );
}