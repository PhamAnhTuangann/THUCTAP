import React from 'react';
import 'antd/dist/antd.css';
import './App.css';

import GSM from './Component/GSM/GSM/GSM';
import QLCB from './Component/QLCanhBao/QLCB/QLCB';
import BCTPGD from './Component/BaoCaoTheoPGD/BCPGD/BCPGD';
import QTC from './Component/QuyenTC/QTC/QTC';
import QLTBGSM from './Component/QLThietbiGSM/QLGSM/QLGSM';


import { Layout, Avatar } from 'antd';
import { DashboardFilled, UserOutlined } from '@ant-design/icons';
const { Header, Footer, Sider, Content } = Layout;


function App() {
  return (
    <div className="background">
      <QLTBGSM/>
    </div>
  );
}

export default App;

