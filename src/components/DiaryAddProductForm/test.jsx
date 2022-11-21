// <div className={s.maxBox}>

//   {isMobile && (
//     <button className={s.exit} onClick={() => setAddDairyProducts(false)}>
//       <svg
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <g clipPath="url(#clip0_6_1348)">
//           <path d="M6 6L18 18" stroke="#212121" strokeWidth="2" />
//           <path d="M6 18L18 6" stroke="#212121" strokeWidth="2" />
//         </g>
//         <defs>
//           <clipPath id="clip0_6_1348">
//             <rect width="24" height="24" fill="white" />
//           </clipPath>
//         </defs>
//       </svg>
//     </button>
//   )}
//   <Box
//     onSubmit={handelSubmit}
//     className={s.form}
//     component="form"
// sx={{
//   '& > :not(style)': { m: 1, marginLeft: 0 },
//   '& #standard-basic-label': {
//     color: grey[500],
//     fontFamily: 'Arimo',
//     fontWeight: 700,
//   },
//   '& #standard-basic-label.Mui-focused': {
//     color: orange[700],
//   },
// }}
//     noValidate
//     autoComplete="off"
//   >
//     <TextField
//       color="warning"
//       sx={{ width: '240px' }}
//       className={s.inName}
//       type="text"
//       value={name}
//       name="name"
//       onChange={handelChangeName}
//       id="standard-basic"
//       label="Enter product name"
//       variant="standard"
//     />
//     {products && name && isOpen && (
//       <div className={s.menu}>
//         {products.map(e => (
//           <button
//             className={s.buttonProducts}
//             type="button"
//             name={e.title.ru}
//             key={e._id}
//             id={e._id}
//             onClick={handlClik}
//           >
//             {e.title.ru}
//           </button>
//         ))}
//       </div>
//     )}
//     <TextField
//   color="warning"
//   sx={{ width: '106px', ml: '48px', mr: '10px' }}
//       className={s.inGrams}
//       type="number"
//       onChange={handelChangeWeight}
//       value={weight}
//       id="standard-basic"
//       label="Grams"
//       variant="standard"
//     />
//     {isTablet && (
//       <Button
//         sx={{ width: '50px', height: '50px', borderRadius: ' 50%' }}
//         type="submit"
//         className={s.bt + ' ' + s.mybt}
//         variant="contained"
//         disabled={!weight || !name}
//       ></Button>
