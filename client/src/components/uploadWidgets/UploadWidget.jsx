// import { useEffect, useRef } from "react";

// const UploadWidget = ({ uwConfig, setPublicId, setState }) => {
//   const uploadWidgetRef = useRef(null);
//   const uploadButtonRef = useRef(null);

//   useEffect(() => {
//     const initializeUploadWidget = () => {
//       if (window.cloudinary && uploadButtonRef.current) {
//         // Create upload widget
//         uploadWidgetRef.current = window.cloudinary.createUploadWidget(
//           uwConfig,
//           (error, result) => {
//             if (!error && result && result.event === "success") {
//               console.log("Upload successful:", result.info);
//               setPublicId(result.info.public_id);
//               setAvatar(result.info.secure_url);
//               setState((prev) => [...prev, result.info.secure_url]);
//             }
//           }
//         );

//         // Add click event to open widget
//         const handleUploadClick = () => {
//           if (uploadWidgetRef.current) {
//             uploadWidgetRef.current.open();
//           }
//         };

//         const buttonElement = uploadButtonRef.current;
//         buttonElement.addEventListener("click", handleUploadClick);

//         // Cleanup
//         return () => {
//           buttonElement.removeEventListener("click", handleUploadClick);
//         };
//       }
//     };

//     initializeUploadWidget();
//   }, [uwConfig, setPublicId]);

//   return (
//     <button
//       ref={uploadButtonRef}
//       id="upload_widget"
//       className="cloudinary-button"
//     >
//       Upload
//     </button>
//   );
// };

// export default UploadWidget;

import { useEffect, useRef } from "react";

const UploadWidget = ({ uwConfig = {}, setState }) => {
  const uploadWidgetRef = useRef(null);
  const uploadButtonRef = useRef(null);

  useEffect(() => {
    // Require Cloudinary script to be loaded in index.html:
    // <script src="https://upload-widget.cloudinary.com/global/all.js"></script>
    if (!window.cloudinary) {
      console.error("Cloudinary upload widget script not loaded.");
      return;
    }
    if (!uploadButtonRef.current) return;

    // Merge minimal required options with user config
    const config = {
      multiple: false,
      ...uwConfig,
    };

    // Initialize widget once
    uploadWidgetRef.current = window.cloudinary.createUploadWidget(
      config,
      (error, result) => {
        if (error) {
          console.error("Cloudinary upload error:", error);
          return;
        }
        if (result && result.event === "success") {
          const info = result.info || {};
          const url = info.secure_url || info.url || info.public_id;
          if (!url) {
            console.warn("No url returned from Cloudinary result.info:", info);
            return;
          }
          // Append uploaded image url to images state
          if (typeof setState === "function") {
            setState((prev = []) => {
              // if multiple allowed result may include array; but widget returns single success per file
              return [...prev, url];
            });
          }
        }
      }
    );

    // click handler to open widget
    const handleUploadClick = (e) => {
      e.preventDefault();
      if (uploadWidgetRef.current) uploadWidgetRef.current.open();
    };

    const buttonEl = uploadButtonRef.current;
    buttonEl.addEventListener("click", handleUploadClick);

    return () => {
      buttonEl.removeEventListener("click", handleUploadClick);
      // no official destroy API for the widget; just clear ref
      uploadWidgetRef.current = null;
    };
  }, [uwConfig, setState]);

  return (
    <button
      ref={uploadButtonRef}
      id="upload_widget"
      className="cloudinary-button"
      type="button"
    >
      Upload
    </button>
  );
};

export default UploadWidget;
