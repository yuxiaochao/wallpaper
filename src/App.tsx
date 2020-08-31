import React, {useEffect} from 'react';
import './App.css';
import {Slider} from 'antd';


function App() {
  const [size, setSize] = React.useState('small');
  const [height, setHeight] = React.useState(30);
  const [format, setFormat] = React.useState('jpg');
  const size_img = [
    'small',
    'medium',
    'large',
    '4096x4096'
  ]
  const list_jpg = [
    'https://pbs.twimg.com/media/EbdAPY-XQAAYtCr?format=png&name=4096x4096',
    'https://pbs.twimg.com/media/EbdAPYhXYAEmS5H?format=png&name=4096x4096',
    'https://pbs.twimg.com/media/EbdAPYRXgAUFSg8?format=png&name=4096x4096',
    'https://pbs.twimg.com/media/EbibNcTX0AAFED0?format=png&name=4096x4096',
    'https://pbs.twimg.com/media/Ebrsuz4XQAcHWoM?format=png&name=4096x4096',
    'https://pbs.twimg.com/media/EckratGWsAMaHsR?format=png&name=4096x4096',
    'https://pbs.twimg.com/media/Eck2kQEXYAYbX8C?format=png&name=4096x4096',
    'https://pbs.twimg.com/media/EdYPLyIXsAE0qHa?format=png&name=4096x4096',
    'https://pbs.twimg.com/media/EdsvmEqWoAI4nsp?format=png&name=4096x4096',
    'https://pbs.twimg.com/media/Eds5pjwXsAE5Esc?format=png&name=4096x4096',
    'https://pbs.twimg.com/media/EeQoTb6XsAAxwOk?format=png&name=4096x4096',
    'https://pbs.twimg.com/media/EeQoSeZXgAEbzns?format=png&name=4096x4096',
    'https://pbs.twimg.com/media/Ee1v_IJXgAIENbX?format=png&name=4096x4096',
    'https://pbs.twimg.com/media/EgMTaUYWkAE5bni?format=png&name=4096x4096',
  ];
  console.log(JSON.stringify(list_jpg))
  useEffect(() => {
  });

  function qihuan(item: string) {
    setSize(item);
  }

  function change(num: number) {
    console.log(num)
    setHeight(num);
  }

  function filter(item: string) {
    console.log('aaaaaa')
    if (format === 'png') item = item.replace('format=jpg', 'format=' + format)
    if (format === 'jpg') item = item.replace('format=png', 'format=' + format)
    return item;
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{position: 'absolute', height: 200, right: 0, top: 30}}>
          <Slider
            onChange={(value: number) => change(value)}
            vertical
            defaultValue={30}
            max={100}
            min={10}
          />
        </div>
        <div style={{width: '100%', display: "flex", height: '30px', justifyContent: 'center'}}>
          {
            size_img.map((item, index) =>
              <div key={index} style={{
                flex: 1,
                backgroundColor: '#a96484',
                marginInlineEnd: 5,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
                display: "flex"
              }}
                   onClick={() => qihuan(item)}>
                <label key={index} style={{color: '#e8d3c5'}}>{item}</label>
              </div>
            )
          }
        </div>
        <div style={{width: '100%', display: "flex", height: '30px', justifyContent: 'center', marginTop: 5}}>
          <div style={{
            flex: 1,
            backgroundColor: '#a96484',
            marginInlineEnd: 5,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            display: "flex"
          }}
               onClick={() => {
                 setFormat('jpg')
               }}>
            <label style={{color: '#e8d3c5'}}>jpg</label>
          </div>
          <div style={{
            flex: 1,
            backgroundColor: '#a96484',
            marginInlineEnd: 5,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            display: "flex"
          }}
               onClick={() => {
                 setFormat('png')
               }}>
            <label style={{color: '#e8d3c5'}}>png</label>
          </div>
        </div>
        <div style={{flex: 1}}>
          {
            list_jpg.map((item, index) =>
              <img style={{height: height + 'vmin'}} src={filter(item) + size} className="App-logo" alt="logo"/>)
          }
          {
            list_jpg.map((item, index) =>
              <img style={{height: height + 'vmin'}} src={filter(item) + size} className="App-logo" alt="logo"/>)
          }
          {
            list_jpg.map((item, index) =>
              <img style={{height: height + 'vmin'}} src={filter(item) + size} className="App-logo" alt="logo"/>)
          }
          {
            list_jpg.map((item, index) =>
              <img style={{height: height + 'vmin'}} src={filter(item) + size} className="App-logo" alt="logo"/>)
          }
        </div>
      </header>
    </div>
  );
}


export default App;
