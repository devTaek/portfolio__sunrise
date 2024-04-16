// import React, {useState } from 'react';

// function DynamicFormComponent() {
//   const [formFields, setFormFields] = useState([{ name: '', value: '' }]);

//   const handleAddFields = () => {
//     const values = [...formFields, { name: '', value: '' }];
//     setFormFields(values);
//   };

//   const handleRemoveFields = (index) => {
//     if (formFields.length === 1) {
//       alert('At least one form must remain');
//       return;
//     }
//     const values = [...formFields].splice(index, 1);
//     setFormFields(values);
//   };

//   const handleInputChange = (index,e) => {
//     const values = [...formFields];

//     if (e.target.name === 'name') {
//       values[index].name = e.target.value;
//     } else {
//       values[index].value = e.target.value;
//     }
//     setFormFields(values);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formFields);
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ padding: '2%' }}>
//       {formFields.map((field, index) => (
//         <div key={index} style={{ marginBottom: 5 }}>

//           {/* 텍스트입력 */}
//           <input
//             type='text'
//             placeholder='Field name'
//             name='name'
//             value={field.name}
//             onChange={(e) => handleInputChange(index, e)}
//           />

//           {/* 텍스트입력 */}
//           <input
//             type='text'
//             placeholder='Field value'
//             name='value'
//             value={field.value}
//             onChange={(e) => handleInputChange(index, e)}
//           />

//           {/* 제거버튼 */}
//           <button type='button' onClick={() => handleRemoveFields(index)}>
//             Remove
//           </button>
//         </div>
//       ))}

//       {/* 추가버튼 */}
//       <button
//         type='button'
//         onClick={() => handleAddFields()}
//         style={{ marginTop: 10, marginRight: 10 }}
//       >
//         Add Field
//       </button>

//       <button type='submit'>Submit</button>
//     </form>
//   );
// }

// export default DynamicFormComponent;


// const MainPlayers= () => {
//   const {playersList} = useContext(PlayersContext);
//   const [state, setState] = useState({
//     cnt: 0
//   });

//   React.useEffect((cnt)=>{
//     mainSlide();
//   });
//   const {cnt} = state;
//   const slideWrap = React.useRef();
//   const mainSlide=()=>{
//     slideWrap.current.style.transition = `all 0.8s ease-in-out`
//     slideWrap.current.style.transform = `translateX(${-1195*cnt}px)`
// }

//   const prevBtn= (e) => {
//     e.preventDefault();
//     setState({
//         ...state,
//         cnt: state.cnt-1
//     })
//   }
//   const nextBtn= (e) => {
//     e.preventDefault();
//     setState({
//         ...state,
//         cnt: state.cnt+1
//     })
//   }
//   return (
//     <article id='main_players'>
//       <div className="container">
//         <h3>PLAYERS</h3>
//         <div className="gap">
//           <button onClick={prevBtn} className='prev-btn'><img src="./img/pc-prev-btn.png" alt="" /></button>
//           <div ref={slideWrap} className="main-players-box">
//               {playersList.map((item,id) => (
//                 <li key={id}>
//                   <img src="./img/4254b1223bdb-dybala21-copia.png" alt="" />
//                   <span>{item.name}</span>
//                 </li>
//               ))}
//           </div>
//           <button onClick={nextBtn} className='next-btn'><img src="./img/pc-next-btn.png" alt="" /></button>
//         </div>
//       </div>
//     </article>  
//   )
// }

// export default MainPlayers
