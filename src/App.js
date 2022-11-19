// import logo from './logo.svg';
// import {html_to_pdf} from 'html-pdf-node';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
// import {increment,decrement,logIn} from './actions';
// import * as allactions from './actions';

import * as allSliceActions from './slices';
import { Outlet, Link } from "react-router-dom";
import HtmlComponent from './components/htmlcomponent';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useState } from 'react';
// import SomeComponent from './SomeComponent';

// import {increment,decrement} from './slices/counterSlice';
// import {signin} from './slices/isLoggedSlice';

let options = { format: 'A4' };
let file = [{ url: "https://example.com", name: 'example.pdf' }];

// html_to_pdf.generatePdfs(file, options).then(output => {
//   console.log("PDF Buffer:-", output); // PDF Buffer:- [{url: "https://example.com", name: "example.pdf", buffer: <PDF buffer>}]
// });

function App() {

  /**
   * @typedef {Object} ReferenceState
   */
  /**
   * @callback ReferenceStateSetter
   * @param {ReferenceState} state
   * @return {void}
   */
  /**
   * @namespace{Object}
   * @property {ReferenceState} 0
   * @property {ReferenceStateSetter} 1
   */
  const [mmm,setmmm] = useState(false)

  /**
   * @function counter
   * use selector to get counter value
   * @param {object} state - the store state
   * 
   */
  const counter = useSelector(state => state.counter.value);

/**
 * @typedef {Object} Storestate
 */

  const isLogged = useSelector(state => state.isLogged.value);
  const dispatch = useDispatch();


  /**
   * @function pdfdownload
   * @description
   * pdfdownload to do something test document
   */
  const pdfdownload = () => {
    const input = document.getElementById('capture');
    const divHeight = input.clientHeight
    const divWidth = input.clientWidth
    let ratio = divHeight / divWidth;

    let allheights = [input.clientHeight]; let allwidth = [input.clientWidth];
    let allratios =  [input.clientHeight/input.clientWidth]
    let ratioofchoice = allheights[0]/allwidth[0]; let maxwidth = allwidth[0];
    allDescendants(input);
    function allDescendants (node) {
      for (var i = 0; i < node.childNodes.length; i++) {
        var child = node.childNodes[i];
        allDescendants(child);
        if(child.clientHeight !== undefined){
          allheights.push(child.clientHeight);
        }
        if(child.clientWidth !== undefined) {
          allwidth.push(child.clientWidth);

        }
        if(child.clientHeight !== undefined && child.clientWidth !== undefined) {
          allratios.push(child.clientHeight/child.clientWidth)

          if(child.clientWidth > maxwidth){
            maxwidth = child.clientWidth;
            ratioofchoice = child.clientHeight/child.clientWidth
          }
        }
      }
  }
  console.log(allheights);
  console.log(allwidth);
  ratio = Math.min(...allratios);
  ratio = Math.max(...allheights)/Math.max(...allwidth);
  ratio = ratioofchoice;
  console.log(ratio);
  
    html2canvas(input, { scale: '1'}).then((canvas) => {
      const imgData = canvas.toDataURL('image/jpeg');
      const pdfDOC = new jsPDF("l", "mm", "a0"); //  use a4 for smaller page
  
      const width = pdfDOC.internal.pageSize.getWidth();
      let height = pdfDOC.internal.pageSize.getHeight();
      console.log('height',height);
       height = ratio * width;

      console.log('width',width);  
      pdfDOC.addImage(imgData, 'JPEG', 0, 0, width - 20, height - 10);
      pdfDOC.save('summary.pdf');   //Download the rendered PDF.
    })
//     var body = document.body,
// html = document.getElementById('capture');
// var height = Math.max(body.scrollHeight, body.offsetHeight,
//              html.clientHeight, html.scrollHeight, html.offsetHeight);
//              document.body.style.height = `${height}px`
// html2canvas(document.body).then(function (canvas) {
//                 var imgData = canvas.toDataURL('image/pdf')
//                 var doc = new jsPDF('p', 'mm', [canvas.width, canvas.height])
//                 doc.addImage(imgData, 'PDF', 10, 10, canvas.width, canvas.height)
//                 doc.save('name-of-pdf.pdf')
//   })
  };
  return (
    <div className="App">
      <HtmlComponent/>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(allSliceActions.increment(5))}>+</button>
      <button onClick={() => dispatch(allSliceActions.decrement())}>-</button>
      <button onClick={() => dispatch(allSliceActions.incrementAsync(3))}>+Async</button>
      
      <button onClick={() => dispatch(allSliceActions.reset())}>reset</button>
      {isLogged ? <h3>valuable info i shouldnt see</h3> : ""}
      <button onClick={() => dispatch(allSliceActions.togglesignin())}>Log {isLogged ? "Out" : "In"}</button>
      <button onClick={pdfdownload}>pdf download</button>
      {/* http://localhost:3000/ */}
      <br/>
      {/* <iframe src="http://localhost:3000/index.html" height="800px" width="100%" title="Iframe Example"></iframe> */}
      {/* <SomeComponent /> */}
      <Link to="/ex">Invoices</Link>
    </div>
    
  );
}

export default App;
