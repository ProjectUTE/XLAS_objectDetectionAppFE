import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeContext } from './context';
import { MainLayout } from './layouts';
import { Home, Demo } from './pages';

function App() {
  const [theme, setTheme] = useState(
    () => JSON.parse(localStorage.getItem('theme')) || false
  );
  const value = { theme, setTheme };

  useEffect(() => {
    const className = 'dark-theme';
    theme
      ? document.body.classList.add(className)
      : document.body.classList.remove(className);

    // Set theme in local storage
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider value={value}>
      <MainLayout>
        <Switch>
          <Route path={`/`} exact component={Home} />
          <Route path={`/demo`} component={Demo} />
        </Switch>
      </MainLayout>
    </ThemeContext.Provider>
  );
}

export default App;
