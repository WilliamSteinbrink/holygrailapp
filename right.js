function Right(props){
  return (
    <>
      <PlusMinus section="right" handle={props.handle}/>
      <div className="section">Right:{props.data.right}</div>
      <Data data={props.data}/>
    </>
  )
}