import { useRef, useState } from "react";

export default function DateItem({ date, picture, emoji, content }) {
  // if the card is expanded: show more content
  const [expanded, setExpanded] = useState(false);
  // if the card is hovered: show emoji, only in laptop mode
  const [hovered, setHovered] = useState(false);
  // if there's picture, use the picture to form the src
  const picSrc = "/images/" + picture + ".jpg";

  // inner card ref
  const innerCardRef = useRef(null);

  function onMouseOverAndLeaveCard(isOn) {
    setHovered(isOn);
  }

  function onClickOrTapToShowContent() {
    setExpanded(true);
    innerCardRef.current.classList.add("shadow-pressed");
  }

  return (
    <div
      className="w-full md:w-5/12 lg:w-1/5 md:h-52 lg:h-60 p-2 shadow-neu flex flex-col justify-center items-center cursor-pointer box-border"
      onMouseOver={() => {
        onMouseOverAndLeaveCard(true);
      }}
      onMouseLeave={() => {
        onMouseOverAndLeaveCard(false);
      }}
      onClick={onClickOrTapToShowContent}
    >
      <div
        className="w-full h-full p-3 md:p-4 lg:p-5 box-border"
        ref={innerCardRef}
      >
        {/* 日期 */}
        <div className="w-full flex justify-between">
          <span>{date}</span>
          <span className="inline-block md:hidden">{emoji}</span>
        </div>
        {/* 分割线 */}
        <div className="w-full h-0.5 shadow-neu"></div>
        {/* 内容 */}
        {expanded && (
          <div>
            <div>{content}</div>
            {picture && <img src={picSrc} className="block mx-auto mt-4" />}
          </div>
        )}
        {/* 768px以上屏幕 显示emoji */}
        {hovered && (
          <span className="hidden md:inline-block items-end">{emoji}</span>
        )}
      </div>
    </div>
  );
}
