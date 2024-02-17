1.npx create-react-app employee-management => for create new react app     <br>
2.npm i react-router-dom => routing dependency in react      <br>
3.npm run start => to run react application      <br>
4.npm i axios => for api call dependency      <br>
----------------------------------------------------------------------------------------------------------

1.folder: public --> index.html --> ` <div id="root"></div> `--> react uses this element as a REACT DOM. what ever we write will redered the element in id is root <br>
2.folder: src --> index.js --> <br>
`const root = ReactDOM.createRoot(document.getElementById('root'));`<br>
`root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);` 
