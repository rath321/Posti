import DataTable from '../common/DataTable';
const ViewList = (props) => {
    console.log(props)
    // debugger;
    return (
      <>
        {/* {props.posts.map((data, index) => (
          <p key={index}>{data.title}</p>
        ))} */}
          <DataTable items={props.posts}>
                    <h4 className="text-info">Employees Data</h4>
                </DataTable>
      </>
    );
  };
  
  export default ViewList;
  