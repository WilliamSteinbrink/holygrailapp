function Left(props){
  return (
    <>
      <PlusMinus section="left" handle={props.handle}/>
      <div className="section">Left:{props.data.left}</div>
      <Data data={props.data}/>
    </>
  )
}