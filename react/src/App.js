import { Switch, Route } from 'react-router-dom'
import { Home, Detail, NotFound, Results } from 'pages'
import './App.css'

const App = () => {
	return (
		<div className='App'>
			<div className='bg'>
				<div className='bg-filter'>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route
							path='/results/:page/:query'
							component={Results}
						/>
						<Route path='/detail/:id' component={Detail} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</div>
		</div>
	)
}

export default App
