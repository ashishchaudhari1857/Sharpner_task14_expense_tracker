import './Filter.css';
const Filteryear=(props)=>{
    return(
<>
<div className="container">
<select  className="yearBar" onChange={props.setYear}>
    <option value="2001">2001</option>
    <option value="2002">2002</option>
    <option value="2003">2003</option>
    <option value="2023">2023</option>
    <option value="2004">2004</option>
  </select>;
  <div className='text_area'>Filter by year</div>
  </div>
</>
    );
}
export {Filteryear};