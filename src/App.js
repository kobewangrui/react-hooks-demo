import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        {/* 配置路由 */}
        <Route path="/" component={Home} />
      </div>
    </Router>
  )
}

export default App
