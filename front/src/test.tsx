import React from 'react';
// import './test.scss';

import styled from 'styled-components';

const Teststyle = styled.div`
  width: 500px;
  height: 200px;
  margin: 0 auto;
  background-color: yellow;
`;

// const 변수명 = (매개변수명:자료형) => {처리구문}
// const App = () => {
//   return (
//     <div className="test_container">
//       <h1>hello react123</h1>
//     </div>
//   );
// };

const App = () => {
  return (
    <Teststyle>
      <h1>hello react123</h1>
    </Teststyle>
  );
};

export default App;
