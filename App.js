const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'I am the childeren'),
    React.createElement('h2', {}, 'I am the childeren '),
  ]),
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'I am the childeren'),
    React.createElement('h2', {}, 'I am the childeren '),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);



