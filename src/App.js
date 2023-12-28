import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from './actions';

const App = ({ fetchData, data, loading, error }) => {

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <div>
      <h1>API Integration with Redux</h1>
      <ul>
        {data.map((item) => (
          <li>{item.userId}</li>
        ))}
      </ul>
    
      {/* {console.log("this",data)} */}
      
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
  loading: state.loading,
  error: state.error,
});

export default connect(mapStateToProps, { fetchData })(App);
