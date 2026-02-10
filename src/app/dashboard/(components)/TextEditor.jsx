"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import HardBreak from "@tiptap/extension-hard-break";
import { useMemo, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Bold, Heading2, List, ImageIcon, Heading3, Heading1 } from "lucide-react";

export default function TextEditor({ value, onChange }) {
  // ✅ Memoized extensions
  const extensions = useMemo(
    () => [
      StarterKit.configure({
        paragraph: {
          HTMLAttributes: { class: "mt-3 leading-7" },
        },
      }),
      HardBreak, // Shift+Enter inserts <br>
      Image,
      Link,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    []
  );

  const editor = useEditor({
    extensions,
    editorProps: {},
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    immediatelyRender: false, // <-
  });

  // ✅ Safely set content when editor or value changes
  useEffect(() => {
    if (editor) {
      // Default to empty paragraph if value is empty
      editor.commands.setContent(value || "<p></p>");
    }
  }, [editor, value]);

  if (!editor) return null;

  return (
    <div className="border rounded-xl bg-background shadow-sm">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 border-b p-2">
        <Button
          type="button"
          size="sm"
          variant={editor.isActive("bold") ? "default" : "outline"}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <Bold size={16} />
        </Button>

        <Button
          type="button"
          size="sm"
          variant={editor.isActive("heading", { level: 1 }) ? "default" : "outline"}
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        >
          <Heading1 size={16} />
        </Button>

        <Button
          type="button"
          size="sm"
          variant={editor.isActive("heading", { level: 2 }) ? "default" : "outline"}
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        >
          <Heading2 size={16} />
        </Button>

        <Button
          type="button"
          size="sm"
          variant={editor.isActive("heading", { level: 3 }) ? "default" : "outline"}
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        >
          <Heading3 size={16} />
        </Button>

        <Button
          type="button"
          size="sm"
          variant={editor.isActive("bulletList") ? "default" : "outline"}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          <List size={16} />
        </Button>

        <Button
          type="button"
          size="sm"
          variant="outline"
          onClick={() => {
            const url = prompt("Image URL");
            if (url) editor.chain().focus().setImage({ src: url }).run();
          }}
        >
          <ImageIcon size={16} />
        </Button>
      </div>

      {/* Editor Area */}
      <EditorContent
        editor={editor}
        className="min-h-[180px] p-3 focus:outline-none prose max-w-none
          [&_p]:mt-3 [&_p]:leading-7
          [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:mt-6
          [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-5
          [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-4
          [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mt-3"
      />
    </div>
  );
}
