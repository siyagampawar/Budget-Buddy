import React, {useState, useMemo} from 'react'
import styled from "styled-components";
import bg from '../img/bg.png'
import {MainLayout} from '../styles/Layouts'
import Orb from '../Components/Orb/Orb'
import Navigation from '../Components/Navigation/Navigation'
import Dashboard from '../Components/Dashboard/Dashboard';
import Income from '../Components/Income/Income'
import Expenses from '../Components/Expenses/Expenses';
import Acorn from '../Components/Acorn/Acorn'
import { useGlobalContext } from '../context/globalContext';

function Home() {
  const [active, setActive] = useState(1)

  const global = useGlobalContext()
  console.log(global);

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Income />
      case 4: 
        return <Expenses />
      case 5: 
        return <Acorn />
      default: 
        return <Dashboard />
    }
  }

  const orbMemo = useMemo(() => {
    return <Orb />
  },[])

  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout>
      {/* <BotpressChat/>
      <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
      <script src="https://mediafiles.botpress.cloud/efc0fc2d-02e1-4331-aa33-0d129a13a01a/webchat/config.js" defer></script> */}
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;

export default Home;