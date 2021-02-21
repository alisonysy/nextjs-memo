import { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function TinyMCEditor() {
  const handleEditorChange = (evt) => {
    console.log("editor is changing---", evt);
  };

  return (
    <Editor
      apiKey="kfhebyrx5s4pfrm64vs3mr6q19n98p7crj5pufnvuithg9qs"
      initialValue="<p>This is the initial content of the editor</p>"
      init={{
        height: 500,
        menubar: false,
        plugins: [
          "advlist autolink lists link image charmap print preview anchor",
          "searchreplace visualblocks code fullscreen",
          "insertdatetime media table paste code help wordcount",
        ],
        toolbar:
          "undo redo | formatselect | bold italic backcolor | \
          alignleft aligncenter alignright alignjustify | \
          link image | \
          bullist numlist outdent indent | removeformat | help",
      }}
      onEditorChange={handleEditorChange}
    />
  );
}
