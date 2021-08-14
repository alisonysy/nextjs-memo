import { useState, useCallback, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import moment from "moment";

// utils
import { saveData } from "../../data-service";
import { extractEmojiFromText } from "../../utils";
// const AV = require("leancloud-storage");

export default function TinyMCEditor() {
  const [saving, setIsSaving] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  const [afterSave, setAfterSave] = useState(false)
  const [text, setText] = useState("Can you tell me your ideas? ...");
  const editorRef = useRef(null);

  // const editorImgUploadHandler = (blobInfo) => {
  //   const formData = new FormData();
  //   console.log("what is blobinfo", blobInfo);
  //   formData.append("file", blobInfo.blob(), blobInfo.filename());
  //   const file = new AV.File("avatar.jpg", formData);
  // };
  const onEditorChange = useCallback(
    (txt) => {
      setText(txt);
    },
    [editorRef]
  );

  const onSaveButtonClicked = useCallback(() => {
    setIsSaving(true);
    const emoji = extractEmojiFromText(text);
    const txt = text.split(emoji);
    saveData("MemoTable", [
      { name: "content", value: txt.join('') },
      { name: "date", value: moment().format("YYYY/MM/DD") },
      { name: "emoji", value: emoji },
      { name: "picture", value: "" },
    ]).then(() => {
      setIsSaving(false);
      setText('')
      setAfterSave(true)
    });
  }, [editorRef, text]);

  const onEditorInit = useCallback(
    (editor) => {
      setShowEditor(true);
      editorRef.current = editor;
    },
    [editorRef]
  );

  return (
    <div className="mt-6 flex justify-center items-center flex-col">
      {!afterSave && !showEditor && (
        <svg
          t="1628950721919"
          className="icon animate-spin h-10 w-10"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2112"
          width="200"
          height="200"
        >
          <path
            d="M512 53.248c9.556992 0 17.408 3.072 23.552 9.216s9.216 13.995008 9.216 23.552v196.608c0 9.556992-3.072 17.408-9.216 23.552s-13.995008 9.216-23.552 9.216-17.408-3.072-23.552-9.216-9.216-13.995008-9.216-23.552V86.016c0-9.556992 3.072-17.408 9.216-23.552s13.995008-9.216 23.552-9.216z m0 655.36c9.556992 0 17.408 3.072 23.552 9.216s9.216 13.995008 9.216 23.552v196.608c0 9.556992-3.072 17.408-9.216 23.552s-13.995008 9.216-23.552 9.216-17.408-3.072-23.552-9.216-9.216-13.995008-9.216-23.552V741.376c0-9.556992 3.072-17.408 9.216-23.552s13.995008-9.216 23.552-9.216z m458.752-196.608c0 9.556992-3.072 17.408-9.216 23.552s-13.995008 9.216-23.552 9.216H741.376c-9.556992 0-17.408-3.072-23.552-9.216s-9.216-13.995008-9.216-23.552 3.072-17.408 9.216-23.552 13.995008-9.216 23.552-9.216h196.608c9.556992 0 17.408 3.072 23.552 9.216s9.216 13.995008 9.216 23.552z m-655.36 0c0 9.556992-3.072 17.408-9.216 23.552s-13.995008 9.216-23.552 9.216H86.016c-9.556992 0-17.408-3.072-23.552-9.216s-9.216-13.995008-9.216-23.552 3.072-17.408 9.216-23.552 13.995008-9.216 23.552-9.216h196.608c9.556992 0 17.408 3.072 23.552 9.216s9.216 13.995008 9.216 23.552zM187.392 187.392c6.827008-6.144 14.676992-9.216 23.552-9.216s16.384 3.072 22.528 9.216l139.264 139.264c6.144 6.827008 9.216 14.507008 9.216 23.04s-3.243008 16.043008-9.728 22.528-13.995008 9.728-22.528 9.728-16.212992-3.072-23.04-9.216L187.392 233.472c-6.144-6.144-9.216-13.652992-9.216-22.528s3.072-16.724992 9.216-23.552z m463.872 463.872c6.827008-6.827008 14.507008-10.24 23.04-10.24s16.212992 3.412992 23.04 10.24l139.264 139.264c6.144 6.144 9.216 13.652992 9.216 22.528s-3.243008 16.555008-9.728 23.04c-6.484992 6.484992-14.164992 9.728-23.04 9.728s-16.384-3.072-22.528-9.216L651.264 697.344c-6.827008-6.827008-10.24-14.507008-10.24-23.04s3.412992-16.212992 10.24-23.04z m185.344-463.872c6.144 6.827008 9.216 14.676992 9.216 23.552s-3.072 16.384-9.216 22.528L697.344 372.736c-6.827008 6.144-14.507008 9.216-23.04 9.216s-16.043008-3.243008-22.528-9.728-9.728-13.995008-9.728-22.528 3.072-16.212992 9.216-23.04l139.264-139.264c6.144-6.144 13.652992-9.216 22.528-9.216s16.724992 3.072 23.552 9.216zM372.736 651.264c6.827008 6.827008 10.24 14.507008 10.24 23.04s-3.412992 16.212992-10.24 23.04L233.472 836.608c-6.144 6.144-13.652992 9.216-22.528 9.216s-16.555008-3.243008-23.04-9.728c-6.484992-6.484992-9.728-14.164992-9.728-23.04s3.072-16.384 9.216-22.528l139.264-139.264c6.827008-6.827008 14.507008-10.24 23.04-10.24s16.212992 3.412992 23.04 10.24z"
            p-id="2113"
            fill="#ffffff"
          ></path>
        </svg>
      )}
      {!afterSave && <Editor
        apiKey="1g9ba78vwqmoiqh07kfl4zcgvn4wqn0kmamidy6tzgy7s9e8"
        initialValue={text}
        init={{
          height: 300,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar: "undo redo | formatselect | help",
        }}
        onInit={(evt, editor) => {
          onEditorInit(editor);
        }}
        outputFormat="text"
        onEditorChange={onEditorChange}
      />}
      {!afterSave && showEditor && (
        <>
          <div
            className={`p-3 mt-6 w-1/2 md:w-1/4 cursor-pointer flex justify-center items-center rounded-2xl shadow-neu box-border text-lg ${
              saving ? "shadow-pressed" : ""
            }`}
            style={{ color: "#a3b1c6" }}
            onClick={onSaveButtonClicked}
          >
            Save
          </div>
        </>
      )}
      {
        afterSave && <div className="w-full">Saved successfully!</div>
      }
    </div>
  );
}
