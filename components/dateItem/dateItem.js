import { useEffect, useRef, useState } from "react";
import { emojify } from "react-emojione";
import styles from "./dateItem.module.css";
var moment = require("moment");

export default function DateItem({ date, picture, emoji, content }) {
  // if the card is expanded: show more content
  const [expanded, setExpanded] = useState(false);
  // if the card is hovered: show emoji, only in laptop mode
  const [hovered, setHovered] = useState(false);
  // if there's picture, use the picture to form the src
  const picSrc = "/images/" + picture;

  // inner card ref
  const innerCardRef = useRef(null);

  function onMouseOverAndLeaveCard(isOn) {
    setHovered(isOn);
  }

  function onClickOrTapToShowContent() {
    setExpanded(!expanded);
    if (expanded) {
      innerCardRef.current.classList.remove("shadow-pressed");
    } else {
      innerCardRef.current.classList.add("shadow-pressed");
    }
  }

  return (
    <div
      className="w-full md:w-5/12 lg:w-1/5 md:h-52 lg:h-60 p-2 shadow-neu flex flex-col justify-center items-center cursor-pointer box-border mb-6 lg:mb-8 md:mr-6 rounded-2xl"
      onMouseOver={() => {
        onMouseOverAndLeaveCard(true);
      }}
      onMouseLeave={() => {
        onMouseOverAndLeaveCard(false);
      }}
      onClick={onClickOrTapToShowContent}
    >
      <div
        className="w-full h-full p-3 md:p-4 lg:p-5 box-border relative rounded-2xl overflow-scroll"
        ref={innerCardRef}
      >
        {/* 日期 */}
        <div className="w-full flex justify-between">
          <span className={styles.dateFont}>
            {moment(date).format("dddd, MMM D")}
          </span>
          <span className="inline-block visible md:invisible">
            {emojify(emoji)}
          </span>
        </div>
        {/* 分割线 */}
        <div className="w-full h-0.5 shadow-neu"></div>
        {/* 内容 */}
        {expanded && (
          <div>
            <div className={styles.contentFont}>{content}</div>
            {picture && <img src={picSrc} className="block mx-auto mt-4" />}
          </div>
        )}
        {/* 768px以上屏幕 显示emoji */}
        {hovered && (
          <span className="invisible inline-block md:visible items-end absolute right-4 bottom-4">
            {emojify(emoji)}
          </span>
        )}
      </div>
    </div>
  );
}
