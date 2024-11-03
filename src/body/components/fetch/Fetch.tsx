// import { useEffect, useState } from 'react';
// import { BaseButton } from '@/shared';
//
// interface User{
//   name:string,
//   id: string,
// }
// export const Fetch = () => {
//   const [state, setState] = useState<User[]>([]);
//
//   // const a = 8;
//   // const func = () => {};
//
//   const getData = () => {
//     fetch('https://65c875f5a4fbc162e111c5dd.mockapi.io/api/h1/users', { method: 'GET' }).then(
//       (res) => {
//         res.json().then((res1) => setState(res1));
//       }
//     );
//   };
//
//   useEffect(() => {
//     getData();
//   }, []);
//
//   console.log(state);
//   return (
//     <>
//       <BaseButton>Fetch</BaseButton>
//       <ul>
//         {state.map((el) => (
//           <li key={el.id}>{el.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// };
