

// export function Avatar() {
//   const input = document.getElementById("file-input");
//   const image = document.getElementById("img-preview");

//   input.addEventListener("change", (e) => {
//     if (e.target.files.length) {
//       const src = URL.createObjectURL(e.target.files[0]);
//       image.src = src;
//     }
//   });

//   //Toast
//   function showToast() {
//     var toast = document.getElementById("toast");
//     toast.className = "show";
//     setTimeout(function () {
//       toast.className = toast.className.replace("show", "");
//     }, 3000);
//   }

//   return (
//     <>
//       <div className={styles.body}>
//         <label for="file-input">
//           <input className={styles.input} type="file" id="file-input" />
//           <img
//             className={styles.img}
//             src="https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png"
//             alt="perfil de usuario"
//             id="img-preview"
//             onload="showToast()"
//           />
//         </label>
//         <div className={styles.toast} id="toast">Imagen Cargada</div>
//       </div>
//     </>
//   );
// }
