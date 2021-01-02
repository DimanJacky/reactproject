### React lifecycle
#### Базовый жизненный цикл

componentWillMount

render

componentDidMount



#### Жизненный цикл изменения

componentWillReceiveProps

shouldComponentUpdate если используется, то не вызываются componentWillUpdate и componentDidUpdate

componentWillUpdate

componentDidUpdate



#### Жизненный цикл удаления

componentWillUnmount



#### Жизненные циклы React 16.3+
getDerivedStateFromRrops

getSnapshotBeforeUpdate используется вместе с componentDidUpdate
