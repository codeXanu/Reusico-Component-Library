import { useState } from "react";
import "./Showcase.css";
import { CopyBlock, dracula, railscast } from "react-code-blocks";
import Toast from "./components/ToastPopup/ToastPopup";

export default function Showcase({ title, preview, code, para }) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="showcase">
        <div className="showcase-header">
            <h2 className="showcase-title">{title}</h2>
            
            <div className="flex gap-4 mb-4">
                <button
                className={`px-4 py-2 rounded-md font-semibold transition ${
                    showCode
                    ? "bg-white text-gray-800 border border-gray-300"
                    : "bg-gray-800 text-white"
                }`}
                onClick={() => setShowCode(false)}
                >
                Preview
                </button>
                <button
                className={`px-4 py-2 rounded-md font-semibold transition ${
                    !showCode
                    ? "bg-white text-gray-800 border border-gray-300"
                    : "bg-gray-800 text-white"
                }`}
                onClick={() => setShowCode(true)}
                >
                Code
                </button>
            </div>
        </div>

        <div>
            <p className= "text-gray-500 text-xl max-w-2xl leading-relaxed mb-12" >{para} </p>
        </div>

        <div className="showcase-content">
            {showCode ? (
            <div className="showcase-code-block">
                <CopyBlock
                    text={code}
                    language="js"
                    showLineNumbers={true}
                    startingLineNumber={1}
                    theme={dracula}
                    codeBlock
                    wrapLines
                />
            </div>
            ) : (
            <div className="showcase-preview">{preview}</div>
            )}
        </div>

        {showCode && <Toast position="bottom-right" variant="success" message="Showing Code" duration={5000} />}

    </div>
  );
}
