

function Data(props) {
  return (
    <div>
      Header: {props.data.header},
      Left: {props.data.left},
      Article: {props.data.article},
      Right: {props.data.right},
      Footer: {props.data.footer}
    </div>
  );
}

function App() {
  const [data, setData] = React.useState({header:0,left:0,article:0,right:0,footer:0});

  function handle(section) {
    console.log('Pong', section);
    const value = data[section.name] + section.value;
    const object = {[section.name]:value};
    setData({...data, ...object})
  }

  return (
    <>
      <div className="grid">
        <Header handle={handle} data={data}/>
        <Left handle={handle} data={data}/>
        <Article handle={handle} data={data}/>
        <Right handle={handle} data={data}/>
        <Footer handle={handle} data={data}/>
      </div>
    </>
  );
}




ReactDOM.render(
  <App/>,
  document.getElementById('root')
);