import styles from './page.module.css';
import P5Sketch from './P5Sketch';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="size-full min-h-screen bg-landing bg-cover bg-center rounded-md">
        <div className="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          consectetur nec nulla et imperdiet. Fusce venenatis nisi augue, vel
          luctus mi mollis nec. Cras tristique enim nunc, id imperdiet erat
          imperdiet at. Phasellus cursus dictum odio, id scelerisque felis
          ultrices eu. Nulla ultricies, ex sit amet placerat condimentum, purus
          lorem tincidunt sapien, congue semper mi dolor a risus. Aliquam est
          diam, rutrum ut luctus ac, lobortis eget sapien. Proin in nibh cursus,
          porttitor neque lobortis, tincidunt risus.
        </div>
      </div>
      <P5Sketch />
    </main>
  );
}

// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <div className={styles.description}>
//         <p>
//           Get started by editing{' '}
//           <code className={styles.code}>src/app/page.tsx</code>
//         </p>
//         <div>
//           <a
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className={styles.vercelLogo}
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className={styles.center}>
//         <Image
//           className={styles.logo}
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className={styles.grid}>
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Docs <span>-&gt;</span>
//           </h2>
//           <p>Find in-depth information about Next.js features and API.</p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Learn <span>-&gt;</span>
//           </h2>
//           <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Templates <span>-&gt;</span>
//           </h2>
//           <p>Explore starter templates for Next.js.</p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Deploy <span>-&gt;</span>
//           </h2>
//           <p>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   );
// }
